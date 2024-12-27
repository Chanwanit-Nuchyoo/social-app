<script setup lang="ts">
import NavItem from '@/components/navbar/NavItem.vue'
import NavPopover from '@/components/navbar/NavPopover.vue'
import ThemeToggler from '@/components/navbar/ThemeToggler.vue'
import { useNavbarStore } from '@/stores/navbar'
import { useRouter } from 'vue-router'

const navbarStore = useNavbarStore()
const router = useRouter()

const handleNavItemClicked = (name: string, link?: string) => {
  navbarStore.activeMenu = name

  if (link) {
    router.push(link)
  }
}
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
          @click="handleNavItemClicked(m.name, m.link)"
        />
        <div class="relative block md:hidden">
          <NavItem
            name="more"
            icon="ci:hamburger-md"
            toolTip="More"
            @click="handleNavItemClicked('more')"
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
