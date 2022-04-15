import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    vite: {
        resolve: {
            alias: [{ find: /^@lloydjatkinson\/(.*)/, replacement: '@lloydjatkinson/$1/src' }],
          },
    }
});
