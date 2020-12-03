import React, { useContext } from 'react'
import { Context as ParagraphContext } from '../context/ParagraphContext'

const NavbarElement = ({ title }) => {

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
                fetchFile(title)
            }
        >
            {title}
        </button>
    )
}

const styles = {
    buttonStyle: {
        backgroundColor: '#333',
        border: 'none',
        color: 'white',
        borderRight: '2px solid #535353',
        fontSize: 15,
        padding: '5px 20px',
        outline: 'none',
    }
}

export default NavbarElement