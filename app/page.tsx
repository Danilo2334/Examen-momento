export default function Page() {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      background: '#c25e5e',
      padding: '1rem'
    }}>
      <div style={{
        width: '100%',
        maxWidth: '400px',
        boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
        overflow: 'hidden',
        borderRadius: '6px'
      }}>

        {/* Top section */}
        <div style={{
          background: '#5e0028',
          color: 'white',
          padding: '2rem 2rem 3rem',
          position: 'relative'
        }}>
          {/* Back arrow */}
          <div style={{ position: 'absolute', top: '1rem', left: '1rem' }}>
            <svg width="24" height="24" stroke="currentColor" fill="none" strokeWidth="2">
              <path d="M12 19L5 12L12 5" />
              <path d="M19 12H5" />
            </svg>
          </div>

          {/* City + Logo */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '0',
            marginTop: '2rem'
          }}>
            <div style={{ textAlign: 'right', paddingRight: '0.25rem' }}>
              <div style={{ fontSize: '2rem', fontWeight: 'bold' }}>LHR</div>
              <div style={{ fontSize: '0.75rem' }}>LONDON</div>
            </div>

            <img src="/images/qatar-logo.png" alt="Qatar Logo" style={{
              width: '80px',
              height: '80px',
              margin: '0 0.5rem'
            }} />

            <div style={{ textAlign: 'left', paddingLeft: '0.25rem' }}>
              <div style={{ fontSize: '2rem', fontWeight: 'bold' }}>DXB</div>
              <div style={{ fontSize: '0.75rem' }}>DUBAI</div>
            </div>
          </div>

          <div style={{
            position: 'absolute',
            bottom: '0.25rem',
            left: 0,
            right: 0,
            textAlign: 'center',
            fontSize: '0.75rem',
            letterSpacing: '1px'
          }}>
            QATAR AIRWAYS
          </div>
        </div>

        {/* Bottom section */}
        <div style={{ background: 'white', padding: '2rem' }}>
          {/* Times */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginBottom: '2.5rem',
            alignItems: 'center'
          }}>
            <div style={{ fontSize: '1.5rem', fontWeight: '500' }}>3:40am</div>

            {/* Flecha larga */}
            <div style={{ flex: 1, padding: '0 1rem' }}>
              <svg
                width="100%"
                height="24"
                viewBox="0 0 120 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="0" y1="12" x2="110" y2="12" />
                <polyline points="100,5 110,12 100,19" />
              </svg>
            </div>

            <div style={{ textAlign: 'right' }}>
              <div style={{
                fontSize: '0.875rem',
                color: 'gray',
                marginBottom: '0.25rem'
              }}>Business</div>
              <div style={{ fontSize: '1.5rem', fontWeight: '500' }}>1:15pm</div>
            </div>
          </div>

          {/* Boarding */}
          <div style={{ marginBottom: '2rem' }}>
            <div style={{ fontSize: '0.875rem', color: 'gray', marginBottom: '0.25rem' }}>
              Boarding
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <div>January 17, 2015</div>
              <div>3:00am</div>
            </div>
          </div>

          {/* Flight Info */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginBottom: '3rem'
          }}>
            <div>
              <div style={{ fontSize: '0.875rem', color: 'gray', marginBottom: '0.25rem' }}>Flight</div>
              <div style={{ fontWeight: '500' }}>BAW31</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '0.875rem', color: 'gray', marginBottom: '0.25rem' }}>Gate</div>
              <div style={{ fontWeight: '500' }}>E30</div>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div style={{ fontSize: '0.875rem', color: 'gray', marginBottom: '0.25rem' }}>Seat</div>
              <div style={{ fontWeight: '500' }}>21a</div>
            </div>
          </div>

          {/* Barcode */}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <img src="/images/barcode.png" alt="Barcode" style={{ height: '48px', width: '256px' }} />
          </div>
        </div>
      </div>
    </div>
  );
}
