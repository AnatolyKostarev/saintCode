import { useTranslation } from 'react-i18next';
import { Suspense } from 'react';
import cls from './App.module.sass';

function App() {
  const { t } = useTranslation();
  return (
    <div className={cls.App}>
      <Suspense fallback="">
        <h1>{t('SaintCode')}</h1>
      </Suspense>
    </div>
  );
}

export default App;
