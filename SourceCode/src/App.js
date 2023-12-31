import './App.css';
import React, {useState, useEffect} from 'react';
import Navbar from './navbar/Navbar';
import Body from './Body';
import TempMobileExperience from './TempMobileExperience';

function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
}, []);

console.log(windowWidth);


  return (
    <div className="App">
        <Body />
        <Navbar />
        {/*windowWidth < 1080 && <TempMobileExperience />*/}
    </div>
  );
}

export default App;
