import React, {useState, useEffect} from 'react'
import Header from './components/Header/header'
import {useTranslation} from 'react-i18next'
import './App.css'
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";


export const langs = ['ENG', 'RU', 'BEL', 'UK', 'DE']

function App() {

    const [currentLanguage, setCurrentLanguage] = useState(0)
    const [cartProducts, setCartProducts] = useState([])

    return (
        <div className='app'>
            <div className='wrapper'>
                <Header
                    setCartProducts={setCartProducts}
                    cartProducts={cartProducts}
                    lang={currentLanguage}
                    setCurrentLanguage={setCurrentLanguage}
                />
                <Main/>
                <Footer/>
            </div>
        </div>
    )
}

export default App
