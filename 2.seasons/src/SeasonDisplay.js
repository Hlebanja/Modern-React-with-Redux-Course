import './SeasonDisplay.css'; //webpack joins the files together. Takes the contents out of here and put in index.html
import React from 'react';

const seasonConfig = {
    summer: {
        text: 'Let\'s hit the beach!',
        iconName: 'sun'
    },
    winter: {
        text: 'Burr it is cold!',
        iconName: 'snowflake'
    }
};

const getSeason = (lat, month) => {
    if (month > 2 && month < 9) {
        return lat > 0 ? 'summer' : 'winter';
    } else {
        return lat > 0 ? 'winter' : 'summer';
    }
};

const SeasonDisplay = (props) => {
    const season = getSeason(props.lat, new Date().getMonth());
    const { text, iconName } = seasonConfig[season];

    return (
        // `${}` is ES2015 syntax for interpolating variable into a string
        <div className={`season-display ${season}`}>
            <i className={`icon-left massive ${iconName} icon`} />
            <h1>{text}</h1>
            <i className={`icon-right massive ${iconName} icon`} />
        </div>
    );
};

export default SeasonDisplay;