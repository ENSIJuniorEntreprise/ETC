import React, { useState, useEffect, useRef } from 'react';
import Boxistyle from './Box.module.css';

function Box(props) {
    const [value, setValue] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);

    useEffect(() => {
        let timer;
        if (isVisible) {
            const increment = () => {
                setValue((prevValue) => {
                    if (prevValue < 500) {
                        return prevValue + 1;
                    }
                    return prevValue;
                });
            };

            timer = value < 500 && setTimeout(increment, 5);
        }

        return () => clearTimeout(timer);
    }, [value, isVisible]);

    return (
        <div ref={ref} className={Boxistyle.container}>
            <p className={Boxistyle.Val}>+{value}</p>
            <p className={Boxistyle.Text}>{props.text}</p>
        </div>
    );
}

export default Box;
