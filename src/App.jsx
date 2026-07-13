import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css'
import '../src/css/font-awesome.min.css'
import '../src/css/themify-icons.css'
import '../src/css/flaticon_logistics.css'
import './sass/style.scss'
import 'react-toastify/dist/ReactToastify.css';
import AllRoute from './main-component/router';
import { ToastContainer } from 'react-toastify';
import i18n from './i18n';

function App() {
  const language = useSelector((state) => state.language.language);

  useEffect(() => {
    i18n.changeLanguage(language);
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
  }, [language]);

  return (
    <div className="App" id="scrool">
      <AllRoute />
      <ToastContainer />
    </div>
  )
}

export default App
