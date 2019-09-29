import React from 'react';
import ReactDOM from 'react-dom';

// dashboard components
import Dashboard from './components/';
import StartThrowback from './components/Dashboard/StartThrowback';
import StopThrowback from './components/Dashboard/StopThrowback';

// reactions components
import Reactions from './components/';
import BrokenHeart from './components/Reactions/BrokenHeart';
import Heart from './components/Reactions/Heart';


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
                <Dashboard> <StartThrowback /> <StopThrowback /> </Dashboard>
                <Reactions> <Heart /> <BrokenHeart /> </Reactions>
            </div>
        );
    }
}

export default App;

ReactDOM.render(<App />, document.getElementById('root'));
