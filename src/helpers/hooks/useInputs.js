import {useState} from 'react';

export const useInputs = (callback, data = {}) => {
    const [inputs, setInputs] = useState({...data});

    async function handleSubmit(event) {
        event.preventDefault();
        callback(inputs);
    }

    function handleInput(event) {
        if (event && event.persist) {
            event.persist();
        }

        console.log("EVENT: ", event);
        let name = event.target.name,
            value = event.target.value;

        setInputs(inputs => ({
            ...inputs,
            [name]: value
        }));
    }

    return {
        handleSubmit,
        handleInput,
        inputs
    };
};
