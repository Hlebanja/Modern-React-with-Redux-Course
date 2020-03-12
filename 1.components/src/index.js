import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        // Componenets are the only exception to the usage
        // of {}. Even though it is a JS variable,
        // we treat it as if it was a JSX tag.
        <div className="ui container comments">
            <ApprovalCard>
                {/* These tags and content will also be passed as children! */}
                <div>
                <h4>Warning!</h4>
                Are you sure you want to do this?
                </div>
            </ApprovalCard>
            
            <ApprovalCard>
                <CommentDetail
                    author="Alex"
                    timeAgo="Today at 4h43PM"
                    commentText={faker.lorem.sentence()}
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    author="Sam"
                    timeAgo="Today at 4h45PM"
                    commentText={faker.lorem.sentence()}
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    author="Sanna"
                    timeAgo="Today at 4h55PM"
                    commentText={faker.lorem.sentence()}
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));