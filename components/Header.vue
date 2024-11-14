<template>
  <a href="#main-content" class="skip-content-link">Preskoči do glavnog dela</a>
  <header>
    <nav :class="[isScrolling ? 'py-4' : 'py-5 bg-opacity-90']" class="bg-brand-black text-white fixed top-0 w-full flex justify-end px-2 md:px-6 lg:px-10 z-50">

      <button @click="homepageTop" class="absolute h-24 sm:h-32 top-2 left-3 hover:rotate-6 z-10 transition-all">
        <NuxtImg src="/logo/logo_10.png" alt="Webdak" :class="[isScrolling ? 'scale-90' : 'scale-100']" class="inline mr-3 transition-all w-28 sm:w-32 h-28 sm:h-32 origin-top" />
      </button>

      <ul class="nav-tabs items-center gap-5 hidden lg:flex mr-5">
        <li v-for="tab in navTabs" :key="tab.name">
          <NuxtLink :to="tab.path" class="text-xl text-brand-cream hover:text-brand-white">{{ tab.name }}</NuxtLink>
        </li>
      </ul>

      <SocialIcons />

      <!-- <div class="ml-3 z-50">
        <button v-if="$currentLocale.value === 'en'" @click="switchLanguage('sr')" class="h-full rounded border-2 px-1 hover:border-brand-cream hover:bg-brand-cream hover:text-brand-black">Srb</button>
        <button v-if="$currentLocale.value === 'sr'" @click="switchLanguage('en')" class="h-full rounded border-2 px-1 hover:border-brand-cream hover:bg-brand-cream hover:text-brand-black">En</button>
      </div> -->

      <button :class="[{ 'collapsed': !isBurgerOpen }]" class="lg:hidden navbar-toggler rounded ml-3 flex flex-col items-center justify-center gap-[3px] border-white border-2 px-2 min-w-12 relative z-50" @click="toggleBurger" :aria-expanded="isBurgerOpen" :aria-label="isBurgerOpen ? 'zatvori mobilni meni' : 'otvori mobilni meni'">
        <span v-for="index in 3" :key="index" class="w-7 h-[2px] bg-white rounded transition-all duration-300"></span>
      </button>

      <div class="overflow-hidden absolute top-full left-0 right-0 pointer-events-none">
        <ul :class="{ 'bg-opacity-90': !isScrolling, [!isBurgerOpen ? 'translate-y-[-100%]' : 'translate-y-0']: true }" class="nav-tabs flex flex-col lg:hidden px-6 pb-2 items-end gap-3 bg-brand-black transition-all pointer-events-auto" :aria-hidden="!isBurgerOpen">
          <li v-for="tab in navTabs" :key="tab.name">
            <NuxtLink :to="tab.path" class="text-xl hover:text-brand-cream" :tabindex="isBurgerOpen ? 0 : -1" @click="toggleBurger">{{ tab.name }}</NuxtLink>
          </li>
          <li>
            <a href="/#kontakt" class="text-xl hover:text-brand-cream" :tabindex="isBurgerOpen ? 0 : -1" @click="toggleBurger()">Kontakt</a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script lang="ts" setup>
const navTabs = computed(() => [
  {
    name: 'Početna',
    path: '/',
  },
  {
    name: 'Pristupačnost',
    path: 'pristupacnost',
  },
  {
    name: 'SEO',
    path: 'seo',
  },
  {
    name: 'Kontakt',
    path: 'kontakt',
  },
]);

const isScrolling = ref(false);
const isBurgerOpen = ref(false);

const handleScroll = () => {
  isScrolling.value = window.scrollY !== 0;
};

function toggleBurger() {
  isBurgerOpen.value = !isBurgerOpen.value;
}

function homepageTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
  navigateTo('/');
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>