import React from 'react';
import ReactDOM from 'react-dom';

//Example of functional component;
// const App = () => {
//     return <div>Hi there!</div>;
// };

//Example of class-based component;
class App extends React.Component {
    render() {
        window.navigator.geolocation.getCurrentPosition(
            // 2 arguments, each a separate callback function
            //first argument function callback that gets called
            //every time the function successfully gets the user position.
            (position) => console.log(position),
            //failure callback - called every time first one fails
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
        return <div>Latitude: </div>;
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);