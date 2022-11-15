import {Config} from 'tailwindcss'
import tailwindTypography from "@tailwindcss/typography";

module.exports = {
    content: [
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./nuxt.config.{js,ts}",
        "./storyblok/**/*.vue"
    ],
    theme: {
        extend: {},
        container: {
            center: true,
            padding: {
                DEFAULT: '1rem',
                sm: '2rem',
                lg: '4rem',
                xl: '8rem',
                '2xl': '10rem',
            },
        }
    },
    plugins: [tailwindTypography],
} as Config
