const LineExample = require('./line').LineExample;
const React =  require('react');
const ReactDOM =  require('react-dom');

class App extends React.Component {
    render() {
        return (
            <div>
                <LineExample />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('main'));
