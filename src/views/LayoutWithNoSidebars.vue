<script setup lang="ts">
import Navbar from '@/components/navbar/Navbar.vue'
import NavDrawer from '@/components/navbar/NavDrawer.vue'
import { useNavbarStore } from '@/stores/navbar'
import { useWindowSize } from '@vueuse/core'
import { computed, watch } from 'vue'

const navbarStore = useNavbarStore()
const { width } = useWindowSize()
const isSmallerThanMd = computed(() => width.value < 768)

watch(isSmallerThanMd, () => {
  if (!isSmallerThanMd.value && navbarStore.activeMenu === 'more') {
    navbarStore.activeMenu = 'home'
  }
})
</script>

<template>
  <div class="flex min-h-screen flex-col">
    <!-- Navbar -->
    <Navbar />

    <!-- Main Layout -->
    <div class="mt-[var(--nav-height-mobile)] md:mt-[var(--nav-height)] flex flex-1">
      <!-- Main Content -->
      <div class="flex-1">
        <NavDrawer v-if="navbarStore.activeMenu === 'more' && isSmallerThanMd" />
        <RouterView v-else />
      </div>
    </div>
  </div>
</template>
