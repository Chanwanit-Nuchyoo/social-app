<script setup lang="ts">
import PostForm from '@/components/form/PostForm.vue'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { ref } from 'vue'

interface User {
  name: string
  avatar: string
}

// This would typically come from your auth/user store
const currentUser = ref<User>({
  name: 'John Doe',
  avatar: 'https://avatar.iran.liara.run/public/boy',
})

const isDialogOpen = ref(false)
</script>

<template>
  <Card as="article">
    <CardContent class="p-4">
      <div class="flex items-center gap-4">
        <!-- User Avatar -->
        <div
          class="w-10 h-10 rounded-full overflow-hidden flex-shrink-0 shadow-sm"
          aria-hidden="true"
        >
          <img
            :src="currentUser.avatar"
            :alt="`${currentUser.name}'s profile picture`"
            class="h-full w-full object-cover"
            loading="lazy"
          />
        </div>

        <!-- Post Creation Dialog Trigger -->
        <Dialog v-model:open="isDialogOpen">
          <DialogTrigger asChild>
            <Button
              class="flex-1 h-10 rounded-3xl text-start justify-start hover:bg-neutral-100 dark:hover:bg-neutral-800"
              variant="ghost"
              aria-label="Create new post"
            >
              <span class="text-neutral-500">โพสต์อะไรซักอย่างสิ...</span>
            </Button>
          </DialogTrigger>

          <!-- Post Creation Dialog -->
          <DialogContent
            class="max-w-[380px] md:max-w-[500px] rounded-lg max-h-[80vh] overflow-y-auto"
          >
            <DialogHeader>
              <DialogTitle class="text-lg font-semibold">สร้างโพสต์</DialogTitle>
              <DialogDescription class="sr-only">
                Create a new post to share with your followers
              </DialogDescription>
            </DialogHeader>

            <!-- User Info Section -->
            <div class="flex items-center gap-4 p-2">
              <div class="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                <img
                  :src="currentUser.avatar"
                  :alt="`${currentUser.name}'s profile picture`"
                  class="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <span class="font-medium">{{ currentUser.name }}</span>
            </div>

            <!-- Post Creation Form -->
            <PostForm />
          </DialogContent>
        </Dialog>
      </div>
    </CardContent>
  </Card>
</template>

<style scoped>
.dialog-enter-active,
.dialog-leave-active {
  transition: opacity 0.2s ease;
}

.dialog-enter-from,
.dialog-leave-to {
  opacity: 0;
}
</style>
