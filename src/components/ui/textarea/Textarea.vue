<script setup lang="ts">
import { cn } from '@/lib/utils'
import { useVModel } from '@vueuse/core'
import type { HTMLAttributes } from 'vue'
import { onMounted, ref, watch } from 'vue'

const props = defineProps<{
  class?: HTMLAttributes['class']
  defaultValue?: string | number
  modelValue?: string | number
  autoResize?: boolean
}>()

const emits = defineEmits<{
  (e: 'update:modelValue', payload: string | number): void
}>()

const modelValue = useVModel(props, 'modelValue', emits, {
  passive: true,
  defaultValue: props.defaultValue,
})

const textareaRef = ref<HTMLTextAreaElement>()

const adjustHeight = () => {
  const textarea = textareaRef.value
  if (!textarea) return

  // Reset height to auto to get the correct scrollHeight
  textarea.style.height = 'auto'
  // Set the height to the scrollHeight
  textarea.style.height = `${textarea.scrollHeight}px`
}

// Watch for changes in the modelValue
watch(modelValue, () => {
  if (props.autoResize) adjustHeight()
})

// Initial adjustment after mount
onMounted(() => {
  if (props.autoResize) adjustHeight()
})
</script>

<template>
  <textarea
    ref="textareaRef"
    v-model="modelValue"
    :class="
      cn(
        'block w-full min-h-[60px] resize-none overflow-hidden rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50',
        props.class,
      )
    "
  />
</template>
