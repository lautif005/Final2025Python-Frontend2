import axios from 'axios';

// Tu URL de Render. Si falla, usa localhost.
const API_URL = "https://final2025python-backend-lautaroferreria.onrender.com";

const api = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

export default api;