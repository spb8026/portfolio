import React, { useState } from 'react';

interface TooltipProps {
  title: string;
  subtitle?: string;
  position: 'top' | 'bottom' | 'left' | 'right';
  children: React.ReactNode;
}

const Tooltip = ({ title, subtitle, position, children }: TooltipProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const containerStyle: React.CSSProperties = {
    position: 'relative',
    display: 'inline-block',
    cursor: 'default',
  };

  const getPositionStyle = (): React.CSSProperties => {
    switch (position) {
      case 'top':
        return {
          bottom: '100%',
          left: '50%',
          transform: 'translateX(-50%) translateY(-8px)',
        };
      case 'bottom':
        return {
          top: '100%',
          left: '50%',
          transform: 'translateX(-50%) translateY(8px)',
        };
      case 'left':
        return {
          right: '100%',
          top: '50%',
          transform: 'translateX(-8px) translateY(-50%)',
        };
      case 'right':
        return {
          left: '100%',
          top: '50%',
          transform: 'translateX(8px) translateY(-50%)',
        };
      default:
        return {};
    }
  };

  const tooltipStyle: React.CSSProperties = {
    position: 'absolute',
    backgroundColor: '#1e1e1e',
    color: '#ccc',
    padding: '0.5rem 0.75rem',
    borderRadius: '0.5rem',
    fontSize: '0.875rem',
    zIndex: 100000000,
    whiteSpace: 'nowrap',
    opacity: isHovered ? 1 : 0,
    visibility: isHovered ? 'visible' : 'hidden',
    transition: 'opacity 0.2s ease, visibility 0.2s ease',
    pointerEvents: 'none',
    boxShadow: '0 2px 10px rgba(0,0,0,0.2)',
    ...getPositionStyle(),
  };

  const titleStyle: React.CSSProperties = {
    color: '#C22222',
    fontWeight: 600,
  };

  const subtitleStyle: React.CSSProperties = {
    color: '#bbb',
    fontSize: '0.8rem',
    marginTop: '2px',
  };

  return (
    <div
      style={containerStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
      <div style={tooltipStyle}>
        <div style={titleStyle}>{title}</div>
        <div style={subtitleStyle}>{subtitle}</div>
      </div>
    </div>
  );
};

export default Tooltip;
