<script setup>
const cards = [
    {
        icon: '👗', title: 'Damas',
        image: '/images/Mujeres.png',  // ← agrega esto
        description: 'Vestido formal o semiformal.',
    },
    {
        icon: '🤵', title: 'Caballeros',
        image: '/images/Hombres.png',  // ← agrega esto
        description: 'Vestimenta formal',
    },
    {
        icon: '🚫', title: 'Evitar',
        image: '/images/Cancel.png',  // ← agrega esto
        description: 'Vestimenta formal, evitar los tonos amarillos — están reservados para la quinceañera. También evitar todos los tonos de Amarillo, Verde y Plateado ',
        colors: [{ hex: '#FFD700', name: 'Amarillo/Dorado' }, { hex: '#50C878', name: 'Verde' }, { hex: '#C0C0C0', name: 'Plateado' }],
    },
]
</script>

<template>
    <section id="vestimenta" class="py-20 px-6 bg-cream">
        <div class="max-w-4xl mx-auto">
            <div class="text-center mb-12">
                <p class="section-tag">✦ Dress Code ✦</p>
                <h2 class="section-title mt-1">Código de Vestimenta</h2>
                <div class="section-divider" />
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-5">
                <div v-for="card in cards" :key="card.title"
                    class="bg-white border border-cream-dark rounded-xl p-7 text-center hover:-translate-y-1 transition-transform duration-300">
                    <img :src="card.image" class="w-24 h-24 object-contain mx-auto mb-4" />                    <p class="font-cinzel text-sm tracking-widest text-jungle-dark mb-2">{{ card.title }}</p>
                    <p class="text-sm text-gray-500 leading-relaxed">{{ card.description }}</p>
                    <div class="flex gap-1.5 justify-center flex-wrap mt-4">
                        <div v-for="color in card.colors" :key="color.hex"
                            class="w-5 h-5 rounded-full border-2 border-black/10"
                            :style="{ background: color.hex }" :title="color.name" />
                    </div>
                </div>
            </div>
            <p class="text-center max-w-lg mx-auto mt-10 text-sm italic text-gray-500 border border-dashed border-cream-dark rounded-lg p-4">
                ✨ El código de vestimenta es <strong>formal</strong>. Recuerda que esta noche es especial y juntos haremos que Ivanna se sienta como una reina.
            </p>
        </div>
    </section>
</template>
