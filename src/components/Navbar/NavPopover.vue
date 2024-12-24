<script setup lang="ts">
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import ShowTooltip from '@/components/utilities/ShowTooltip.vue'
import { Icon } from '@iconify/vue'
</script>

<template>
  <Popover>
    <PopoverTrigger as-child>
      <button
        class="h-[40px] w-[40px] cursor-pointer rounded-full bg-rose-900"
        aria-label="More setting"
      />
    </PopoverTrigger>
    <PopoverContent class="flex w-fit min-w-[120px] flex-col gap-1 overflow-hidden rounded-md p-0">
      <ShowTooltip tip="Profile" sr-only>
        <div
          class="flex w-full cursor-pointer items-center gap-2 px-4 py-2 hover:bg-[hsl(var(--secondary))] hover:text-[hsl(var(--primary))] focus:bg-[hsl(var(--secondary))]"
          tabindex="0"
        >
          <Icon icon="mingcute:profile-fill" width="20" />
          <p>Profile</p>
        </div>
      </ShowTooltip>
      <ShowTooltip tip="Settings" sr-only>
        <div
          class="flex w-full cursor-pointer items-center gap-2 px-4 py-2 hover:bg-[hsl(var(--secondary))] hover:text-[hsl(var(--primary))] focus:bg-[hsl(var(--secondary))]"
          tabindex="0"
        >
          <Icon icon="tabler:logout" width="20" />
          <p>Logout</p>
        </div>
      </ShowTooltip>
    </PopoverContent>
  </Popover>
</template>
