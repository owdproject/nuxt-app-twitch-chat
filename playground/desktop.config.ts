import { defineDesktopConfig } from '@owdproject/nuxt'

export default defineDesktopConfig({
  theme: '@owdproject/theme-nuxt-nova',
  apps: ['@owdproject/app-nuxt-twitch-chat'],
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
