import React, {useState} from 'react';

export const MultiRow = function ({text}) {

    const [count, setCount] = useState(1);

    const rows = [];

    for (let i = 0; i <= count; i++) {
        rows.push(text);
    }

    return (
        <div>
            <button onClick={() => setCount(count + 1)}>+ row</button>
            <div>
                {
                    rows.map((text, index) => (<div key={index}>{text}</div>))
                }
            </div>
        </div>
    );
};
