import React from 'react'

class FormEmail extends React.Component{
    constructor(props){
        super(props)
    }
    render()
    {
        return(<>
            <input type="email" name="email" onChange={this.props.onChange} value={this.props.value} className="form-control" id="exampleInputEmail1" required placeholder="Enter email"/>
            < small id="emailHelp" className="form-text text-primary mb-3 text-justify small-font">We'll never share your email with anyone else.</small>
        </>)
    }

}

export default FormEmail;