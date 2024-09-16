using Microsoft.EntityFrameworkCore;
using Pl.BackEnd.API.Models;

namespace Pl.BackEnd.API.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options) { }

        public DbSet<User> User { get; set; }
    }
}
