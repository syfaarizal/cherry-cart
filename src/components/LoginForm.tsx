import { useState, FormEvent } from 'react'
import FieldInput from './FieldInput'
import SocialButtons from './SocialButtons'
import { UserIcon, LockIcon } from './icons'

interface LoginFormProps {
  onShowToast: (msg: string, isError?: boolean) => void
  onSocialLogin: (platform: string) => void
}

export default function LoginForm({ onShowToast, onSocialLogin }: LoginFormProps) {
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (loading) return
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      onShowToast('✓ Login berhasil! Selamat datang kembali.')
    }, 1000)
  }

  return (
    <div className="w-full max-w-sm flex flex-col items-center animate-fade-up">
      {/* Avatar */}
      <div
        className="w-[68px] h-[68px] rounded-full bg-pink flex items-center justify-center mb-3 shrink-0"
        style={{ boxShadow: '0 8px 24px rgba(181,48,110,0.35)' }}
      >
        <UserIcon size={34} fill="white" />
      </div>

      <h2 className="font-poppins font-bold tracking-[3px] text-pink mb-6 text-base sm:text-lg">
        LOGIN
      </h2>

      <form onSubmit={handleSubmit} className="w-full">
        <FieldInput
          icon={<UserIcon size={18} fill="#bbb" />}
          type="email"
          placeholder="Email"
          autoComplete="email"
          required
        />
        <FieldInput
          icon={<LockIcon size={18} fill="#bbb" />}
          type="password"
          placeholder="Password"
          autoComplete="current-password"
          required
        />

        <div className="flex items-center justify-between mt-1">
          <button
            type="button"
            className="font-poppins text-xs text-pink font-medium
                       hover:underline transition-all"
            onClick={() => onShowToast('Link reset password dikirim ke email Anda.')}
          >
            Forgot Password?
          </button>

          <button
            type="submit"
            disabled={loading}
            className="bg-pink text-white font-poppins font-semibold
                       text-xs tracking-[1.8px] px-7 py-2.5 rounded-full
                       transition-all duration-200
                       hover:bg-pink-dark
                       active:scale-95 disabled:opacity-70"
            style={{ boxShadow: '0 4px 18px rgba(181,48,110,0.35)' }}
          >
            {loading ? '•••' : 'LOGIN'}
          </button>
        </div>
      </form>

      <SocialButtons label="Or Login With" onSocialLogin={onSocialLogin} />
    </div>
  )
}
