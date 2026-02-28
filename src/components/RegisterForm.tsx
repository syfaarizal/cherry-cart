import { useState, FormEvent } from 'react'
import FieldInput from './FieldInput'
import SocialButtons from './SocialButtons'
import { UserIcon, LockIcon, EmailIcon, AddUserIcon } from './icons'

interface RegisterFormProps {
  onShowToast: (msg: string, isError?: boolean) => void
  onSocialLogin: (platform: string) => void
  onSwitchToLogin: () => void
}

export default function RegisterForm({
  onShowToast,
  onSocialLogin,
  onSwitchToLogin,
}: RegisterFormProps) {
  const [loading, setLoading] = useState(false)
  const [fields, setFields] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
  })

  const update = (key: keyof typeof fields) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setFields(prev => ({ ...prev, [key]: e.target.value }))

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (loading) return

    if (fields.password.length < 6) {
      onShowToast('✗ Password minimal 6 karakter.', true)
      return
    }
    if (fields.password !== fields.confirmPassword) {
      onShowToast('✗ Konfirmasi password tidak cocok.', true)
      return
    }

    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      onShowToast(`✓ Akun untuk ${fields.fullName} berhasil dibuat!`)
      setFields({ fullName: '', email: '', password: '', confirmPassword: '' })
      setTimeout(onSwitchToLogin, 1800)
    }, 1000)
  }

  return (
    <div className="w-full max-w-sm flex flex-col items-center animate-fade-up">
      {/* Avatar */}
      <div
        className="w-[68px] h-[68px] rounded-full bg-pink flex items-center justify-center mb-3 shrink-0"
        style={{ boxShadow: '0 8px 24px rgba(181,48,110,0.35)' }}
      >
        <AddUserIcon size={34} fill="white" />
      </div>

      <h2 className="font-poppins font-bold tracking-[3px] text-pink mb-6 text-base sm:text-lg">
        CREATE ACCOUNT
      </h2>

      <form onSubmit={handleSubmit} className="w-full">
        {/* Two-column row on sm+ */}
        <div className="flex flex-col sm:flex-row sm:gap-4">
          <div className="flex-1 min-w-0">
            <FieldInput
              icon={<UserIcon size={18} fill="#bbb" />}
              type="text"
              placeholder="Full Name"
              autoComplete="name"
              required
              value={fields.fullName}
              onChange={update('fullName')}
            />
          </div>
          <div className="flex-1 min-w-0">
            <FieldInput
              icon={<EmailIcon size={18} fill="#bbb" />}
              type="email"
              placeholder="Email"
              autoComplete="email"
              required
              value={fields.email}
              onChange={update('email')}
            />
          </div>
        </div>

        <div className="flex flex-col sm:flex-row sm:gap-4">
          <div className="flex-1 min-w-0">
            <FieldInput
              icon={<LockIcon size={18} fill="#bbb" />}
              type="password"
              placeholder="Password"
              autoComplete="new-password"
              required
              value={fields.password}
              onChange={update('password')}
            />
          </div>
          <div className="flex-1 min-w-0">
            <FieldInput
              icon={<LockIcon size={18} fill="#bbb" />}
              type="password"
              placeholder="Confirm Password"
              autoComplete="new-password"
              required
              value={fields.confirmPassword}
              onChange={update('confirmPassword')}
            />
          </div>
        </div>

        <div className="flex justify-end mt-1">
          <button
            type="submit"
            disabled={loading}
            className="bg-pink text-white font-poppins font-semibold
                       text-xs tracking-[1.8px] px-7 py-2.5 rounded-full
                       transition-all duration-200
                       hover:bg-pink-dark active:scale-95 disabled:opacity-70"
            style={{ boxShadow: '0 4px 18px rgba(181,48,110,0.35)' }}
          >
            {loading ? '•••' : 'REGISTER'}
          </button>
        </div>
      </form>

      <SocialButtons label="Or Sign In With" onSocialLogin={onSocialLogin} />
    </div>
  )
}
