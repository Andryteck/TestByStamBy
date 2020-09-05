import React, {useState, useEffect} from 'react'
import Header from './components/header/header'
import {useTranslation} from 'react-i18next'
import './App.css'
import Main from "./components/Main/Main";


export const langs = ['ENG', 'RU', 'BEL', 'UK', 'DE']

function App() {
    const {t, i18n} = useTranslation()
    const [currentLanguage, setCurrentLanguage] = useState(0)
    const [cartProducts, setCartProducts] = useState([])

    useEffect(() => {
        i18n.changeLanguage(langs[currentLanguage])
    }, [currentLanguage])

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

            </div>
        </div>
    )
}

export default App
