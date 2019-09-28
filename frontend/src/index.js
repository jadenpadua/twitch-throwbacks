import React from 'react';
import ReactDOM from 'react-dom';

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
                Hello world!
            </div>
        );
    }
}
    
export default App;

ReactDOM.render(<App />, document.getElementById('root'));

