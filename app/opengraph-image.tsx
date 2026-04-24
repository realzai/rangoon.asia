import { ImageResponse } from 'next/og'

export const alt = 'The Rangoon Gazette — A Daily Chronicle of the Golden City upon the Irrawaddy'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          background: '#f3eee2',
          color: '#0e0d0b',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 80,
          fontFamily: 'Georgia, serif',
          position: 'relative',
        }}
      >
        {/* Top border strip */}
        <div
          style={{
            position: 'absolute',
            top: 30,
            left: 30,
            right: 30,
            height: 0,
            borderTopWidth: 4,
            borderTopStyle: 'double',
            borderTopColor: '#0e0d0b',
          }}
        />
        {/* Bottom border strip */}
        <div
          style={{
            position: 'absolute',
            bottom: 30,
            left: 30,
            right: 30,
            height: 0,
            borderTopWidth: 4,
            borderTopStyle: 'double',
            borderTopColor: '#0e0d0b',
          }}
        />

        <div
          style={{
            fontSize: 24,
            letterSpacing: '0.4em',
            textTransform: 'uppercase',
            marginBottom: 30,
          }}
        >
          Established MDCCCLII · Rangoon
        </div>

        <div
          style={{
            fontSize: 140,
            lineHeight: 1,
            textAlign: 'center',
            fontWeight: 700,
            fontStyle: 'italic',
          }}
        >
          The Rangoon Gazette
        </div>

        <div
          style={{
            width: 900,
            marginTop: 30,
            borderTopWidth: 2,
            borderTopStyle: 'solid',
            borderTopColor: '#0e0d0b',
          }}
        />

        <div
          style={{
            fontSize: 38,
            fontStyle: 'italic',
            marginTop: 30,
            textAlign: 'center',
            maxWidth: 900,
            lineHeight: 1.2,
          }}
        >
          A Daily Chronicle of the Golden City upon the Irrawaddy
        </div>
      </div>
    ),
    { ...size },
  )
}
