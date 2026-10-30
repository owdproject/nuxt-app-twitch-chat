import { defineDesktopConfig } from '@owdproject/nuxt'

export default defineDesktopConfig({
  theme: '@owdproject/nuxt-theme-nova',
  apps: ['@owdproject/nuxt-app-twitch-chat'],
  modules: [],
  systemBar: {
    enabled: true,
    startButton: true,
  },
  twitchChat: {
    username: 'ninja',
    dark: true,
  },
})
