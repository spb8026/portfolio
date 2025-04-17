import React, { useState } from 'react';

interface TooltipProps {
  title: string;
  subtitle: string;
  children: React.ReactNode;
}

const Tooltip = ({ title, subtitle, children }: TooltipProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const containerStyle: React.CSSProperties = {
    position: 'relative',
    display: 'inline-block',
    cursor: 'default',
  };

  const tooltipStyle: React.CSSProperties = {
    position: 'absolute',
    top: '50%',
    left: '100%',
    transform: 'translateY(-50%)',
    marginLeft: '8px',
    backgroundColor: '#1e1e1e', // dark background
    color: '#ccc', // default text color
    padding: '0.5rem 0.75rem',
    borderRadius: '0.5rem',
    fontSize: '0.875rem',
    zIndex: 10000,
    whiteSpace: 'nowrap',
    opacity: isHovered ? 1 : 0,
    visibility: isHovered ? 'visible' : 'hidden',
    transition: 'opacity 0.2s ease, visibility 0.2s ease',
    pointerEvents: 'none',
    boxShadow: '0 2px 10px rgba(0,0,0,0.2)',
  };

  const titleStyle: React.CSSProperties = {
    color: '#C22222', // green title
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
