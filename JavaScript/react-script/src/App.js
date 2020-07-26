import React from 'react';
import LeftAssignment1 from './Components/LeftAssignment1'
import RightAssignment2 from './Components/RightAssignment2'

function App() {
  return (
    <div className="ui container">
      <div className="ui grid">
        <div className="eight wide column">
          <LeftAssignment1 />
        </div>
        <div className="eight wide column">
          <RightAssignment2 />
        </div>
      </div>
    </div>
  );
}

export default App;
