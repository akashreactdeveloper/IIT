<template>
    <div class="login-page">
        <h1>Login</h1>
        <form @submit.prevent="handleSubmit">
            <div>
                <label for="username">username:</label>
                <input type="username" id="username" v-model="username" required />
            </div>
            <div>
                <label for="password">Password:</label>
                <input type="password" id="password" v-model="password" required />
            </div>
            <button type="submit">Login</button>
        </form>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';
import Cookies from 'js-cookie'; // Import js-cookie
import API_URL from '../../constants.js';

const username = ref('');
const password = ref('');

console.log('API_URL:', API_URL);

const handleSubmit = () => {
    console.log('Username:', username.value);
    console.log('Password:', password.value);

    axios.post('http://192.168.184.183:8000/api/login/', {
        username: username.value,
        password: password.value
    })
    .then(response => {
        Cookies.set('access_token', response.data.access, { expires: 7 }); 
        alert('Login successful');
    })
    .catch(error => {
        console.error('There was an error!', error);
    });
};
</script>

<style scoped>
.login-page {
    max-width: 400px;
    margin: 0 auto;
    padding: 1rem;
    border: 1px solid #ccc;
    border-radius: 4px;
}

.login-page h1 {
    text-align: center;
}

.login-page form {
    display: flex;
    flex-direction: column;
}

.login-page form div {
    margin-bottom: 1rem;
}

.login-page form label {
    margin-bottom: 0.5rem;
    font-weight: bold;
}

.login-page form input {
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 4px;
}

.login-page form button {
    padding: 0.5rem;
    border: none;
    border-radius: 4px;
    background-color: #007bff;
    color: white;
    cursor: pointer;
}

.login-page form button:hover {
    background-color: #0056b3;
}
</style>
