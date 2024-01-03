import './App.css';
import React, {useState, useEffect} from 'react';
import Navbar from './navbar/Navbar';
import Body from './Body';

function App() {

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);
  const [isMobile, setIsMobile] = useState(windowWidth <= 1080);

  useEffect(() => {
    const handleResize = () => {
        setWindowWidth(window.innerWidth);
        setWindowHeight(window.innerHeight);
        setIsMobile(window.innerWidth <= 1080);
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
}, []);

  console.log(windowHeight);
  console.log(isMobile);

  return (
    <div className="App">
        <Body isMobile={isMobile}/>
        <Navbar isMobile={isMobile} windowHeight={windowHeight} />
        {/*windowWidth < 1080 && <TempMobileExperience />*/}
    </div>
  );
}

export default App;
