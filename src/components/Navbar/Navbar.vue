<script setup lang="ts">
import NavItem from '@/components/Navbar/NavItem.vue'
import NavPopover from '@/components/Navbar/NavPopover.vue'
import ThemeToggler from '@/components/Navbar/ThemeToggler.vue'
import { useNavbarStore } from '@/stores/navbar'

const navbarStore = useNavbarStore()
</script>

<template>
  <nav
    class="fixed left-0 top-0 z-30 flex flex-col md:flex-row h-[var(--nav-height-mobile)] md:h-[var(--nav-height)] w-full justify-between border-b bg-[hsl(var(--background))] py-1 px-4 shadow-md"
  >
    <!-- App logo with text -->
    <div class="flex flex-1 justify-between md:justify-start items-center gap-2">
      <!-- App name -->
      <h1
        class="k text-lg font-bold bg-gradient-to-r from-rose-400 via-rose-500 to-rose-600 bg-clip-text text-transparent"
      >
        HANASHII
      </h1>
      <ThemeToggler class="block md:hidden" />
    </div>

    <!-- Navigation Menus -->
    <div class="flex h-full flex-1 justify-center">
      <div class="flex gap-2 w-fit">
        <NavItem
          v-for="m in navbarStore.menus"
          :key="m.name"
          :name="m.name"
          :icon="m.icon"
          :toolTip="m.toolTip"
          @click="navbarStore.activeMenu = m.name"
        />
        <div class="relative block md:hidden">
          <NavItem
            name="more"
            icon="ci:hamburger-md"
            toolTip="More"
            @click="navbarStore.activeMenu = 'more'"
          />
        </div>
      </div>
    </div>

    <!-- Profile image that let user logout -->
    <div class="hidden md:flex flex-1 items-center justify-end gap-2">
      <div class="gap-2 md:flex">
        <ThemeToggler />
        <NavPopover />
      </div>
      <div class="block md:hidden"></div>
    </div>
  </nav>
</template>
