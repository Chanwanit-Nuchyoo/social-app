<script setup lang="ts">
import { useNavbarStore } from '@/stores/navbar'
import { Icon } from '@iconify/vue'
import { useRouter } from 'vue-router'
import DrawerItem from './DrawerItem.vue'

const router = useRouter()
const navbarStore = useNavbarStore()

const goTo = (settings: { route: string; onBeforeRouteChange?: () => boolean }) => {
  if (settings.onBeforeRouteChange) {
    const shouldContinue = settings.onBeforeRouteChange()

    if (!shouldContinue) {
      return
    }
  }
  navbarStore.activeMenu = ''
  router.push(settings.route)
}

const handleLogout = (): boolean => {
  return true
}
</script>

<template>
  <div class="flex flex-col justify-between h-full">
    <div class="flex flex-col">
      <DrawerItem
        name="Profile"
        icon="mingcute:profile-fill"
        @click="
          goTo({
            route: '/profile/me',
          })
        "
      />
      <DrawerItem name="Friends" icon="fa-solid:user-friends" />
      <DrawerItem name="Inbox" icon="icon-park-solid:message" />
    </div>
    <DrawerItem name="Logout" icon="tabler:logout" />
  </div>
</template>
