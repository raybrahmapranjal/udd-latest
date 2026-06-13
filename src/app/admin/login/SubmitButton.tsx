'use client'

import { useFormStatus } from 'react-dom'

interface SubmitButtonProps {
  loginAction: (formData: FormData) => void;
}

export default function SubmitButton({ loginAction }: SubmitButtonProps) {
  const { pending } = useFormStatus()

  return (
    <button 
      formAction={loginAction}
      disabled={pending}
      className="relative group w-full mt-2 overflow-hidden bg-purple-600 hover:bg-purple-700 disabled:bg-purple-400 text-white font-bold text-sm py-3 px-4 rounded-lg transition-all duration-200 shadow-md shadow-purple-200 active:scale-[0.98] disabled:cursor-not-allowed"
    >
      {pending ? (
        <div className="flex items-center justify-center gap-2">
          <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
          </svg>
          <span className="tracking-wide">Verifying...</span>
        </div>
      ) : (
        <span className="relative z-10 tracking-wide">Login to Dashboard</span>
      )}
    </button>
  )
}