<template>
  <section class="flex items-center justify-center min-h-screen bg-gray-100 px-4">
    <div class="w-full max-w-md bg-white p-8 rounded-xl">
      <div class="flex justify-center mb-6">
        <RouterLink to="/">
          <img src="https://d22po4pjz3o32e.cloudfront.net/logo-image.svg" alt="Logo" class="h-10" />
        </RouterLink>
      </div>
      <div class="flex justify-between mb-6 border-b pb-2">
        <span class="text-lg font-semibold text-black border-b-2 border-black pb-1">Register</span>
        <RouterLink to="/login" class="text-gray-500 hover:text-black">Login</RouterLink>
      </div>
      <h1 class="text-2xl font-bold mb-1">Create your account</h1>
      <p class="text-gray-500 mb-6">Register with your email and password</p>
      <form @submit="handleRegister" class="space-y-4">
        <div>
          <label for="email" class="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <input
            v-model="email"
            id="email"
            type="email"
            required
            class="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label for="password" class="block text-sm font-medium text-gray-700 mb-1">Password</label>
          <input
            v-model="password"
            id="password"
            type="password"
            required
            class="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          type="submit"
          class="w-full py-2 px-4 bg-white border border-blue-500 text-black rounded transition"
        >
          Register
        </button>
      </form>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { register } from '@/services/AuthService'
import { useRouter } from 'vue-router'

const email = ref('')
const password = ref('')
const error = ref('')
const router = useRouter()

const handleRegister = async () => {
  error.value = ''
  try {
    await register(email.value, password.value)
    router.push('/login')
  } catch (err) {
    error.value = err.message
  }
}
</script>
