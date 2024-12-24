<script setup lang="ts">
import { Icon } from '@iconify/vue'
import DrawerItem from './DrawerItem.vue'
</script>

<template>
  <div class="flex flex-col justify-between h-full">
    <div class="flex flex-col">
      <DrawerItem name="Profile" icon="mingcute:profile-fill" />
      <DrawerItem name="Friends" icon="fa-solid:user-friends" />
      <DrawerItem name="Inbox" icon="icon-park-solid:message" />
    </div>
    <DrawerItem name="Logout" icon="tabler:logout" />
  </div>
</template>
