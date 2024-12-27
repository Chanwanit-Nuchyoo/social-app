<script setup lang="ts">
import Label from '@/components/ui/label/Label.vue'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { Icon } from '@iconify/vue'
import { useColorMode, useLocalStorage } from '@vueuse/core'
import { watch } from 'vue'

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
  <div class="flex items-center gap-1 [&>svg]:text-[18px] [&>svg]:md:text-[20px]">
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger as-child>
          <div id="toggle-darkmode" @click="isDarkMode = !isDarkMode">
            <Icon icon="fluent:dark-theme-24-filled" width="20" />
          </div>
        </TooltipTrigger>
        <TooltipContent>
          <p>Darkmode</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
    <Label for="toggle-darkmode" class="sr-only">Toggle darkmode</Label>
  </div>
</template>
