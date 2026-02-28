import type { ToastState } from '../types'

interface ToastProps {
  toast: ToastState
}

export default function Toast({ toast }: ToastProps) {
  return (
    <div
      className={[
        'fixed bottom-7 left-1/2 -translate-x-1/2 z-50',
        'px-7 py-3 rounded-full font-poppins text-sm font-medium text-white',
        'whitespace-nowrap max-w-[90vw] text-center',
        'pointer-events-none select-none',
        'transition-all duration-300',
        toast.visible
          ? 'opacity-100 translate-y-0 animate-toast-in'
          : 'opacity-0 translate-y-4',
        toast.isError ? 'bg-red-500' : 'bg-pink',
      ]
        .filter(Boolean)
        .join(' ')}
      style={{ boxShadow: '0 8px 24px rgba(181,48,110,0.30)' }}
    >
      {toast.message}
    </div>
  )
}
