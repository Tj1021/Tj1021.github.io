import React, { useContext } from 'react'
import { Context as ParagraphContext } from '../context/ParagraphContext'

const NavbarElement = ({ children }) => {

    const { fetchFile } = useContext(ParagraphContext)

    const changeBackground = (e) => {
        e.target.style.backgroundColor === 'rgb(83, 83, 83)' ? e.target.style.backgroundColor = '#333' : e.target.style.backgroundColor = '#535353'
    }

    return (
        <button
            style={styles.buttonStyle}
            onMouseEnter={changeBackground}
            onMouseLeave={changeBackground}
            onClick={() =>
                fetchFile("About")
            }
        >
            {children}
        </button>
    )
}

const styles = {
    buttonStyle: {
        marginLeft: 10,
        marginRight: 20,
        fontFamily: 'Serif',
        color: 'white',
        fontSize: 40,
        fontFamily: 'serif',
        backgroundColor: '#333',
        outline: 'none',
        border: 'none',

    }
}

export default NavbarElement