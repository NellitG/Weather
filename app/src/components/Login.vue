<template>
  <section class="flex min-h-screen items-center justify-center bg-gray-100 px-6 py-12">
    <div class="w-full max-w-3xl bg-white p-10 rounded-2xl shadow-xl">
      <div class="flex flex-col lg:flex-row gap-12 items-center">
        <div class="w-full lg:w-1/2 text-center lg:text-left">
          <RouterLink to="/">
            <img
              src="https://d22po4pjz3o32e.cloudfront.net/logo-image.svg"
              alt="Logo"
              class="h-10 mx-auto lg:mx-0 mb-6"
            />
          </RouterLink>
          <h1 class="text-3xl md:text-4xl font-bold mb-2">Welcome back!</h1>
          <p class="text-gray-500 text-base md:text-lg">
            Log in to access your account and explore more.
          </p>
        </div>

        <!-- Right: Login Form -->
        <div class="w-full lg:w-1/2">
          <div class="flex justify-between mb-6 border-b pb-2">
            <span class="text-lg font-semibold text-black border-b-2 border-black pb-1">Login</span>
            <RouterLink to="/register" class="text-gray-500 hover:text-black">Register</RouterLink>
          </div>

          <form @submit="handleLogin" class="space-y-5">
            <div>
              <label for="email" class="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                v-model="email"
                id="email"
                type="email"
                required
                class="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label for="password" class="block text-sm font-medium text-gray-700 mb-1">Password</label>
              <input
                v-model="password"
                id="password"
                type="password"
                required
                class="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <button
              type="submit"
              class="w-full py-3 px-6 bg-white text-black rounded-md  border border-blue-500 transition text-base font-semibold"
            >
              Log In
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../services/firebase'; 

const email = ref('');
const password = ref('');
const router = useRouter();

const handleLogin = async (e) => {
  e.preventDefault();
  try {
    await signInWithEmailAndPassword(auth, email.value, password.value);
    alert('Login successful!');
    router.push('/dashboard'); 
  } catch (error) {
    alert(error.message);
  }
};
</script>