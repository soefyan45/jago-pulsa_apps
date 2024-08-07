// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  	css: ['~/assets/css/main.css'],
  	compatibilityDate: '2024-04-03',
	app: {
		head: {
			title: "Planet Pulsa",
			meta: [
				{ charset: "utf-8" },
				{
					name: "viewport",
					content: "width=device-width, initial-scale=1",
				},
				{ hid: "description", name: "description", content: "Revolutionary Tech Partner for Digital Transformation" },
				{ hid: "image", name: "image", content: "/logo.png" },
				{ hid: "image:type", name: "image:type", content: "image/png" },
				{ name: "format-detection", content: "telephone=no" },
			],
			link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
		},
	},
	devtools: { enabled: true },
	modules: [
		'@vite-pwa/nuxt',
		'@pinia/nuxt',
	],
	postcss: {
		plugins: {
		tailwindcss: {},
		autoprefixer: {},
		},
	},
	pwa: {
		registerType: 'autoUpdate',
		manifest: {
			name: 'Jago Pulsa',
			short_name: 'Jago Pulsa',
			theme_color: '#0B2F74',
			icons: [
				{
					src: '192.png',
					sizes: '192x192',
					type: 'image/png',
				},
				{
					src: '512.png',
					sizes: '512x512',
					type: 'image/png',
				},
				{
					src: '513.png',
					sizes: '512x512',
					type: 'image/png',
					purpose: 'any maskable',
				},
		],
		},
		workbox: {
			navigateFallback: '/',
			globPatterns: ['**/*.{js,css,html,png,svg,ico}'],
		},
		client: {
			installPrompt: true,
			// you don't need to include this: only for testing purposes
			// if enabling periodic sync for update use 1 hour or so (periodicSyncForUpdates: 3600)
			periodicSyncForUpdates: 20,
		},
		devOptions: {
			enabled: true,
			suppressWarnings: true,
			navigateFallbackAllowlist: [/^\/$/],
			type: 'module',
		},
	},
  	ssr: false,
	routeRules : {
		'/_nuxt/**': { headers: { 'access-control-allow-methods': 'GET' } },
		'/api/v1/**': { cors: false},
	},
  	devServer: {
		port: 3043,
	},
	// routes: { '/': { prerender: true }, '/*': { cors: true } },
	vite: {
		server: {
			hmr: {
				protocol: "ws",
				host: "localhost",
				// clientPort: 443, 
			},
			// watch: {
			// 	usePolling: true,
			// },
		},
	},
	// nitro: {
	// 	devServer: {
	// 	  // My files are under src, if yours are in the root you can change this to ./
	// 	  watch: ['./src']
	// 	}
	// }
})
