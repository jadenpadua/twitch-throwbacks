import React from 'react';
import ReactDOM from 'react-dom';

import PageLayout from './components/PageLayout';


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
              <PageLayout />
            </div>
        );
    }
}

export default App;

ReactDOM.render(<App />, document.getElementById('root'));
