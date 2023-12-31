import './App.css';
import React, {useState, useEffect} from 'react';
import Navbar from './navbar/Navbar';
import Body from './Body';
import TempMobileExperience from './TempMobileExperience';

function App() {

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  let isMobile = windowWidth <= 1080;

  useEffect(() => {
      const handleResize = () => {
          setWindowWidth(window.innerWidth);
          isMobile = windowWidth <= 1080;
      };

      window.addEventListener('resize', handleResize);

      return () => window.removeEventListener('resize', handleResize);
  }, [windowWidth]);



  return (
    <div className="App">
        <Body isMobile={isMobile}/>
        <Navbar isMobile={isMobile}/>
        {/*windowWidth < 1080 && <TempMobileExperience />*/}
    </div>
  );
}

export default App;
