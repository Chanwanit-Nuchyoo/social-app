<script setup lang="ts">
import { Icon } from '@iconify/vue'

const props = defineProps<{
  name: string
  icon: string
}>()
</script>

<template>
  <div
    class="w-full p-4 border-b flex gap-4 items-center hover:bg-[hsl(var(--secondary))] hover:text-[hsl(var(--primary))] focus:bg-[hsl(var(--secondary))]"
    role="button"
    tabindex="0"
    aria-label="Drawer item for {{ name }}"
  >
    <Icon :icon="props.icon" width="25" />
    <p class="text-lg">{{ props.name }}</p>
  </div>
</template>
