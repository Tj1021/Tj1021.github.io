import React from 'react'
import NavbarElement from './NavbarElement'

const Navbar = () => {
    return (
        <div className="Navbar" style={styles.navbarStyle}>
            <NavbarElement title="Education" />
            <NavbarElement title="Programming Experience" />
            <NavbarElement title="Volunteer Service" />
            <NavbarElement title="Work Experience" />
            <NavbarElement title="Awards" />
            <NavbarElement title="Extracurricular Activities" />
            <div className="right" style={styles.navbarRightStyle}>
                <NavbarElement title="About" />
                <NavbarElement title="Contact" />
            </div>
        </div>
    )
}

const styles = {
    navbarStyle: {
        display: 'flex',
        flexDirection: 'row',
        flex: 1,
        paddingTop: 10
    },
    navbarRightStyle: {
        display: 'flex',
        flex: 1,
        justifyContent: 'flex-end',
    }
}

export default Navbar