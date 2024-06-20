export default function Sidebar() {

    const SidebarStyle = {
        width: '6vw',
        height: '90vh',
        backgroundColor: 'blue',
        padding: '10px',
        margin: '10px',
    }

    return (
        <>
        <div style={SidebarStyle}>
            <div style={{width: '100%', height: '10%', backgroundColor: 'red' }}>

            </div>
            <div style={{width: '100%', height: '90%', backgroundColor: 'yellow' }}>

            </div>
        </div>
        </>
    )

}