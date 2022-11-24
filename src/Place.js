import React from "react";

class Place extends React.Component{
    constructor(){
        super();
        this.state = {
            mydata : []
        }
    }

componentDidMount(){
    axios.get('https://reqres.in/api/users?page=2')
    .then(res => {
        const persons = res.data.data;
        this.setState({ persons })
    })
}

render(){
    return(
        <>
            {this.state.persons.map (persons => <li> {persons.email} </li>)}
        </>
    )
}
}

export default Place;