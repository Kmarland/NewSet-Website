import logo from './logo.svg';
import React, { useEffect, useState } from 'react';
import './App.css';

const Side = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="side-container">
      <div className={`sidebar${isSidebarOpen ? '-open' : ''}`}>
        {/* Sidebar content */}
        <button onClick={toggleSidebar}>{`${isSidebarOpen ? 'Arrow' : 'Arrow'}`}</button>
      </div>
      <div className={`${isSidebarOpen ? 'dimmer' : ''}`}></div>
    </div>
  );
};

const useCountdown = (initialSeconds) => {
  const [secondsLeft, setSecondsLeft] = useState(initialSeconds);

  useEffect(() => {
    const interval = setInterval(() => {
      setSecondsLeft((prevSeconds) => (prevSeconds <= 0 ? initialSeconds : prevSeconds - 1));
    }, 1000); // Decrement timer every second

    return () => clearInterval(interval);
  }, [initialSeconds]);

  return secondsLeft;
};

const ProgressBar = () => {
  return (
    <div>
      <div className='ProgressBar'></div>
      <div className='ProgressBarOverlap'></div>
    </div>
  );
}

const ImageSLider = () => {

  let [index, setIndex] = useState(0);

  const secondsLeft = useCountdown(6);

  const handleClick = (clickedIndex) => {
    setIndex(clickedIndex);
  };

  useEffect(() => {
    // Update the index every x seconds
    if (secondsLeft <= 0) {
      setIndex((prevIndex) => (prevIndex === 4 ? 0 : prevIndex + 1));
    }
  }, [secondsLeft]);

  let pictures = ['https://www.ssclimbing.com/docs/midtown/slider/midtown-3.jpg', 'https://www.ssclimbing.com/docs/midtown/slider/midtown-2.jpg',
  'https://images.foxtv.com/static.fox5atlanta.com/www.fox5atlanta.com/content/uploads/2019/09/1280/720/DrUgf4VWoAAuuDu_1541513450841_6348508_ver1.0.jpg?ve=1&tl=1',
  'https://www.ssclimbing.com/docs/midtown/slider/midtown-3.jpg', 'https://www.ssclimbing.com/docs/midtown/slider/midtown-2.jpg'];

  let names = ['45 Degree', 'Left of Middle', 'Right of Middle', 'Slab Corner', 'Slab Slab'];

  return (
    <div className='MainBody'>
      <div className='SetPicsCont'>
        {/*Took a minute to figure out, but have to include secondsLeft > 0 because images switch on 0 
        You don't want the class to switch from hidden to hiddenInstant at 0 and vise versa for visible
        */}
        <div className={`SetPics ${secondsLeft <= 1 && secondsLeft > 0 ? 'hidden' : 'visible'}${secondsLeft === 0 ? 'Instant' : ''}`}>
          <div>
            <h1>{`${names[index]}`}</h1>
            <h3>Most Climbed:</h3>
            <ul>
              <li>{`${secondsLeft}`}</li>
              <li>Red Blue Tag</li>
              <li>Red Blue Tag</li>
            </ul>
          </div>
          <img src={`${pictures[index]}`}/>
        </div>
        <div className={`SetPics ${secondsLeft <= 1 && secondsLeft > 0 ? 'visible' : 'hidden'}${secondsLeft === 0 ? 'Instant' : ''}`}>
          <div>
            <h1>{`${names[index === names.length - 1 ? 0 : index+1]}`}</h1>
            <h3>Most Climbed:</h3>
            <ul>
              <li>{`${secondsLeft}`}</li>
              <li>Red Blue Tag</li>
              <li>Red Blue Tag</li>
            </ul>
          </div>
          <img src={`${pictures[index === names.length - 1 ? 0 : index+1]}`}/>
        </div>
      </div>
      
      <div className='LocationContainer'>
        <div className='Locations' onClick={() => handleClick(0)}>
          <div>
            <div className='ProgressBar'></div>
            <div className={index === 0 ? 'ProgressBarOverlapFill' : 'ProgressBarOverlap'}></div>
          </div>
          <h3 className={index != 0 ? 'HalfOpacity' : ''}>{names[0]}</h3>
        </div>

        <div className='Locations' onClick={() => handleClick(1)}>
          <div>
            <div className='ProgressBar'></div>
            <div className={index === 1 ? 'ProgressBarOverlapFill' : 'ProgressBarOverlap'}></div>
          </div>
          <h3 className={index != 1 ? 'HalfOpacity' : ''}>{names[1]}</h3>
        </div>

        <div className='Locations' onClick={() => handleClick(2)}>
          <div>
            <div className='ProgressBar'></div>
            <div className={index === 2 ? 'ProgressBarOverlapFill' : 'ProgressBarOverlap'}></div>
          </div>
          <h3 className={index != 2 ? 'HalfOpacity' : ''}>{names[2]}</h3>
        </div>

        <div className='Locations' onClick={() => handleClick(3)}>
          <div>
            <div className='ProgressBar'></div>
            <div className={index === 3 ? 'ProgressBarOverlapFill' : 'ProgressBarOverlap'}></div>
          </div>
          <h3 className={index != 3 ? 'HalfOpacity' : ''}>{names[3]}</h3>
        </div>

        <div className='Locations' onClick={() => handleClick(4)}>
          <div>
            <div className='ProgressBar'></div>
            <div className={index === 4 ? 'ProgressBarOverlapFill' : 'ProgressBarOverlap'}></div>
          </div>
          <h3 className={index != 4 ? 'HalfOpacity' : ''}>{names[4]}</h3>
        </div>
      </div>
    </div>
  );

}

function App() {

  return (
    <div className="App">
      <Side /> {/* Render the Side component */}
      <header className="App-header">
        <div className='colorBack'>
          <h1 className="App-logo" alt="logo">NewSet</h1>
          <h4>Sets</h4>
          <h4>Stats</h4>
          <h4>News</h4>
        </div>
        <ImageSLider />
      </header>
    </div>
  );
}

export default App;
