<template>
    <footer>
    <div class="bg-brand-black text-brand-cream w-full flex flex-wrap gap-5 justify-center items-center p-5 text-center">
      <UTooltip text="Ovaj veb-sajt je pristupačan svima." class="w-20 order-2" :popper="{ placement: 'top' }">
        <NuxtImg class="w-20 h-20" src="logo/accessibility_badge_4.png" alt="Pristupačnost bedž" />
      </UTooltip>
      <div class="w-full md:w-auto md:order-2 order-1">
        <p>Copyright &copy; {{ getCurrentYear }} Webdak. Sva prava zadržana.</p>
        <div class="flex flex-wrap gap-3 justify-center items-center">
          <p><NuxtLink to="/" class="hover:underline">Proizvodi</NuxtLink></p>
          <p><NuxtLink to="/" class="hover:underline">O nama</NuxtLink></p>
          <p><NuxtLink to="/politika-privatnosti" class="hover:underline">Politika privatnosti</NuxtLink></p>
        </div>
        <p>Izrada veb-sajtova - <a href="mailto:dpdavid156@gmail.com" class="hover:underline">Webdak</a></p>
      </div>
      <UTooltip text="Webdak Izrada veb-sajtova" class="w-20 rounded-full hover:rotate-6 transition-all order-3" :popper="{ placement: 'top' }">
        <NuxtImg class="w-20 h-20" src="logo/logo_10.png" alt="Webdak Moderna Web Rešenja" />
      </UTooltip>
    </div>
  </footer>
</template>

<script lang="ts" setup>
const getCurrentYear = computed(() => {
  return new Date().getFullYear();
})
</script>