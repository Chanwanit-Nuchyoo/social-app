import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useNavbarStore = defineStore('navbar', () => {
  const menus = ref([
    { name: 'home', icon: 'jam:home-f', toolTip: 'Home' },
    { name: 'search', icon: 'jam:search', toolTip: 'Search' },
  ])

  const activeMenu = ref('home')

  return {
    menus,
    activeMenu,
  }
})
