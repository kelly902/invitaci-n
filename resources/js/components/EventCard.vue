<template>
    <div class="bg-white border border-cream-dark rounded-xl overflow-hidden shadow-sm hover:-translate-y-1 transition-transform duration-300">
        <div class="w-full h-44 overflow-hidden">
            <img v-if="image" :src="image" class="w-full h-full object-cover" />
                <div v-else class="w-full h-full bg-gradient-to-br from-jungle-mid to-jungle-dark flex items-center justify-center text-5xl text-white/40">
                    {{ icon }}
                </div>
            </div>
        <div class="p-6">
            <h3 class="font-cormorant font-semibold text-jungle-dark text-xl text-center mb-3">{{ title }}</h3>
            <p class="text-sm text-brown mb-1"><strong class="text-jungle-dark">Cuándo:</strong> {{ when }}</p>
            <p class="text-sm text-brown mb-1"><strong class="text-jungle-dark">Lugar:</strong> {{ place }}</p>
            <p class="text-sm text-brown"><strong class="text-jungle-dark">Dirección:</strong> {{ address }}</p>
            <div class="flex flex-col gap-2 mt-5">
                <a :href="mapUrl" target="_blank" class="btn-gold text-center">Ver mapa</a>
                <button @click="addToCalendar" class="btn-outline-gold">Agendar en calendario</button>
            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({ icon: String, image: String, title: String, when: String, place: String, address: String, mapUrl: String })
function addToCalendar() {
    const url = `https://calendar.google.com/calendar/render?action=TEMPLATE`
        + `&text=${encodeURIComponent(props.title)}`
        + `&dates=20251205T180000/20251206T000000`
        + `&location=${encodeURIComponent(props.address)}`
    window.open(url, '_blank')
}
</script>