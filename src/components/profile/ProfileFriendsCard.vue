<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const friends = Array.from({ length: 9 }, (_, i) => ({
  id: i,
  name: `Friend ${i + 1}`,
  avatar: `https://i.pravatar.cc/150?img=${i + 1}`,
}))
</script>

<template>
  <Card>
    <CardHeader class="flex gap-4 justify-between">
      <CardTitle class="flex gap-4"> เพื่อน </CardTitle>
    </CardHeader>
    <CardContent class="flex flex-col gap-4">
      <div class="w-full grid grid-cols-3 gap-4">
        <div
          v-for="friend in friends"
          :key="friend.id"
          class="w-full h-full flex flex-col items-center gap-2 overflow-hidden"
        >
          <img :src="friend.avatar" alt="avatar" class="w-full h-full object rounded-lg" />
          <span class="text-sm">{{ friend.name }}</span>
        </div>
      </div>
      <Button class="w-full"> ดูทั้งหมด </Button>
    </CardContent>
  </Card>
</template>
