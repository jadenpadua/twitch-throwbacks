import React from 'react';
import ReactDOM from 'react-dom';

// dashboard components
import Dashboard from './components/Dashboard/';

// reactions components
import Reactions from './components/Reactions';


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            meow: 'meow'
          }
    }
    render() {
        return (
            <div>
              <Dashboard />
              <Reactions />
            </div>
        );
    }
}

export default App;

ReactDOM.render(<App />, document.getElementById('root'));
