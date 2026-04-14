'use client'

import React from 'react'
import Image from 'next/image'
import { useLanguage } from '@/lib/LanguageContext'

interface PhoneMockupProps {
  className?: string
  width?: number
}

export const PhoneMockup: React.FC<PhoneMockupProps> = ({
  className = '',
  width = 280,
}) => {
  const { lang } = useLanguage()
  const screenshot = lang === 'ru' ? '/app-screenshot-ru.png' : '/app-screenshot-en.png'

  // iPhone aspect ratio (roughly 19.5:9 screen, plus bezels)
  const height = Math.round(width * 2.16)
  const borderRadius = Math.round(width * 0.15) // ~42px at 280
  const bezelWidth = Math.round(width * 0.025) // thin bezel
  const screenRadius = borderRadius - bezelWidth

  // Dynamic island dimensions
  const diWidth = Math.round(width * 0.28)
  const diHeight = Math.round(width * 0.085)
  const diTop = bezelWidth + Math.round(width * 0.02)

  return (
    <div className={`flex items-center justify-center ${className}`}>
      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-8px);
          }
        }
        .phone-mockup {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>

      <div
        className="phone-mockup relative"
        style={{
          width: `${width}px`,
          height: `${height}px`,
        }}
      >
        {/* Outer glow */}
        <div
          className="absolute inset-0 -m-4 rounded-[50px] opacity-15 blur-xl"
          style={{ background: 'radial-gradient(ellipse, #6c63ff 0%, transparent 70%)' }}
        />

        {/* Phone body */}
        <div
          className="relative overflow-hidden"
          style={{
            width: '100%',
            height: '100%',
            borderRadius: `${borderRadius}px`,
            border: '1px solid #2a2a4a',
            background: 'linear-gradient(135deg, #1a1a3a, #0a0a1a)',
            padding: `${bezelWidth}px`,
          }}
        >
          {/* Screen with screenshot */}
          <div
            className="relative overflow-hidden w-full h-full"
            style={{
              borderRadius: `${screenRadius}px`,
              background: '#000',
            }}
          >
            <Image
              src={screenshot}
              alt="DreamRead app screenshot"
              fill
              sizes={`${width}px`}
              style={{ objectFit: 'cover', objectPosition: 'top' }}
              priority
            />

            {/* Dynamic Island overlay */}
            <div
              className="absolute left-1/2 -translate-x-1/2"
              style={{
                top: `${diTop}px`,
                width: `${diWidth}px`,
                height: `${diHeight}px`,
                borderRadius: `${diHeight / 2}px`,
                background: '#000',
                zIndex: 2,
              }}
            />
          </div>
        </div>

        {/* Side button accents */}
        <div
          className="absolute left-0 opacity-5"
          style={{
            top: `${height * 0.25}px`,
            width: '1px',
            height: `${height * 0.5}px`,
            background: '#fff',
          }}
        />
      </div>
    </div>
  )
}

export default PhoneMockup
