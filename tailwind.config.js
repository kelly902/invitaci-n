export default {
    content: ['./resources/**/*.blade.php', './resources/**/*.js', './resources/**/*.vue'],
    theme: {
        extend: {
            colors: {
                gold:   { DEFAULT: '#C8970A', light: '#E8C96A', dark: '#8B6400' },
                jungle: { dark: '#1B4332', mid: '#2D6A4F', light: '#52B788' },
                cream:  { DEFAULT: '#F8F3E8', dark: '#EDE4CC' },
                brown:  '#3E2723',
            },
            fontFamily: {
                cinzel:     ['Cinzel', 'serif'],
                cormorant:  ['Cormorant Garamond', 'serif'],
                garamond:   ['EB Garamond', 'serif'],
            },
        },
    },
    plugins: [],
}
