export default function Sidebar() {
    const SidebarStyle = {
      width: '100px',
      height: '98vh',
      backgroundColor: 'blue',
      padding: '10px',
    };
  
    return (
      <div style={SidebarStyle}>
        <div style={{ width: '100%', height: '10%', backgroundColor: 'red' }}></div>
        <div style={{ width: '100%', height: '90%', backgroundColor: 'yellow' }}></div>
      </div>
    );
  }
  