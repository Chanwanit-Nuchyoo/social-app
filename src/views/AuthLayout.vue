<script setup lang="ts">
import ThemeToggler from '@/components/navbar/ThemeToggler.vue'
import { Icon } from '@iconify/vue/dist/iconify.js'
</script>

<template>
  <div class="flex gap-1 w-full h-screen">
    <div class="hidden md:flex flex-col flex-1 w-full h-full relative">
      <div class="absolute inset-0">
        <img
          src="@/assets/images/hanashii_2_light.webp"
          alt="Background"
          class="object-cover w-full h-full brightness-[0.3]"
        />
        <div class="absolute inset-0 bg-black/20" />
      </div>

      <!-- Main content overlaying the mask -->
      <div class="relative z-10 flex flex-col items-center justify-center h-full px-8 gap-8">
        <div class="text-center">
          <h1 class="text-7xl font-bold mb-4 text-primary">Hanashii</h1>
          <p class="text-xl mb-8 text-white">Let's talk, connect, and share moments together</p>
        </div>

        <!-- Feature highlights -->
        <div class="flex flex-col gap-6 w-full max-w-md">
          <div class="flex items-center gap-4 bg-background/70 backdrop-blur-md p-4 rounded-lg">
            <Icon icon="bx:bx-chat" class="text-3xl" />
            <div>
              <h3 class="font-semibold">Meaningful Conversations</h3>
              <p class="text-sm">Connect through real, authentic discussions</p>
            </div>
          </div>

          <div class="flex items-center gap-4 bg-background/70 backdrop-blur-md p-4 rounded-lg">
            <Icon icon="bx:bx-group" class="text-3xl" />
            <div>
              <h3 class="font-semibold">Build Communities</h3>
              <p class="text-sm">Find your people and grow together</p>
            </div>
          </div>

          <div class="flex items-center gap-4 bg-background/70 backdrop-blur-md p-4 rounded-lg">
            <Icon icon="bx:bx-world" class="text-3xl" />
            <div>
              <h3 class="font-semibold">Share Your World</h3>
              <p class="text-sm">Express yourself in your unique way</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="flex flex-col flex-1 w-full h-full relative">
      <div class="flex justify-end p-4 absolute top-0 right-0">
        <ThemeToggler />
      </div>
      <div class="flex flex-1 justify-center items-center">
        <RouterView />
      </div>
    </div>
  </div>
</template>
