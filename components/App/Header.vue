<i18n lang="json">
  {
    "en": {
      "projects": "Projects",
      "experiences": "Experiences",
      "contact": "Contact"
    },
    "fr": {
      "projects": "Réalisations",
      "experiences": "Expériences",
      "contact": "Contact"
    }
  }
</i18n>

<script setup>
const { t, locale, setLocale, locales } = useI18n()

const availableLocales = computed(() => {
  return (locales.value).filter(i => i.code !== locale.value)
})
</script>

<template>
  <div class="py-6 flex justify-between">
    <h1 class="font-bold uppercase tracking-wider text-lg">
      <nuxt-link to="/">
        Zooly
      </nuxt-link>
    </h1>
    <nav>
      <ul class="space-x-8">
        <li class="inline">
          <a
            v-for="l in availableLocales"
            :key="l.code"
            class="cursor-pointer text-gray-500 text-sm hover:underline uppercase"
            @click="setLocale(l.code)"
          >
            {{ l.display }}
          </a>
        </li>
        <li class="hidden sm:inline text-gray-700 text-sm hover:underline uppercase">
          <a href="#projects">{{ t('projects') }}</a>
        </li>
        <li class="hidden sm:inline text-gray-700 text-sm hover:underline uppercase">
          <a href="#experiences">{{ t('experiences') }}</a>
        </li>
        <li class="inline text-gray-700 text-sm hover:underline uppercase">
          <a href="#contact">{{ t('contact') }}</a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<style>
html {
  scroll-behavior: smooth;
  scroll-padding-top: 10px;
}
</style>
