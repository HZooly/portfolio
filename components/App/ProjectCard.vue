<script setup>
const props = defineProps({
  image: String,
  link: String,
})
</script>

<template>
  <li>
    <div class="group relative aspect-video block w-full overflow-hidden rounded-2xl bg-gray-100">
      <a :href="props.link" class="absolute inset-0 z-10" target="_blank" rel="noopener noreferrer">
        <span class="sr-only">Voir le projet</span>
      </a>
      <img :src="props.image" class="pointer-events-none object-cover group-hover:opacity-75 transition group-hover:transform group-hover:scale-105 delay-75">
      <div class="absolute bottom-3 left-3 text-white">
        <p class="pointer-events-none mt-2 block truncate text-sm font-medium">
          <slot name="name" />
        </p>
        <p class="pointer-events-none block text-sm font-medium">
          <slot name="linkText" />
        </p>
      </div>
    </div>
  </li>
</template>
