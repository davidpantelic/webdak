<template>
  <ul class="flex items-center gap-1 md:gap-2 z-50">
    <li v-for="icon in socIcons" :key="icon.name">
      <a :href="icon.path" :target="icon.target" class="text-3xl p-1 flex justify-center items-center text-brand-cream hover:text-brand-black hover:bg-brand-cream rounded"><Icon :name="icon.name"></Icon><span class="sr-only">{{ icon.text }}</span></a>
    </li>
  </ul>
</template>

<script lang="ts" setup>
const socIcons = computed(() => [
  {
    name: 'hugeicons:facebook-02',
    path: 'https://www.facebook.com/webdak/',
    target: '_blank',
    text: 'Facebook stranica'
  },
  {
    name: 'hugeicons:instagram',
    path: 'https://www.instagram.com/webdak/',
    target: '_blank',
    text: 'Instagram stranica'
  },
  {
    name: 'hugeicons:mail-at-sign-01',
    path: 'mailto:info@webdak.rs',
    target: '_self',
    text: 'Email adresa'
  },
  {
    name: 'hugeicons:call-outgoing-01',
    path: 'tel:+381677204115',
    target: '_self',
    text: 'Kontakt telefon'
  },
  // {
  //   name: 'hugeicons:location-01',
  //   path: 'https://maps.app.goo.gl/S8mzyqiAnDoXDYcHA',
  //   target: '_blank',
  //   text: 'Lokacija na Google Maps - Dragijevica bb, 14253 Osečina, Srbija - otvara se u novom tabu'
  // },
]);
</script>