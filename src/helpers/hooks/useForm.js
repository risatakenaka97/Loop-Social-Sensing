import {useState} from "react";


export function useForm(state = false) {
    const [success, setSuccess] = useState(state);

    function togglePopUp(state) {
        setSuccess(state);
    }

    return {
        success,
        togglePopUp
    }
}