<script setup lang="ts">
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Icon } from '@iconify/vue'
import ShowTooltip from '../utility/ShowTooltip.vue'
</script>

<template>
  <Popover>
    <PopoverTrigger as-child>
      <button
        class="w-[40px] h-[40px] rounded-full bg-rose-900 cursor-pointer"
        aria-label="More setting"
      />
    </PopoverTrigger>
    <PopoverContent class="min-w-[120px] w-fit p-0 flex flex-col gap-1 rounded-md overflow-hidden">
      <ShowTooltip tip="Profile" sr-only>
        <div
          class="w-full flex items-center gap-2 hover:text-[hsl(var(--primary))] px-4 py-2 hover:bg-[hsl(var(--secondary))] focus:bg-[hsl(var(--secondary))] cursor-pointer"
          tabindex="0"
        >
          <Icon icon="mingcute:profile-fill" width="20" />
          <p>Profile</p>
        </div>
      </ShowTooltip>
      <ShowTooltip tip="Settings" sr-only>
        <div
          class="w-full flex items-center gap-2 hover:text-[hsl(var(--primary))] px-4 py-2 hover:bg-[hsl(var(--secondary))] focus:bg-[hsl(var(--secondary))] cursor-pointer"
          tabindex="0"
        >
          <Icon icon="carbon:settings" width="20" />
          <p>Settings</p>
        </div>
      </ShowTooltip>
    </PopoverContent>
  </Popover>
</template>
