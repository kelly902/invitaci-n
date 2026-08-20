<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'

// Música
const audio = ref(null)
const playing = ref(false)
const showLabel = ref(false)
let labelTimer = null

function toggleMusic() {
    showLabel.value = true
    clearTimeout(labelTimer)
    labelTimer = setTimeout(() => { showLabel.value = false }, 3000)
    if (playing.value) {
        audio.value.pause()
        playing.value = false
    } else {
        audio.value.play().catch(() => {})
        playing.value = true
    }
}

// Countdown
const EVENT_DATE = new Date('2025-12-05T18:00:00')
const diff = ref(EVENT_DATE - new Date())
let timer

onMounted(() => { timer = setInterval(() => { diff.value = EVENT_DATE - new Date() }, 1000) })
onUnmounted(() => { clearInterval(timer); clearTimeout(labelTimer) })

const days    = computed(() => Math.max(0, Math.floor(diff.value / 86400000)))
const hours   = computed(() => Math.max(0, Math.floor((diff.value % 86400000) / 3600000)))
const minutes = computed(() => Math.max(0, Math.floor((diff.value % 3600000) / 60000)))
const seconds = computed(() => Math.max(0, Math.floor((diff.value % 60000) / 1000)))

const units = computed(() => [
    { label: 'Días',     value: days.value },
    { label: 'Horas',    value: hours.value },
    { label: 'Minutos',  value: minutes.value },
    { label: 'Segundos', value: seconds.value },
])
</script>

<template>
    <section class="relative min-h-screen flex flex-col items-center justify-end overflow-hidden bg-jungle-dark">
        <img :src="'/images/portada.png'" alt="Portada XV Años Ivanna Jazmin"
            class="absolute inset-0 w-full h-full object-cover object-top" />
        <div class="absolute bottom-0 left-0 right-0 h-3/5 z-10"
            style="background: linear-gradient(to top, #0d2b1f 0%, rgba(13,43,31,.75) 55%, transparent 100%)" />

        <!-- Botón de música (esquina superior derecha) -->
        <div class="absolute top-5 right-5 z-30 flex items-center gap-2">
            <span v-if="showLabel" class="font-cinzel text-gold-light text-xs tracking-widest px-3 py-1 rounded-full border border-gold"
                style="background:rgba(13,43,31,.75)">
                {{ playing ? '♪ Reproduciendo...' : '♪ Pausado' }}
            </span>
            <button @click="toggleMusic"
                class="w-12 h-12 rounded-full border-2 border-gold flex items-center justify-center text-xl transition-colors"
                style="background:rgba(13,43,31,.75)">
                {{ playing ? '⏸' : '🎵' }}
            </button>
        </div>
        
            <audio ref="audio" loop>
                <source :src="'/audio/cancion.mp3'" type="audio/mpeg" />
            </audio>
       

        <div class="relative z-20 text-center w-full px-6 pb-12 pt-4">
            <div class="w-28 h-px mx-auto my-4"
                style="background: linear-gradient(to right, transparent, #C8970A, transparent)" />
            <p class="font-cinzel text-cream tracking-widest text-lg">5 de Diciembre · 2026</p>
            
            <p class="mt-8 font-cinzel text-gold-light text-xs tracking-widest uppercase animate-bounce">Desliza ↓</p>
        </div>
    </section>
</template>
