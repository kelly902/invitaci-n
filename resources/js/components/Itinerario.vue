<script setup>
import { ConciergeBell, Star, Heart, GlassWater, Utensils } from 'lucide-vue-next'

const items = [
    { time: '18:30 hrs', icon: ConciergeBell,       name: 'Recepción de Invitados',    description: 'Bienvenida a nuestros invitados. Los esperamos para comenzar juntos esta noche especial.' },
    { time: '19:00 hrs', icon: Star,        name: 'Entrada de Ivanna',          description: 'El momento más esperado de la noche. Recibamos a la festejada como se merece.' },
    { time: '20:30 hrs', icon: Heart,       name: 'Culto de Acción de Gracias', description: 'Un momento especial para agradecer a Dios por la vida y los XV años de Ivanna.' },
    { time: '21:10 hrs', icon: GlassWater,  name: 'Brindis',                    description: 'Levantemos las copas para celebrar a Ivanna y desearle lo mejor en esta nueva etapa.' },
    { time: '22:20 hrs', icon: Utensils,    name: 'Cena',                       description: 'Disfruta de una deliciosa cena preparada especialmente para esta noche.' },
]
</script>

<template>
    <section id="itinerario" class="py-20 px-6 bg-jungle-dark">
        <div class="max-w-2xl mx-auto">
            <div class="text-center mb-12">
                <p class="font-cinzel text-xs tracking-widest uppercase text-jungle-light">✦ Programa del Evento ✦</p>
                <h2 class="font-cormorant italic text-gold-light mt-1" style="font-size: clamp(2rem,5vw,3.2rem)">Itinerario</h2>
                <div class="w-20 h-px bg-gradient-to-r from-transparent via-gold-light to-transparent mx-auto mt-3" />
            </div>
            <div class="relative">
                <div class="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-gold to-gold/20 -translate-x-1/2" />
                <div v-for="(item, index) in items" :key="index"
                    class="flex items-start gap-6 mb-10 relative"
                    :class="index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'">
                    <span class="font-cinzel text-sm text-gold-light whitespace-nowrap pt-1 min-w-[90px]"
                        :class="index % 2 === 0 ? 'text-right' : 'text-left'">{{ item.time }}</span>
                    <div class="absolute left-1/2 top-2 w-3 h-3 rounded-full bg-gold border-2 border-jungle-dark -translate-x-1/2 z-10" />
                    <div class="flex-1 bg-white/5 border border-gold/25 rounded-xl px-4 py-3">
                        <div class="flex items-center gap-2 mb-1">
                            <component :is="item.icon" class="w-4 h-4 text-gold-light shrink-0" />
                            <p class="font-cormorant italic text-white text-lg">{{ item.name }}</p>
                        </div>
                        <p class="text-jungle-light text-sm">{{ item.description }}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>