import React, {useState} from 'react';
import './App.css';

const Progress = ({done}) => {
  const [style, setStyle] = useState({});

  setTimeout(() => {
    const newStyle = {
      opacity: 1,
      width: `${done}%`
    }

    setStyle(newStyle);
  }, 200)

  return (
		<div className="progress">
			<div className="progress-done" style={style}>
				{done}%
			</div>
		</div>
	)
}

function App() {
  return (
    <div className="App">
        <h1>React Progress Bar using hook</h1>
		    <Progress done="50"/>
        <Progress done="60"/>
        <Progress done="70"/>
        <Progress done="100"/>
    </div>
  );
}

export default App;
