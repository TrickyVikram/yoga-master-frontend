
import axios from 'axios';

const API = axios.create({
    baseURL: 'http://localhost:4500/api',
    headers: { 'Content-Type': 'application/json' },
});


export const register = (formData) => {
    return API.post('/users/register', formData);
  };

export const login = (data) => API.post('/users/login', data);
export const getProfile = () => API.get('/users/profile', { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } });
export const purchaseBook = (bookId) => API.post(
    '/users/purchaseClasses', 
    { bookId }, 
    { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }
);
export const getBooks = () => API.get('/Classes');
export const getBook = (id) => API.get(`/Classes/${id}`);
export const logout = () => {
    localStorage.removeItem('token');
};

// Function to update user profile
export const updateProfile = async (formData) => {
    try {
        const response = await API.put('/users/update', formData, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
                'Content-Type': 'multipart/form-data',
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error updating profile:', error);
        throw error; // Optional: re-throw the error to handle it in the calling code
    }
};