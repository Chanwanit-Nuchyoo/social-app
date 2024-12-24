<script setup lang="ts">
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'

defineProps<{
  tip: string
  srOnly?: boolean
}>()
</script>
<template>
  <TooltipProvider>
    <Tooltip>
      <TooltipTrigger as-child>
        <slot />
      </TooltipTrigger>
      <TooltipContent
        :class="{
          'sr-only': srOnly,
        }"
      >
        <p>
          {{ tip }}
        </p>
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
</template>
