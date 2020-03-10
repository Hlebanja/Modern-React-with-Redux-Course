import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';

const App = () => {
    return (
        // Componenets are the only exception to the usage
        // of {}. Even though it is a JS variable,
        // we treat it as if it was a JSX tag.
        <div className="ui container comments">
            <CommentDetail /> 
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));