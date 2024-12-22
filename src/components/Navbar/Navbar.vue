<script setup lang="ts">
import { ref, provide } from 'vue'
import NavItem from '@/components/Navbar/NavItem.vue'
import NavPopover from '@/components/Navbar/NavPopover.vue'
import ThemeToggler from '@/components/Navbar/ThemeToggler.vue'

const menus = ref([
  { name: 'home', icon: 'jam:home-f', toolTip: 'Home' },
  { name: 'search', icon: 'jam:search', toolTip: 'Search' },
])
const activeMenu = ref('home')

provide('activeMenu', activeMenu)
</script>

<template>
  <nav
    class="w-full h-[var(--nav-height)] border-b shadow-md flex justify-between items-center px-4"
  >
    <!-- App logo with text -->
    <div class="flex-1 flex gap-2 items-center">
      <!-- Logo placeholder -->
      <div class="w-[40px] h-[40px] rounded-full bg-rose-900" />
      <!-- App name -->
      <h1 class="text-lg font-bold">Social App</h1>
    </div>

    <!-- Navigation Menus -->
    <div class="flex-1 flex justify-center h-full py-1 gap-2">
      <NavItem
        v-for="m in menus"
        :key="m.name"
        :name="m.name"
        :icon="m.icon"
        :toolTip="m.toolTip"
        @click="activeMenu = m.name"
      />
    </div>

    <!-- Profile image that let user logout -->
    <div class="flex-1 flex items-center gap-2 justify-end">
      <ThemeToggler />
      <NavPopover />
    </div>
  </nav>
</template>
