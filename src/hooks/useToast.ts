import { useState, useCallback, useRef } from 'react'
import type { ToastState } from '../types'

export function useToast() {
  const [toast, setToast] = useState<ToastState>({
    message: '',
    isError: false,
    visible: false,
  })
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const showToast = useCallback((message: string, isError = false) => {
    if (timerRef.current) clearTimeout(timerRef.current)
    setToast({ message, isError, visible: true })
    timerRef.current = setTimeout(() => {
      setToast(prev => ({ ...prev, visible: false }))
    }, 3200)
  }, [])

  return { toast, showToast }
}
