import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

//Example of functional component;
// const App = () => {
//     return <div>Hi there!</div>;
// };

//everytime we reset the state, the app component rerender
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { lat: null, errorMessage: '' };

    }
    //Optionally, the state initialization could be here
    //state = { lat: null, errorMessage: '' };
    //with no constructor declared

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({ lat: position.coords.latitude }),
            err => this.setState({ errorMessage: err.message })
        );
    }

    //LIFECYCLE METHODS
    // Runs once, when the component first loads, updates, etc.
    // componentDidMount() {}
    // componentDidUpdate() {}
    // componentDidUpdate() {} //always after a rerender
    // componentWillUnmount() {}

    //React requires us to define render
    render() {
        if (this.state.errorMessage && !this.state.lat) {
            return <div>Error: {this.state.errorMessage}</div>;
        }

        if (!this.state.errorMessage && this.state.lat) {
            return <SeasonDisplay lat={this.state.lat} />;
        }

        return <Spinner />;
    };
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);