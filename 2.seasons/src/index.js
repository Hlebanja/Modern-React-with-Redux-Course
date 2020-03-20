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
        this.state = { lat: null };
    
        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                this.setState({lat: position.coords.latitude});
            },
            (err) => console.log(err)
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

    //React requires us to define render
    render() {
       
        return <div>Latitude: {this.state.lat} </div>;
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);