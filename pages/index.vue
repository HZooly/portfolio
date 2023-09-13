<i18n lang="json">
  {
    "en": {
      "introduction": "Web developper since 2017",
      "projects": "Projects",
      "experiences": "Experiences",
      "work-with-me": "You want to work with me?",
      "email-copied": "Email copied",
      "title": "Web Developer",
      "description": "French Web developer available for freelancing.",
      "project-alt": "Picture of"
    },
    "fr": {
      "introduction": "Développeur web depuis 2017",
      "projects": "Réalisations",
      "experiences": "Expériences",
      "work-with-me": "Prêt à travailler avec moi ?",
      "email-copied": "Email copié",
      "title": "Développeur web",
      "description": "Développeur web disponible pour des missions freelance.",
      "project-alt": "Photo de"
    }
  }
</i18n>

<script setup>
const { t, locale } = useI18n()
const { data: projects } = await useAsyncData('projects', () => {
  return queryContent('projects').find()
})
const { data: experiences } = await useAsyncData('experiences', () => {
  return queryContent('experiences', locale.value).find()
}, {
  watch: [locale],
})
const copied = ref(false)
async function copyToClipboard() {
  await navigator.clipboard.writeText('torzuoli.hugo@gmail.com')
  copied.value = true
  setTimeout(() => {
    copied.value = false
  }, 2000)
}
const title = computed(() => `Hugo Torzuoli · ${t('title')}`)
const description = computed(() => t('description'))
useHead({
  title,
  meta: [
    { name: 'description', content: description },
  ],
})
</script>

<template>
  <div class="space-y-8 md:space-y-16 mb-8">
    <div class="bg-lime-100 rounded-2xl py-24 sm:pt-32 sm:pb-16">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-2xl text-center">
          <h2 class="text-4xl uppercase font-bold tracking-tight text-gray-900 sm:text-6xl">
            Hugo Torzuoli
          </h2>
          <p class="mt-6 sm:text-lg text-gray-800">
            {{ t('introduction') }}
          </p>
          <ul class="hidden sm:inline-flex flex-wrap gap-2 text-sm mt-16">
            <li>
              <NuxtLink target="_blank" class="hover:underline" href="https://www.linkedin.com/in/hugotorzuoli/">
                LinkedIn
              </NuxtLink>
            </li>
            <li>
              <NuxtLink target="_blank" class="hover:underline" href="https://www.malt.fr/profile/hugotorzuoli">
                Malt
              </NuxtLink>
            </li>
            <li>
              <NuxtLink target="_blank" class="hover:underline" href="https://github.com/hzooly">
                GitHub
              </NuxtLink>
            </li>
            <li>
              <NuxtLink target="_blank" class="hover:underline" href="https://stackoverflow.com/users/4781975/zooly">
                StackOverflow
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div>
      <h2 id="projects" class="uppercase font-bold text-3xl">
        {{ t('projects') }}
      </h2>
      <ul role="list" class="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-8 sm:gap-x-6 mt-8">
        <AppProjectCard
          v-for="project of projects"
          :key="project._id"
          :image="project.image"
          :link="project.website.link"
          :personal="project.personal"
          :alt="`${t('project-alt')} ${project.name}`"
        >
          <template #name>
            {{ project.name }}
          </template>
          <template #linkText>
            {{ project.website.text }}
          </template>
        </AppProjectCard>
      </ul>
    </div>
    <div>
      <h2 id="experiences" class="uppercase font-bold text-3xl">
        {{ t('experiences') }}
      </h2>
      <ul role="list" class="grid grid-cols-1 md:grid-cols-2 gap-x-4 sm:gap-x-6 gap-y-8 mt-8">
        <AppExperienceCard v-for="experience of experiences" :key="experience._id" :class="!!experience.large ? 'col-span-2' : 'col-span-2 md:col-auto'" :theme="experience.theme" :website="experience.link">
          <template #name>
            {{ experience.name }}
          </template>
          <template #period>
            {{ experience.period }}
          </template>
          <template #role>
            {{ experience.role }}
          </template>
          <template #description>
            {{ experience.description }}
          </template>
        </AppExperienceCard>
      </ul>
    </div>
    <div>
      <div id="contact" class="rounded-2xl bg-yellow-100 py-24 sm:py-32">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
          <div class="mx-auto max-w-2xl text-center">
            <h2 class="text-2xl sm:text-4xl uppercase font-bold tracking-tight text-gray-900">
              {{ t('work-with-me') }}
            </h2>
            <div class="mt-6">
              <button class="group text-gray-900 transition-all duration-200 ease-in-out" @click="copyToClipboard">
                <span v-if="!copied" class="bg-left-bottom bg-gradient-to-r from-gray-900 to-gray-900 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                  torzuoli.hugo@gmail.com
                </span>
                <span v-else>{{ t('email-copied') }} &#10003;</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
