import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import Login from './views/Login.vue'
import Register from './views/Register.vue'
import Profile from './views/Profile.vue'
import NewReq from './views/NewReq.vue'
import NewFav from './views/NewFav.vue'
import MapsService from './services/MapsService'
import Home from './views/Home.vue'
import ForgotPassword from './views/ForgotPassword.vue'
import LoginAs from './views/LoginAs.vue'
import RegisterAs from './views/RegisterAs.vue'
import './style.css'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAddncb3t3ZaveYLdocYKtWQg1vHX6FsAU",
    authDomain: "hitcher-9ae90.firebaseapp.com",
    projectId: "hitcher-9ae90",
    storageBucket: "hitcher-9ae90.appspot.com",
    messagingSenderId: "688326591641",
    appId: "1:688326591641:web:03a0ecc41e5045c0d86408"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// import './index.css'


const routes = [
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/register',
        name: 'Register',
        component: Register
    },
    {
        path: '/profile',
        name: 'Profile',
        component: Profile
    },
    {
        path: '/newreq',
        name: 'NewReq',
        component: NewReq
    },
    {
        path: '/newfav',
        name: 'NewFav',
        component: NewFav
    },
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/forgotpassword',
        name: 'ForgotPassword',
        component: ForgotPassword
    },
    {
        path: '/loginas',
        name: 'LoginAs',
        component: LoginAs
    },
    {
        path: '/registeras',
        name: 'RegisterAs',
        component: RegisterAs
    },
    {
        path: '/registerotp',
        name: 'RegisterOTP',
        component: RegisterOTP
    },

]

const router = createRouter({
    history: createWebHistory(),
    routes
})  

createApp(App).use(router).mount('#app')