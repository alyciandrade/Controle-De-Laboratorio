import axios from "axios";

const API_URL = "http://localhost:5196/api/User";

const login = async (email, senha) => {
  try {
    const response = await axios.post(`${API_URL}/login`, {
      email,
      senha,
    });
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : null;
  }
};

const register = async (email, senha, ocupacao) => {
  try {
    const response = await axios.post(`${API_URL}/register`, {
      email,
      senha,
      ocupacao,
    });
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : null;
  }
};

export default {
  login,
  register,
};
