using Pl.BackEnd.API.Data;
using Pl.BackEnd.API.Models;
using Microsoft.EntityFrameworkCore;

namespace Pl.BackEnd.API.Services
{
    public class UserService
    {
        private readonly ApplicationDbContext _context;

        public UserService(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<User> GetUserByEmailAndPassword(string email, string password)
        {
            return await _context.User
                .FirstOrDefaultAsync(u => u.Email == email && u.Senha == password);
        }

        public async Task<bool> CreateUser(User newUser)
        {
            if (await _context.User.AnyAsync(u => u.Email == newUser.Email))
                return false;

            _context.User.Add(newUser);
            await _context.SaveChangesAsync();
            return true;
        }
    }
}
