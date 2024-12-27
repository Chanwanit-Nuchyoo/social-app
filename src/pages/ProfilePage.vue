<script setup lang="ts">
import ProfileCoverImage from '@/components/profile/ProfileCoverImage.vue'
import ProfileUser from '@/components/profile/ProfileUser.vue'
import Separator from '@/components/ui/separator/Separator.vue'
import { useSyncNavActive } from '@/composables/useSyncNavActive'

useSyncNavActive('')
</script>

<template>
  <ProfileCoverImage cover-image="https://picsum.photos/seed/picsum/1920/1080" />
  <div class="flex flex-col max-w-6xl mx-auto px-4 md:px-0">
    <ProfileUser />
    <Separator />
  </div>
</template>
