import { useEffect } from 'react';
import './App.css';
import ImageGallery from './components/getImages';
function App() {

  useEffect(() => {
    const perfData = window.performance.timing;
    const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
    console.log(`Время загрузки страницы: ${pageLoadTime}`);
  }, []);

  return (
    <>
      <ImageGallery/>
    </>
  );
}

export default App;
