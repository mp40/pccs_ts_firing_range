import React, {useState} from 'react';
import './App.css';

const App: React.FC = () => {
  const [text, updateText] = useState('text')

  return (
    <div className="App">
      <header className="App-header">PCCS Firing Range</header>
      <div className="App-body">
        <div>Content</div>
        <button type="button" onClick={():void => updateText('TEST!')}>{text}</button>
        </div>
    </div>
  );
};

export default App;
