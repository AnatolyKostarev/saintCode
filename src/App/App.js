import cls from './App.module.sass'
import {useTranslation} from "react-i18next";
import {Suspense} from "react";

function App() {
    const {t, i18n} = useTranslation();
    return (
        <div className={cls.App}>
            <Suspense fallback=''>
                <h1>{t('SaintCode')}</h1>
            </Suspense>
        </div>
    )
}

export default App
