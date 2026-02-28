import { GoogleIcon, FacebookIcon } from './icons'

interface SocialButtonsProps {
  label?: string
  onSocialLogin: (platform: string) => void
}

export default function SocialButtons({ label = 'Or Login With', onSocialLogin }: SocialButtonsProps) {
  return (
    <>
      {/* Divider */}
      <div className="flex items-center w-full my-5 gap-3">
        <span className="flex-1 h-px bg-gray-200" />
        <span className="text-xs text-gray-400 font-medium whitespace-nowrap font-poppins">
          {label}
        </span>
        <span className="flex-1 h-px bg-gray-200" />
      </div>

      {/* Social Buttons */}
      <div className="flex gap-3 flex-wrap justify-center">
        <button
          type="button"
          onClick={() => onSocialLogin('Google')}
          className="flex items-center gap-2 px-5 py-2 border border-gray-200 rounded-xl
                     bg-white font-poppins text-sm font-medium text-gray-700
                     transition-all duration-200 hover:border-gray-300
                     hover:shadow-md active:scale-95"
        >
          <GoogleIcon size={18} />
          Google
        </button>
        <button
          type="button"
          onClick={() => onSocialLogin('Facebook')}
          className="flex items-center gap-2 px-5 py-2 border border-gray-200 rounded-xl
                     bg-white font-poppins text-sm font-medium text-gray-700
                     transition-all duration-200 hover:border-gray-300
                     hover:shadow-md active:scale-95"
        >
          <FacebookIcon size={18} />
          Facebook
        </button>
      </div>
    </>
  )
}
