<script setup lang="ts">
import { Card, CardContent } from '@/components/ui/card'
import { Dialog, DialogContent } from '@/components/ui/dialog'
import { computed, ref } from 'vue'

interface User {
  name: string
  avatar: string
}

const currentUser = ref<User>({
  name: 'John Doe',
  avatar: 'https://avatar.iran.liara.run/public/boy',
})

const selectedImageIndex = ref<number | null>(null)

// Post images (up to 9 images)
const postImages = ref<string[]>([
  'https://picsum.photos/800/600?1',
  'https://picsum.photos/800/600?2',
  'https://picsum.photos/800/600?3',
  'https://picsum.photos/800/600?4',
  'https://picsum.photos/800/600?5',
  'https://picsum.photos/800/600?6',
  'https://picsum.photos/800/600?7',
])

// Display only the first 5 images in the grid
const images = computed(() => postImages.value.slice(0, 5))

// Calculate grid layout based on image count
const gridClass = computed(() => {
  const count = images.value.length
  switch (count) {
    case 1:
      return 'grid-cols-1'
    case 2:
      return 'grid-cols-2'
    case 3:
      return 'grid-cols-2'
    case 4:
      return 'grid-cols-2'
    default:
      return 'grid-cols-6'
  }
})

// Define layout classes for different image counts
const displayLayout = computed<{ [key: string]: string[] }>(() => ({
  '1': ['col-span-1 '],
  '2': ['col-span-1 ', 'col-span-1'],
  '3': ['col-span-2', 'col-span-1 ', 'col-span-1'],
  '4': ['col-span-2', 'col-span-1', 'col-span-1', 'col-span-2'],
  '5': ['col-span-4', 'col-span-2', 'col-span-2', 'col-span-2', 'col-span-2'],
}))

const remainingCount = computed(() => Math.max(0, postImages.value.length - 5))
const showFullImage = (index: number) => {
  selectedImageIndex.value = index
}
</script>

<template>
  <Card class="flex-col flex gap-2">
    <CardContent class="flex flex-col gap-4 p-4">
      <!-- Post header -->
      <div class="flex items-center gap-4">
        <div class="w-10 h-10 rounded-full overflow-hidden flex-shrink-0 ring-2 ring-neutral-100">
          <img
            :src="currentUser.avatar"
            :alt="`${currentUser.name}'s profile picture`"
            class="h-full w-full object-cover"
            loading="lazy"
          />
        </div>
        <div class="flex flex-col">
          <span class="text-lg font-medium">{{ currentUser.name }}</span>
          <span class="text-xs text-neutral-400">6 hours ago</span>
        </div>
      </div>

      <!-- Post content -->
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, sit? Eius, nulla.
        Optio praesentium excepturi illum totam vero pariatur. Ipsum porro impedit laborum officiis
        iusto obcaecati distinctio at unde eaque.
      </p>

      <!-- Images preview -->
      <div
        v-if="images.length > 0"
        class="grid gap-1 rounded-xl overflow-hidden"
        :class="gridClass"
      >
        <div
          v-for="(image, index) in images"
          :key="index"
          class="relative cursor-pointer group overflow-hidden"
          :class="displayLayout[images.length.toString()][index]"
          @click="showFullImage(index)"
        >
          <img
            :src="image"
            :alt="`Post image ${index + 1}`"
            class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
          />

          <!-- Overlay for remaining images -->
          <div
            v-if="index === images.length - 1 && remainingCount > 0"
            class="absolute inset-0 bg-black/40 flex items-center justify-center transition-all duration-300 group-hover:bg-black/60"
          >
            <span class="text-white text-5xl font-semibold">+{{ remainingCount }}</span>
          </div>
        </div>
      </div>
    </CardContent>
  </Card>
</template>
