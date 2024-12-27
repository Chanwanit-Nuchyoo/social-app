<script setup lang="ts">
defineProps<{
  coverImage: string
}>()
</script>

<template>
  <div class="relative flex w-full h-[200px] md:h-[250px] lg:h-[300px] overflow-hidden">
    <div class="w-full h-full fade-mask">
      <img :src="coverImage" alt="user cover image" class="w-full h-full object-cover" />
    </div>
    <div
      class="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-6xl mx-auto md:rounded-sm overflow-hidden"
    >
      <img :src="coverImage" alt="user cover image" class="w-full h-full object-cover" />
    </div>
  </div>
</template>

<style scoped>
.fade-mask {
  -webkit-mask-image: linear-gradient(black, transparent);
  mask-image: linear-gradient(black, transparent);
}
</style>
