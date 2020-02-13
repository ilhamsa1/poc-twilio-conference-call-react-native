import { observable, action, computed } from 'mobx'
import { persist } from 'mobx-persist'

class SessionStore {
  @persist @observable accessToken = null
  @observable processing = false
  @observable profile = 'ssss'

  @computed get getUser() {
    return this.user
  }

  @computed get getProfile() {
    return this.profile
  }

  @action setProfile = (val) => {
    console.log('ssea')
    this.profile = val
  }

  @action setAccessToken = ({ token }) => {
    this.accessToken = token
    // setApiAuth(this.accessToken)
  }
}
export default SessionStore
