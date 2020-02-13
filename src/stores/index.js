import { create } from 'mobx-persist'
import AsyncStorage from '@react-native-community/async-storage'

import SessionStore from './session'

class RootStore {
  constructor() {
    this.sessionStore = new SessionStore(this)
  }
}

const hydrate = create({
  storage: AsyncStorage,
  jsonify: true,
})

export const rootStore = new RootStore()

export const hydrateAll = () => {
  return Promise.all([
    hydrate('session', rootStore.sessionStore),
  ])
}
