import React from 'react';

const SlatAnimation = ({ slatCount = 11, navbarHeight = null, maxWidth = '420px', zoom = true }) => {
  const slats = Array.from({ length: slatCount });
  const topOffset = navbarHeight || 'var(--navbar-height, 0px)';

  return (
    <div style={{ ...styles.container, marginTop: topOffset }} className={zoom ? 'slat-zoom' : ''}>
      <style>
        {`
          @keyframes slideDown {
            0% { transform: translateY(-20%); opacity: 0; }
            60% { opacity: 1; }
            100% { transform: translateY(0); opacity: 1; }
          }

          @keyframes containerZoom {
            0% { transform: scale(1); }
            50% { transform: scale(1.03); }
            100% { transform: scale(1); }
          }

          .slat {
            animation: slideDown 1.0s cubic-bezier(.2,.9,.2,1) infinite alternate;
          }

          .slat-zoom {
            animation: containerZoom 1.2s ease-in-out infinite;
          }
        `}
      </style>

      <div style={{ ...styles.headerLarge, maxWidth }} />
      <div style={{ ...styles.headerSmall, maxWidth }} />

      <div style={{ ...styles.slatWrapper, maxWidth }}>
        {slats.map((_, index) => (
          <div
            key={index}
            className="slat"
            style={{
              ...styles.slat,
              animationDelay: `${index * 0.08}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    width: '100%',
    height: '100%',
    minHeight: '100px',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#fff9e6',
    overflow: 'hidden',
  },
  headerLarge: {
    height: '28%',
    borderBottom: '2px solid #333',
    width: '100%',
  },
  headerSmall: {
    height: '8%',
    borderBottom: '2px solid #333',
    width: '100%',
  },
  slatWrapper: {
    display: 'flex',
    flex: 1,
    padding: '0 8px',
    alignItems: 'stretch',
    justifyContent: 'space-between',
  },
  slat: {
    width: '2px',
    height: '100%',
    backgroundColor: '#333',
    transformOrigin: 'top',
  },
};

export default SlatAnimation;