import React, { useState } from 'react'

const AddProduct = ({ onAdd }) => {
    const [value, setValue] = useState("");
    const onHandleChange = (e) => {
        setValue(e.target.value)
    };
    const onHandleSubmit = (e) => {
        e.preventDefault();
        if (value) {
            onAdd(value);
        }
    }
    return (
        <>
            <form action="" onSubmit={onHandleSubmit}>
                <input type="text" defaultValue={value} onChange={onHandleChange} />
                <button type="submit">Add</button>
            </form>
            {value}
        </>
    )
}

export default AddProduct
