import './App.css';
import React, { useContext } from 'react'
import Header from './components/Header'
import { Context as ParagraphContext } from './context/ParagraphContext'
import Info from './components/Info'
import headshot from './images/Headshot.jpg'
import { Scrollbars } from 'react-custom-scrollbars'


function App() {
  const { state: { info } } = useContext(ParagraphContext)
  return (
    <Scrollbars style={{ height: '100vh' }}>
      <div style={styles.body}>
        <Header />
        <div className="imageContainer" style={styles.containerStyle}>
          <img src={headshot} alt="Tristen Bono" style={styles.imageStyle} />
          <Info info={info} />
        </div>
      </div>
    </Scrollbars>

  );
}

const styles = {
  body: {
    backgroundColor: '#121212',
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    overflow: 'auto',
    fontFamily: 'sans-serif'
  },
  containerStyle: {
    paddingTop: 40,
    paddingLeft: 60,
    display: 'flex'
  },
  imageStyle: {
    height: 450,
  },
}

export default App;
