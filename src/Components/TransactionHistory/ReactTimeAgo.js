import React from 'react';
import ReactTimeAgo from 'react-time-ago'

const TimeShow = ({date}) => {
    return (
        <div>
            <ReactTimeAgo date={date} locale="en-US"/>
        </div>
    );
};

export default TimeShow;