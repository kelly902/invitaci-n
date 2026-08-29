<script setup>
import EventCard from '@/components/EventCard.vue'

const events = [
    {
        icon: '⛪',
        image: '',  // ← agrega esto
        title: 'Culto de Accion de Gracias',
        when: '5 de diciembre de 2025, ?:00 hrs.',
        place: 'Iglesia familiar principe de paz',
        address: 'Río Usumacinta, Casa Blanca, Casa Blanca 1ra Secc, 86060 Villahermosa, Tab.',
        mapUrl: 'https://maps.app.goo.gl/vVNvC8QAVTgSe3h88',
      },

    {
        icon: '🎉',
        image: '/images/Salon.jpg',  // ← agrega esto
        title: 'Salon de Eventos Premier',
        when: '5 de diciembre de 2025, 6:00 pm.',
        place: 'Salon de Eventos Premier',
        address: ' Salón Premier, Pablo Romero Olive S/N, Ra. Plutarco Elías Calles 3ra sección, C.P. 86294 Villahermosa, Tab.',
        mapUrl: 'https://maps.app.goo.gl/4NYHPJw7SxLT95G98',
    },
    
    
    
   
]
</script>

<template>
    <section id="donde" class="py-20 px-6 bg-cream">
        <div class="max-w-5xl mx-auto">
            <div class="text-center mb-12">
                <p class="section-tag">✦ Dónde & Cuándo ✦</p>
                <h2 class="section-title mt-1">Lugar donde se llevara a cabo el evento</h2>
                <div class="section-divider" />
            </div>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                <EventCard v-for="event in events" :key="event.title" v-bind="event" />
            </div>
        </div>
    </section>
</template>