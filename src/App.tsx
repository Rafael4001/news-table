import React from 'react';
import './App.css';

import BaseDetails from './store/BaseDetails'
import News from './components/News'

function App() {
  return (
    <div className={"App"}>
      <BaseDetails>
        <News/>
      </BaseDetails>
    </div>
  );
}

export default App;
