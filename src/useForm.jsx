import { useState } from "react";

const useForm = validate => {
    const [values, setValues] = useState({
        initial: 0,
        contribution: 0,
        length: 0,
        interest: 0,
        compound: 'Daily'
    })
    const [errors, setErrors] = useState({})


    const handleChange = e => {
        const {name, value} = e.target
        setValues({
            ...values,
            [name]: value
        });
    };
    const handleSubmit = e => {
        e.preventDefault();
        setErrors(validate(values));
    }
    return {handleChange, values, handleSubmit, errors};
};
export default useForm;