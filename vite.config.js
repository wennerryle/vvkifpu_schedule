import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  base: '/vvkifpu_schedule',
  plugins: [
    VitePWA({
      registerType: 'autoUpdate',
      devOptions: {
        enabled: true
      },
      manifest: {
        name: 'Расписание занятий ИС-31',
        short_name: 'Пары ИС-31',
        description: 'Пары, пары, пары..',
        theme_color: '#ffffff',
        icons: [
          {
            src: '/vvkifpu_schedule/android-chrome-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/vvkifpu_schedule/android-chrome-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          }
        ]
      }
    })
  ]
});
