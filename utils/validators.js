export function validateEmail(email) {
  return /\S+@\S+\.\S+/.test(email)
}

export function validateResume(file) {
  if (file.type !== 'application/pdf')
    throw new Error('Resume must be pdf format')

  if (file.size / 1024 > 25600)
    throw new Error('File size must be less than 25 mb')
}
