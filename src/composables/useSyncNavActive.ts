import { useNavbarStore } from '@/stores/navbar'
import { onMounted } from 'vue'

export const useSyncNavActive = (activeMenu: string) => {
  const navbarStore = useNavbarStore()

  onMounted(() => {
    navbarStore.activeMenu = activeMenu
  })

  return {
    navbarStore,
  }
}
