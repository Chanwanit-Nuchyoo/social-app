<script setup lang="ts">
import PostInputBox from '@/components/common/PostInputBox.vue'
import UserPost from '@/components/common/UserPost.vue'
import ProfileAboutCard from '@/components/profile/ProfileAboutCard.vue'
import ProfileCoverImage from '@/components/profile/ProfileCoverImage.vue'
import ProfileFriendsCard from '@/components/profile/ProfileFriendsCard.vue'
import ProfileUser from '@/components/profile/ProfileUser.vue'
import Button from '@/components/ui/button/Button.vue'
import Separator from '@/components/ui/separator/Separator.vue'
import { useSyncNavActive } from '@/composables/useSyncNavActive'
import { Icon } from '@iconify/vue/dist/iconify.js'

useSyncNavActive('')
</script>

<template>
  <ProfileCoverImage cover-image="https://picsum.photos/seed/picsum/1920/1080" />
  <div class="flex flex-col max-w-6xl mx-auto px-4 relative">
    <div class="sticky top-[var(--nav-height-mobile)] md:top-[var(--nav-height)] z-10">
      <div class="py-4 flex justify-between bg-[hsl(var(--background))]">
        <ProfileUser />

        <!-- Edit button -->
        <div class="flex items-center">
          <Button>
            <Icon icon="flowbite:edit-solid" />
            <p>แก้ไขโปรไฟล์</p>
          </Button>
        </div>
      </div>

      <Separator />
    </div>

    <div class="flex gap-4 my-4 flex-col md:flex-row">
      <div class="flex flex-col md:flex-[1.3] md:sticky md:top-0 md:self-start">
        <div class="hidden md:flex w-full flex-col gap-4">
          <ProfileAboutCard />
          <ProfileFriendsCard />
        </div>
      </div>

      <div class="md:flex-[2] flex flex-col gap-4">
        <PostInputBox />
        <UserPost />
        <UserPost />
        <UserPost />
        <UserPost />
        <UserPost />
        <UserPost />
        <UserPost />
        <UserPost />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
