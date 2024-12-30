<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { onBeforeUnmount, ref } from 'vue'

interface UploadFile {
  id: string
  file: File
  previewUrl: string
}

const MAX_FILE_SIZE = 5 * 1024 * 1024 // 5MB
const ALLOWED_TYPES = ['image/jpeg', 'image/png', 'image/gif', 'image/webp']

const fileInputRef = ref<HTMLInputElement | null>(null)
const textContent = ref('')
const uploadFiles = ref<UploadFile[]>([])
const error = ref<string>('')

// Create preview URLs and maintain them
const handleFileChange = (event: Event) => {
  const input = event.target as HTMLInputElement
  if (!input.files?.length) return

  const newFiles = Array.from(input.files).filter((file) => {
    // Validate file size
    if (file.size > MAX_FILE_SIZE) {
      error.value = `File ${file.name} is too large. Maximum size is 5MB.`
      return false
    }

    // Validate file type
    if (!ALLOWED_TYPES.includes(file.type)) {
      error.value = `File ${file.name} is not a supported image type.`
      return false
    }

    return true
  })

  const newUploadFiles = newFiles.map((file) => ({
    id: crypto.randomUUID(),
    file,
    previewUrl: URL.createObjectURL(file),
  }))

  uploadFiles.value.push(...newUploadFiles)

  // Clear input value to allow uploading the same file again
  input.value = ''
}

const removeFile = (fileId: string) => {
  const file = uploadFiles.value.find((f) => f.id === fileId)
  if (file) {
    URL.revokeObjectURL(file.previewUrl)
    uploadFiles.value = uploadFiles.value.filter((f) => f.id !== fileId)
  }
}

const handleSubmit = async (e: Event) => {
  e.preventDefault()

  if (!textContent.value.trim() && !uploadFiles.value.length) {
    error.value = 'Please add some content or images to post.'
    return
  }

  try {
    // Here you would typically:
    // 1. Upload images to your server/storage
    // 2. Get back URLs
    // 3. Submit the form with text and image URLs
    console.log('Submitting:', {
      text: textContent.value,
      files: uploadFiles.value.map((f) => f.file),
    })
  } catch (err) {
    error.value = 'Failed to submit post. Please try again.'
    console.error(err)
  }
}

// Cleanup preview URLs when component is destroyed
onBeforeUnmount(() => {
  uploadFiles.value.forEach((file) => {
    URL.revokeObjectURL(file.previewUrl)
  })
})
</script>

<template>
  <form @submit="handleSubmit" class="space-y-4">
    <Textarea
      v-model="textContent"
      class="overflow-y-auto"
      placeholder="What's on your mind?"
      auto-resize
    />

    <!-- Error message -->
    <p v-if="error" class="text-red-500 text-sm">
      {{ error }}
    </p>

    <!-- Image previews -->
    <div v-if="uploadFiles.length" class="grid grid-cols-3 sm:grid-cols-4 gap-4">
      <div v-for="file in uploadFiles" :key="file.id" class="relative aspect-square group">
        <img
          :src="file.previewUrl"
          :alt="file.file.name"
          class="w-full h-full object-cover rounded-lg"
        />
        <button
          @click="removeFile(file.id)"
          type="button"
          class="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>

    <div class="flex flex-col gap-4">
      <input
        accept="image/*"
        ref="fileInputRef"
        @change="handleFileChange"
        type="file"
        class="hidden"
        multiple
      />

      <Button
        type="button"
        @click="fileInputRef?.click()"
        variant="secondary"
        :disabled="uploadFiles.length >= 9"
      >
        เพิ่มรูปภาพ {{ uploadFiles.length ? `(${uploadFiles.length}/9)` : '' }}
      </Button>

      <Button type="submit" class="self-end" :disabled="!textContent.trim() && !uploadFiles.length">
        โพสต์
      </Button>
    </div>
  </form>
</template>
