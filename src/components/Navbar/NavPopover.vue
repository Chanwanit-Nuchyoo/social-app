<script setup lang="ts">
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Icon } from '@iconify/vue'
import { ref } from 'vue'
</script>

<template>
  <div>
    <Popover>
      <PopoverTrigger as-child>
        <div class="w-[40px] h-[40px] rounded-full bg-rose-900 cursor-pointer" />
      </PopoverTrigger>
      <PopoverContent
        class="min-w-[120px] w-fit p-0 flex flex-col gap-1 rounded-md overflow-hidden"
      >
        <div
          class="w-full flex items-center gap-2 hover:text-[hsl(var(--primary))] px-4 py-2 hover:bg-[hsl(var(--secondary))] cursor-pointer"
        >
          <Icon icon="mingcute:profile-fill" width="20" />
          <p>Profile</p>
        </div>
        <div
          class="w-full flex items-center gap-2 hover:text-[hsl(var(--primary))] px-4 py-2 hover:bg-[hsl(var(--secondary))] cursor-pointer"
        >
          <Icon icon="jam:log-out" width="20px" />
          <p>Logout</p>
        </div>
      </PopoverContent>
    </Popover>
  </div>
</template>
