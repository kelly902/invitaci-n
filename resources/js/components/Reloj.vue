<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'

const EVENT_DATE = new Date('2026-12-05T19:00:00')
const diff = ref(EVENT_DATE - new Date())
let timer

onMounted(() => { timer = setInterval(() => { diff.value = EVENT_DATE - new Date() }, 1000) })
onUnmounted(() => clearInterval(timer))

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
    <section class="bg-jungle-dark py-6 text-center">
        <p class="section-tag mb-4">“Este es el día que hizo el Señor; nos gozaremos y alegraremos en él.” Salmos 118:24</p>
        <p class="section-tag mb-4">"Con mucha alegría y bajo la bendición de Dios, te invito a celebrar conmigo el comienzo de una nueva etapa: mis XV años.</p>
        <div class="flex justify-center gap-2">
            <div v-for="item in units" :key="item.label"
                class="flex flex-col items-center border border-gold rounded-lg px-3 py-2 min-w-[58px]"
                style="background:rgba(200,151,10,.1)">
                <span class="font-cinzel text-xl text-gold-light leading-none">{{ String(item.value).padStart(2,'0') }}</span>
                <span class="font-cinzel text-cream-dark tracking-widest uppercase mt-1" style="font-size:.5rem">{{ item.label }}</span>
            </div>
        </div>
    </section>
</template>
