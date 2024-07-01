<script setup>
const props = defineProps({
  theme: String,
  website: String,
})

const theme = computed(() => {
  switch (props.theme) {
    case 'yescapa':
      return 'bg-[#f4c5d9] text-[#d92465]'
    case 'pandalab':
      return 'bg-[#2E4954] text-[#F5F1EE]'
    case 'versusmind':
      return 'bg-[#00A1DE] text-white'
    case 'wiw':
      return 'bg-[#8acbbf] text-[#333]'
  }
})
</script>

<template>
  <li class="flex flex-col p-4 md:p-8 rounded-2xl" :class="theme">
    <div class="flex items-center">
      <h3 class="sm:text-lg font-semibold hover:underline">
        <NuxtLink :href="website" target="_blank">
          <slot name="name" />
        </NuxtLink>
      </h3>
      <span class="text-xs sm:text-sm ml-1.5">(<slot name="period" />)</span>
    </div>
    <h4 class="font-medium">
      <slot name="role" />
    </h4>
    <p class="text-xs sm:text-sm mt-2">
      <slot name="description" />
    </p>
  </li>
</template>
