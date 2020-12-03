import '../App.css'
import React from 'react'
import Navbar from './Navbar'
import HeaderText from './HeaderText'

const Header = () => {

    return (
        <div style={styles.header}>
            <div style={styles.headerContainer} className="headerContainer">
                <HeaderText>
                    Tristen Bono
                </HeaderText>
            </div>
            <Navbar />
        </div>
    )

}

const styles = {
    header: {
        padding: 10,
        marginLeft: 25,
        marginRight: 25,
        alignItems: 'flex-end',
        backgroundColor: '#333',
        borderRadius: 10,
        marginTop: 10

    },
    headerTextStyle: {
        marginLeft: 20,
        marginRight: 20,
        fontFamily: 'Serif',
        color: 'white',
        boxShadow: '0px 4px 0px 0px #000',
        fontSize: 40,
        fontFamily: 'serif'
    },
    headerContainer: {
        display: 'flex',
        flex: 1,
        borderBottom: '#6b6b6b',
        borderBottomStyle: 'solid',
        borderWidth: 2
    }

}

export default Header