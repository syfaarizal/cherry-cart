import { InputHTMLAttributes, ReactNode } from 'react'

interface FieldInputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon: ReactNode
}

export default function FieldInput({ icon, ...inputProps }: FieldInputProps) {
  return (
    <div className="field-group group">
      <span className="flex items-center mr-2.5 shrink-0">{icon}</span>
      <input
        {...inputProps}
        className="flex-1 min-w-0 border-none outline-none bg-transparent
                   font-poppins text-sm text-gray-700
                   placeholder:text-gray-400"
      />
    </div>
  )
}
