import React, { useState } from 'react'
import QuotesHome from './components/TronaldQuotes/QuotesHome';

import './App.css';

const componentEnum = Object.freeze({
  Home: 'Home',
})

const App = () => {
  // Use activeComponent to manage which project to display (currently only 1 project: Tronald Quotes)
  const [activeComponent, setActiveComponent] = useState(componentEnum.Home)

  return (
    <div className="App">
      {/* Todo: create top navigation bar */}
      {activeComponent === componentEnum.Home && <QuotesHome/>}
    </div>
  );
}

export default App;
