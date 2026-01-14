'use client'

import { motion, AnimatePresence } from 'framer-motion'

interface AlertDialogProps {
  isOpen: boolean
  onClose: () => void
  title: string
  message: string
  type?: 'success' | 'error'
}

export function AlertDialog({ isOpen, onClose, title, message, type = 'success' }: AlertDialogProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/20 backdrop-blur-[2px] z-[60]"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-sm bg-white rounded-2xl shadow-xl z-[60] overflow-hidden border border-gray-100"
          >
            <div className={`p-1.5 ${type === 'success' ? 'bg-green-500' : 'bg-red-500'}`} />
            
            <div className="p-6">
              <div className="mb-4 flex items-center justify-center">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center ${type === 'success' ? 'bg-green-50 text-green-500' : 'bg-red-50 text-red-500'}`}>
                  {type === 'success' ? (
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  ) : (
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                  )}
                </div>
              </div>

              <h3 className="text-xl font-bold text-center text-gray-900 mb-2">
                {title}
              </h3>
              <p className="text-gray-500 text-center mb-6 leading-relaxed">
                {message}
              </p>

              <button
                onClick={onClose}
                className={`w-full py-3 px-4 rounded-xl font-semibold text-white transition-all transform active:scale-95 duration-200 ${
                  type === 'success' 
                    ? 'bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 shadow-lg shadow-green-500/25' 
                    : 'bg-gradient-to-r from-red-500 to-rose-600 hover:from-red-600 hover:to-rose-700 shadow-lg shadow-red-500/25'
                }`}
              >
                Okay, understood
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
