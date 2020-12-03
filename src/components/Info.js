import React, { useContext } from 'react'
import {Context as ParagraphContext} from '../context/ParagraphContext'

const Info = ({info}) => {

    const {fetchFile} = useContext(ParagraphContext)

    if (info === '') {
        fetchFile("About")
    }

    const parseHTML = () => {

        var parse = require('html-react-parser')
        return parse(info)
    }

    return (
    <div style = {styles.infoStyle} >{parseHTML()}</div>
    )
}

const styles = {
    infoStyle: {
        color: 'white',
        fontSize: 18,
        paddingLeft: 40,
        paddingRight: 60,
        alignSelf: 'top'
    }
}

export default Info