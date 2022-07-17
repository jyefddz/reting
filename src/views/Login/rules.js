export const usernameRules = [
  { required: true, message: '请填写账号' },
  { pattern: /^[a-zA-Z0-9_-]{4,16}$/, message: '账号格式不正确' }
]
export const passwordRules = [
  { required: true, message: '请填写密码' }
]
