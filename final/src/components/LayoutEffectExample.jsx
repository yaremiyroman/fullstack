import { useState, useRef, useLayoutEffect, useEffect } from "react";


function LayoutEffectExample() {
    const [value, setValue] = useState(0);
    const divRef = useRef();

    useEffect(() => {
        console.log('EFFECT -> ');
    }, [value]);

    useLayoutEffect(() => {
        console.log('LAYOUT EFFECT -> ');

        if (divRef.current) {
            divRef.current.style.background = value % 2 ? 'lightblue' : 'red';
        }
    }, [value]);


    return (
        <>
            <div ref={divRef} style={{ padding: 30, margin: 10 }}>
                Значення: {value}
            </div>
            <button onClick={() => setValue(value + 1)}>INCREASE</button>
        </>
    );
};


export default LayoutEffectExample;