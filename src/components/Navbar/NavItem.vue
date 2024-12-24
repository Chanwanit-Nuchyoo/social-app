<script setup lang="ts">
import ShowTooltip from '@/components/utilities/ShowTooltip.vue'
import { useNavbarStore } from '@/stores/navbar'
import { Icon } from '@iconify/vue'

defineProps<{
  name: string
  icon: string
  toolTip: string
}>()

const navbarStore = useNavbarStore()
</script>

<template>
  <ShowTooltip :tip="toolTip">
    <button
      class="md:w-[4rem relative flex w-[3.5rem] cursor-pointer items-center justify-center rounded hover:bg-[hsl(var(--secondary))] hover:text-[hsl(var(--primary))] h-full [&>svg]:text-[25px]"
      :class="{ 'text-[hsl(var(--primary))]': navbarStore.activeMenu === name }"
      @click="$emit('click', name)"
      aria-label="Navigation item for {{ name }}"
    >
      <Icon :icon="icon" :aria-label="name" role="img" />
      <div
        v-if="navbarStore.activeMenu === name"
        class="absolute bottom-[-3px] h-[4px] w-full rounded-b-lg bg-[hsl(var(--primary))]"
      />
    </button>
  </ShowTooltip>
</template>
