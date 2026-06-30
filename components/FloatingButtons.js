'use client'

import { useEffect } from 'react'

export default function FloatingButtons() {
  useEffect(() => {
    var Tawk_API = Tawk_API || {}
    var Tawk_LoadStart = new Date()
    var s1 = document.createElement('script')
    var s0 = document.getElementsByTagName('script')[0]
    s1.async = true
    s1.src = 'https://embed.tawk.to/6a43c28df0a7151d458c4b4a/1jscavukt'
    s1.charset = 'UTF-8'
    s1.setAttribute('crossorigin', '*')
    s0.parentNode.insertBefore(s1, s0)
  }, [])

  return (
    <div style={{
      position: 'fixed', bottom: '90px', right: '24px',
      display: 'flex', flexDirection: 'column', gap: '12px', zIndex: 9999,
    }}>
      <a
        href="https://wa.me/17633299406?text=Hi%2C%20I%20need%20help%20with%20my%20online%20class"
        target="_blank" rel="noopener noreferrer"
        style={{
          display: 'flex', alignItems: 'center', gap: '10px',
          background: '#25D366', color: 'white',
          padding: '12px 20px', borderRadius: '50px',
          textDecoration: 'none', fontWeight: 700, fontSize: '14px',
          boxShadow: '0 4px 20px rgba(37,211,102,0.4)',
          transition: 'transform 0.2s, box-shadow 0.2s',
        }}
        onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.05)'; e.currentTarget.style.boxShadow = '0 6px 28px rgba(37,211,102,0.5)' }}
        onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = '0 4px 20px rgba(37,211,102,0.4)' }}
      >
        <svg width="22" height="22" fill="white" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.123.553 4.116 1.523 5.843L.057 24l6.304-1.654A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.793 9.793 0 01-5.001-1.373l-.359-.213-3.722.976.993-3.63-.234-.372A9.792 9.792 0 012.182 12C2.182 6.565 6.565 2.182 12 2.182c5.434 0 9.818 4.384 9.818 9.818 0 5.435-4.384 9.818-9.818 9.818z"/>
        </svg>
        WhatsApp Us
      </a>
    </div>
  )
}