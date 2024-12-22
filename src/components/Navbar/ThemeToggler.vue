<script setup lang="ts">
import { Icon } from '@iconify/vue'
import Label from '@/components/ui/label/Label.vue'
import Switch from '@/components/ui/switch/Switch.vue'
import { useColorMode, useLocalStorage } from '@vueuse/core'
import { watch } from 'vue'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'

const mode = useColorMode()
const isDarkMode = useLocalStorage('darkmode', false)
watch(isDarkMode, () => {
  if (isDarkMode.value === undefined) {
    isDarkMode.value = false
  } else {
    mode.value = isDarkMode.value ? 'dark' : 'light'
  }
})
</script>

<template>
  <div class="flex gap-1 items-center">
    <Icon icon="iconamoon:mode-light-fill" width="22" />
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger as-child>
          <Switch id="toggle-darkmode" v-model:checked="isDarkMode" />
        </TooltipTrigger>
        <TooltipContent>
          <p>Toggle dark theme</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
    <Label for="toggle-darkmode" class="sr-only">Toggle darkmode</Label>
    <Icon icon="material-symbols:dark-mode-rounded" width="18" />
  </div>
</template>
