<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Textarea } from '@/components/ui/textarea'
import { ref, watch } from 'vue'

const fileInputRef = ref<HTMLInputElement | null>(null)
const fileToUpload = ref<File[]>([])
const filePreviewUrl = ref<string[]>([])
const openUploadDialog = () => {
  fileInputRef.value?.click()
}

const handleFileChange = (event: Event) => {
  const input = event.target as HTMLInputElement
  if (input.files) {
    fileToUpload.value.push(...Array.from(input.files))
    fileInputRef.value!.value = ''
  }
}

watch(
  fileToUpload,
  () => {
    console.log(fileToUpload.value)
  },
  {
    deep: true,
  },
)
</script>

<template>
  <Card>
    <CardContent class="p-4 flex gap-4">
      <div class="w-[40px] h-[40px] rounded-full overflow-hidden">
        <img
          class="h-full w-full object-cover"
          src="https://avatar.iran.liara.run/public/boy"
          alt=""
        />
      </div>
      <Dialog>
        <DialogTrigger class="flex-1">
          <Button class="w-full h-[2.5rem] rounded-3xl border" variant="ghost">
            <p class="w-full text-left text-neutral-500">โพสต์อะไรซักอย่างสิ...</p>
          </Button>
        </DialogTrigger>
        <DialogContent class="max-w-[400px] rounded-lg max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>สร้างโพสต์</DialogTitle>
            <DialogDescription class="sr-only"> สร้างโพสต์ </DialogDescription>
          </DialogHeader>
          <div class="flex flex-col gap-4">
            <div class="flex gap-4">
              <div class="w-[40px] h-[40px] rounded-full overflow-hidden">
                <img
                  class="h-full w-full object-cover"
                  src="https://avatar.iran.liara.run/public/boy"
                  alt=""
                />
              </div>
              <p>John Doe</p>
            </div>
            <Textarea class="overflow-y-auto" auto-resize />
            <div class="flex flex-col">
              <input
                accept="image/*"
                ref="fileInputRef"
                @change="handleFileChange"
                type="file"
                class="hidden"
                multiple
              />
              <Button @click="openUploadDialog" variant="secondary">เพิ่มรูปภาพ</Button>
            </div>
          </div>
          <DialogFooter>
            <Button>โพสต์</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </CardContent>
  </Card>
</template>
