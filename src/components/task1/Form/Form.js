import React from 'react';
import './Form.css'
const Form = (props) => {
    return (
        <div className="formWrap">
            <input  onChange={props.onChange} className="form" type="text" placeholder={'Add movie'} />
            <button onClick={props.onclick}>Add</button>
        </div>
    );
};

export default Form;