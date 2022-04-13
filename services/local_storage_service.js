class LocalStorageService {
  setAuth(authData) {
    if (authData) {
      const stringifiedAuthData = JSON.stringify(authData)
      localStorage.setItem('auth', stringifiedAuthData)
    }
  }

  getAuth() {
    const authData = localStorage.getItem('auth')
    if (authData) return JSON.parse(authData)
  }
}

const localStorageService = new LocalStorageService()

export default localStorageService
