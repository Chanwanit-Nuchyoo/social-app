<script setup lang="ts">
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ref } from 'vue'

const aboutMe = ref(
  'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus soluta, placeat sunt aliquam quia tempore ullam doloremque culpa dolorem voluptates corrupti veritatis sapiente inventore fugit ratione rerum voluptatum maiores iure!',
)
</script>

<template>
  <Card>
    <CardHeader class="flex gap-4 justify-between">
      <CardTitle class="flex gap-4"> เกี่ยวกับฉัน </CardTitle>
    </CardHeader>
    <CardContent>
      <p v-if="aboutMe" class="text-sm px-4">{{ aboutMe }}</p>
      <p v-else class="text-sm text-gray-500">ยังไม่มีข้อมูล</p>
    </CardContent>
  </Card>
</template>
