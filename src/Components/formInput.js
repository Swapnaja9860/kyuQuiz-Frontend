import React from 'react'

const FormInput = ({ name,type,placeholder,onChange,className,value,id}) => {

        return(
            <input type={type} 
            name={name} 
            required="required" 
            onChange={onChange} 
            value={value} 
            className="form-control mb-3"
            id={id}
            required 
            placeholder={placeholder} />
        )
}

export default FormInput;

