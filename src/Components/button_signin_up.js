import React from 'react'

class ButttonSign extends React.Component{
 constructor(props){
     super(props)
 }
    render(){
        return(
            <button type="submit" className="btn btn-primary btn-block">{this.props.text}</button>
        )
    }
}

export default ButttonSign;