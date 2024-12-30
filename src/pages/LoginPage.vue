<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import Separator from '@/components/ui/separator/Separator.vue'
import { ref } from 'vue'
import { z } from 'zod'

// Zod schema for validation
const loginSchema = z.object({
  email: z.string().email({ message: 'Enter a valid email address.' }),
  password: z.string().min(6, { message: 'Password must be at least 6 characters.' }),
})

// Form state
const email = ref('')
const password = ref('')
const errors = ref<{ email?: string; password?: string }>({})

// Submit handler
const handleSubmit = (event: Event) => {
  event.preventDefault()
  errors.value = {}

  const result = loginSchema.safeParse({ email: email.value, password: password.value })

  if (!result.success) {
    // Map Zod errors to state
    result.error.errors.forEach((err) => {
      if (err.path[0] === 'email') errors.value.email = err.message
      if (err.path[0] === 'password') errors.value.password = err.message
    })
  } else {
    console.log('Submitting', result.data)
    // Submit to your API or authentication service
  }
}
</script>

<template>
  <div class="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px] px-4">
    <div class="flex flex-col space-y-2 text-center">
      <h1 class="text-2xl font-semibold tracking-tight">Welcome back</h1>
      <p class="text-sm text-muted-foreground">Sign in to continue to your account</p>
    </div>
    <form @submit="handleSubmit" class="space-y-4">
      <div>
        <Label for="email" class="text-sm">Email</Label>
        <Input
          type="email"
          id="email"
          v-model="email"
          :aria-invalid="errors.email ? 'true' : 'false'"
          aria-describedby="email-error"
          placeholder="Enter your email"
        />
        <p v-if="errors.email" id="email-error" class="text-sm text-red-600">
          {{ errors.email }}
        </p>
      </div>
      <div>
        <Label for="password" class="text-sm">Password</Label>
        <Input
          type="password"
          id="password"
          v-model="password"
          :aria-invalid="errors.password ? 'true' : 'false'"
          aria-describedby="password-error"
          placeholder="Enter your password"
        />
        <p v-if="errors.password" id="password-error" class="text-sm text-red-600">
          {{ errors.password }}
        </p>
      </div>
      <Button class="w-full" type="submit">Sign In</Button>
    </form>
    <Separator class="my-4" label="Or" />
    <Button class="w-full" variant="outline" type="submit">Sign Up</Button>
  </div>
</template>
