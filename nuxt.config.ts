// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
				ssr: false,
				devtools: { enabled: false },
				imports: {
								dirs: ['stores'],
				},
				modules: ['nuxt-quasar-ui', '@pinia/nuxt'],
});
