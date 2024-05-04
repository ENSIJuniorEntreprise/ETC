import React, { useState, useEffect } from 'react';
import Boxistyle from './Box.module.css';

function Box(props) {
    const [value, setValue] = useState(0);

    useEffect(() => {
        // Function to increment the value
        const increment = () => {
            setValue((prevValue) => {
                if (prevValue < 500) {
                    return prevValue + 1; // Increment the value by one until 500
                }
                return prevValue; // Once 500 is reached, stop incrementing
            });
        };

        // Set up a timer to call the increment function
        const timer = value < 500 && setTimeout(increment, 100); // Adjust the timeout as needed

        // Cleanup function to clear the timer
        return () => clearTimeout(timer);

    }, [value]); // Depend on 'value' to re-run the effect when it changes

    return (
        <div className={Boxistyle.container}>
            <p className={Boxistyle.Val}>+{value}</p>
            <p className={Boxistyle.Text}>{props.text}</p>
        </div>
    );
}

export default Box;
