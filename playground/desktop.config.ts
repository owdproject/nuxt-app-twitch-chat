import { defineDesktopConfig } from '@owdproject/nuxt'

export default defineDesktopConfig({
  theme: '@owdproject/theme-nova',
  apps: ['@owdproject/app-twitch-chat'],
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
