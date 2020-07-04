import React, { useState } from 'react';

const IterationSample = () => {
    const [names, setNames] = useState([
        {id: 1, text: 'snownam'},
        {id: 2, text: 'ice'},
        {id: 3, text: 'snow'},
        {id: 4, text: 'wind'}
    ]);

    const [inputText, setInputText] = useState('');
    const [nextId, setNextId] = useState(5);

    const onChange = e => setInputText(e.target.value);

    const onClick = () => {
        const nextNames = names.concat({
            id: nextId,
            text: inputText
        });

        setNames(nextNames);
        setNextId(nextId+1);
        setInputText('');
    };

    const onRemove = id => {
        const nextNames = names.filter(name => name.id !== id);
        setNames(nextNames);
    }

    const namesList = names.map(name => (
        // USE closures
        <li key={name.id} onDoubleClick={()=>onRemove(name.id)}>
            {name.text}
        </li>
    ));

    return(
        <>
            <input value={inputText} onChange={onChange}/>
            <button onClick={onClick}>Add</button>
            <ul>{namesList}</ul>
        </>
    );
};

export default IterationSample;