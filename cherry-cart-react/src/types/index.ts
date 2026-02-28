export type TabType = 'login' | 'signin'

export interface ToastState {
  message: string
  isError: boolean
  visible: boolean
}

export interface LoginFormData {
  email: string
  password: string
}

export interface RegisterFormData {
  fullName: string
  email: string
  password: string
  confirmPassword: string
}
