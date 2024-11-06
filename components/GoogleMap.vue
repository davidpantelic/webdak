<template>
  <article ref="mapContainer">
    <!-- Conditional rendering of GoogleMap -->
    <GoogleMap
      v-if="showMap"
      :api-key="googleMapsApiKey"
      mapId="DEMO_MAP_ID"
      class="h-[400px] w-full max-h-[50vh]"
      :center="center"
      :zoom="9"
    >
      <AdvancedMarker @click="openGoogleMaps" :options="markerOptions" :pin-options="pinOptions" />
    </GoogleMap>
  </article>
</template>

<script lang="ts" setup>
import { GoogleMap, AdvancedMarker } from 'vue3-google-map'

const config = useRuntimeConfig()
const googleMapsApiKey: any = config.public.googleMapsApiKey

// Center of the map and marker options
const center = { lat: 44.33538549716175, lng: 19.64573679710099 }
const markerOptions = { position: center, title: 'Panić Plast' }
const pinOptions = { background: '#FBBC04' }

// Control the map's loading
const showMap = ref(false)
const mapContainer: any = ref(null)

// Intersection Observer to load map when it enters viewport
onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting) {
        showMap.value = true
        // Stop observing after loading the map
        observer.unobserve(mapContainer.value)
      }
    },
    // Trigger when 10% of the map container is visible
    { threshold: 0.1 }
  )
  observer.observe(mapContainer.value)
})

// Open Google Maps on click
const openGoogleMaps = () => {
  const url = `https://maps.app.goo.gl/S8mzyqiAnDoXDYcHA`
  window.open(url, '_blank')
}
</script>