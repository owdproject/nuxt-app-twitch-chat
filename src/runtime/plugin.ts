import { defineNuxtPlugin } from 'nuxt/app'
import { defineDesktopApp } from 'nuxt-desktop/kit/defineDesktopApp'
import configApp from './app.config'

export default defineNuxtPlugin({
  name: 'desktop-app-twitch-chat-register',
  async setup() {
    if (import.meta.server) return
    await defineDesktopApp(configApp)
  },
})
