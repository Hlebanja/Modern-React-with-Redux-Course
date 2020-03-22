import React from 'react';
import ReactDOM from 'react-dom';

//Example of functional component;
// const App = () => {
//     return <div>Hi there!</div>;
// };

//Example of class-based component;
class App extends React.Component {
    constructor(props) {
        super(props); //props provided as params for parent constructor
        this.state = { lat: null, errorMessage: '' };


    }

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            (position) => this.setState({ lat: position.coords.latitude }),
            (err) => this.setState({ errorMessage: err.message })
        );

        //Above code is equivalent to
        // function (err, position) {
        //     if(err) {
        //         console.log(err);
        //     } else {
        //         console.log(position);
        //     }
        // });
    }

    //LIFECYCLE METHODS
    // Runs once, when the component first loads, updates, etc.
    // componentDidMount() {}
    // componentDidUpdate() {}
    // componentDidUpdate() {} //always after a rerender
    // componentWillUnmount() {}

    //React requires us to define render
    render() {
        return <div>
            Latitude: {this.state.lat}
            <br />
            Error: {this.state.errorMessage}
        </div>
    };
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);