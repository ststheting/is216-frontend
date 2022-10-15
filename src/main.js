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
import RegisterOTP from './views/RegisterOTP.vue'
import ShowAllNearby from './views/ShowAllNearby.vue'
import Chat from './views/Chat.vue'
import './style.css'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import VueGoogleMaps from '@fawmi/vue-google-maps'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAddncb3t3ZaveYLdocYKtWQg1vHX6FsAU",
    authDomain: "hitcher-9ae90.firebaseapp.com",
    projectId: "hitcher-9ae90",
    storageBucket: "hitcher-9ae90.appspot.com",
    messagingSenderId: "688326591641",
    appId: "1:688326591641:web:03a0ecc41e5045c0d86408",
    databaseURL: "https://hitcher-9ae90-default-rtdb.asia-southeast1.firebasedatabase.app/"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
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
    {
        path: '/showallnearby',
        name: 'ShowAllNearby',
        component: ShowAllNearby
    },
    {
        path: '/chat',
        name: 'Chat',
        component: Chat
    },

]

const router = createRouter({
    history: createWebHistory(),
    routes
})

createApp(App).use(VueGoogleMaps, {
    load: {
        key: 'AIzaSyCnf0_2dW7jhXlpL46JqRvrKOFgFQ7tv2k'
    },
}).use(router).mount('#app')

