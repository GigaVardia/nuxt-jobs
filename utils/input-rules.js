import { validateEmail } from './validators'

export default {
  password: [
    (v) => (!!v && v.length > 6) || 'Password must contain more than 6 letters',
  ],
  email: [(v) => (!!v && validateEmail(v)) || 'Invalid email'],
}
