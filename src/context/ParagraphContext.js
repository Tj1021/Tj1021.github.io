import createDataContext from './createDataContext'
import Education from '../paragraphs/Education.txt'
import Programming from '../paragraphs/Programming.txt'
import About from '../paragraphs/About.txt'
import Awards from '../paragraphs/Awards.txt'
import Contact from '../paragraphs/Contact.txt'
import Extracurricular from '../paragraphs/Extracurricular.txt'
import Volunteer from '../paragraphs/Volunteer.txt'
import Work from '../paragraphs/Work.txt'

const paragraphReducer = (state, action) => {
    switch (action.type) {
        case 'fetch_file':
            return { info: action.payload }
        default:
            return state
    }
}

const fetchFile = dispatch => (title) => {
    let name
    switch (title) {
        case 'Education':
            name = Education
            break
        case 'Programming Experience':
            name = Programming
            break
        case 'Volunteer Service':
            name = Volunteer
            break
        case 'Work Experience':
            name = Work
            break
        case 'Awards':
            name = Awards
            break
        case 'Extracurricular Activities':
            name = Extracurricular
            break
        case 'About':
            name = About
            break
        case 'Contact':
            name = Contact
            break
        default:
            break
    }
    fetch(name)
        .then(r => r.text())
        .then(text => {
            // console.log(text)
            dispatch({ type: 'fetch_file', payload: text })
        })

}


export const { Provider, Context } = createDataContext(
    paragraphReducer,
    { fetchFile },
    { info: '' }
)