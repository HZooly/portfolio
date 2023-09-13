<i18n lang="json">
  {
    "en": {
      "personal": "Side project",
      "see-project": "See project"
    },
    "fr": {
      "personal": "Projet perso",
      "see-project": "Voir le projet"
    }
  }
</i18n>

<script setup>
const props = defineProps({
  image: String,
  link: String,
  alt: String,
  personal: Boolean,
})
const { t } = useI18n()
</script>

<template>
  <li>
    <div class="group relative aspect-video block w-full overflow-hidden rounded-2xl bg-gray-100">
      <NuxtLink target="_blank" :href="props.link" class="absolute inset-0 z-10">
        <span class="sr-only">{{ t('see-project') }}</span>
      </NuxtLink>
      <NuxtImg
        class="pointer-events-none object-cover group-hover:brightness-100 brightness-[.85] transition group-hover:transform group-hover:scale-[1.03] delay-75"
        :alt="alt"
        :src="props.image"
        placeholder
        loading="lazy"
      />
      <div class="absolute bottom-3 left-3 text-white">
        <p class="pointer-events-none mt-2 block truncate text-sm font-medium">
          <slot name="name" />
        </p>
        <p class="pointer-events-none block text-sm font-medium">
          <slot name="linkText" />
        </p>
      </div>
      <p v-if="props.personal" class="absolute bottom-3 right-3 text-white text-sm font-semibold uppercase">
        {{ t('personal') }}
      </p>
    </div>
  </li>
</template>
