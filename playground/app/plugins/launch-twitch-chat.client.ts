import { nextTick } from 'vue'
import { defineNuxtPlugin } from 'nuxt/app'
import { useApplicationManager } from '@owdproject/nuxt/runtime/composables/useApplicationManager'

const APP_ID = 'tv.twitch.chat'
const WINDOW_MODEL = 'main'

/** Dev playground: open Twitch Chat after register + mount. */
export default defineNuxtPlugin({
  name: 'app-twitch-chat-playground-launch',
  dependsOn: ['desktop-app-twitch-chat-register'],
  async setup(nuxtApp) {
    if (!import.meta.dev) return

    const applicationManager = useApplicationManager()

    async function surfaceTwitchChatWindow() {
      if (!applicationManager.isAppDefined(APP_ID)) {
        return false
      }

      const app = applicationManager.getAppById(APP_ID)!

      if (app.storeWindows.$persistedState) {
        await app.storeWindows.$persistedState.isReady()
      }

      // Playground: drop stale minimized/hidden window state from prior sessions.
      app.closeAllWindows()
      app.storeWindows.windows = {}

      await applicationManager.execAppCommand(APP_ID, 'twitch-chat')

      const window = app.getFirstWindowByModel(WINDOW_MODEL)
      if (window) {
        window.actions.setActive(true)
        window.actions.bringToFront()
      }

      return Boolean(window)
    }

    nuxtApp.hook('app:mounted', async () => {
      await nextTick()

      for (let attempt = 0; attempt < 80; attempt++) {
        if (await surfaceTwitchChatWindow()) return
        await new Promise((resolve) => setTimeout(resolve, 50))
      }

      console.warn(
        '[app-twitch-chat playground] Twitch Chat app was not registered — check @owdproject/app-nuxt-twitch-chat plugin.',
      )
    })
  },
})
