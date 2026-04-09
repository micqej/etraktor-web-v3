'use client'
import { useEffect, useState, useCallback } from 'react'

interface LightboxProps {
  images: string[]
  startIndex: number
  onClose: () => void
}

export function LightboxModal({ images, startIndex, onClose }: LightboxProps) {
  const [idx, setIdx] = useState(startIndex)

  const nav = useCallback((d: number) => {
    setIdx(i => (i + d + images.length) % images.length)
  }, [images.length])

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') nav(-1)
      if (e.key === 'ArrowRight') nav(1)
    }
    document.addEventListener('keydown', handler)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handler)
      document.body.style.overflow = ''
    }
  }, [onClose, nav])

  return (
    <div className="lightbox open" onClick={onClose}>
      <button className="lb-close" onClick={onClose}>&#215;</button>
      <button className="lb-arrow lb-prev" onClick={e => { e.stopPropagation(); nav(-1) }}>&#8249;</button>
      <img
        src={images[idx]}
        alt=""
        onClick={e => e.stopPropagation()}
        style={{ maxWidth: '90vw', maxHeight: '86vh', objectFit: 'contain', borderRadius: 8 }}
      />
      <button className="lb-arrow lb-next" onClick={e => { e.stopPropagation(); nav(1) }}>&#8250;</button>
      <div className="lb-counter">{idx + 1} / {images.length}</div>
    </div>
  )
}

// Global lightbox context
import { createContext, useContext, ReactNode } from 'react'

interface LightboxContextType {
  open: (images: string[], index?: number) => void
}

const LightboxContext = createContext<LightboxContextType>({ open: () => {} })

export function LightboxProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<{ images: string[]; index: number } | null>(null)

  const open = (images: string[], index = 0) => setState({ images, index })
  const close = () => setState(null)

  return (
    <LightboxContext.Provider value={{ open }}>
      {children}
      {state && <LightboxModal images={state.images} startIndex={state.index} onClose={close} />}
    </LightboxContext.Provider>
  )
}

export function useLightbox() {
  return useContext(LightboxContext)
}
