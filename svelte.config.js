import preprocess from 'svelte-preprocess';
import vercel from '@sveltejs/adapter-vercel';
import cloudflare from '@sveltejs/adapter-cloudflare-workers';
import netlify from '@sveltejs/adapter-netlify';

console.log('ADAPTER', process.env.ADAPTER);

function getAdapter() {
	switch (process.env.ADAPTER) {
		case 'VERCEL':
			return vercel();
		case 'CLOUDFLARE':
			return cloudflare();
		case 'NETLIFY':
			return netlify();
		default:
			return vercel();
	}
}

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		adapter: getAdapter()
	}
};

export default config;
