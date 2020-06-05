import axios from 'axios'
export const HTTP = axios.create({
    baseURL: process.env.SENTIMENT_URL,
    timeout: 5000,
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json'
    }
})