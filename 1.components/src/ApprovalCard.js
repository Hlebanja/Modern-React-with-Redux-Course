import React from 'react';

const ApprovalCard = (props) => {
    return (
        <div className="ui card">
            {/* props.children will be both other components or hard-coded code inside the component usage */}
            <div className="content">{props.children}</div> 
            <div className="ui two buttons">
                <div className="ui basic green button">Approve</div>
                <div className="ui basic red button">Reject</div>
            </div>
        </div>
    );

};

export default ApprovalCard;