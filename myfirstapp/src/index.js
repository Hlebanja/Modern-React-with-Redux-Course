//import React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';


function getButtonText() {
    return "click me!";
}

//Create a React component
const App = () => {
    return (
        <div>
            <div>Hi there!</div>
            <div>
                <label className="label" htmlFor="name">
                    Enter name:
            </label>
                <input id="name" type="text" />
                <button style={{ backgroundColor: 'blue', color: 'white' }}>
                    {getButtonText()}
                </button>
            </div>
        </div>
    );
};

//Take the React component and show it on the screen
ReactDOM.render(
    <App />,
    document.querySelector('#root')
);