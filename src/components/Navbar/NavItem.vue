<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { defineProps, inject } from 'vue'

defineProps<{
  name: string
  icon: string
}>()

const activeMenu = inject('activeMenu')
</script>

<template>
  <div
    class="relative flex items-center cursor-pointer h-full hover:bg-[hsl(var(--secondary))] hover:text-[hsl(var(--primary))] w-[4rem] justify-center rounded"
    :class="{ 'text-[hsl(var(--primary))]': activeMenu === name }"
    @click="$emit('click', name)"
  >
    <Icon :icon="icon" width="30px" :aria-label="name" role="img" />
    <div
      v-if="activeMenu === name"
      class="absolute bottom-[-3px] w-full h-[4px] bg-[hsl(var(--primary))] rounded-b-lg"
    />
  </div>
</template>
