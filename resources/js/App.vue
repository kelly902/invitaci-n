<template>
    <div>
        <PantallaInicio />
        <Reloj />
        <EventosApartado />
        <Itinerario />
        <VestimentaSection />
        <RsvpForm />
    </div>
</template>

<script setup>
import PantallaInicio   from '@/components/PantallaInicio.vue'
import Reloj            from '@/components/Reloj.vue'
import EventosApartado  from '@/components/EventosApartado.vue'
import Itinerario       from '@/components/Itinerario.vue'
import VestimentaSection from '@/components/VestimentaSection.vue'
import RsvpForm         from '@/components/Confirmacion.vue'
</script>
