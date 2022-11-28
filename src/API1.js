import React from "react";
import axios from "axios";

class API1 extends React.Component{
    constructor(){
        super()
        this.state = {
            persons : []
        }
    }

    componentDidMount(){
        axios.get("https://reqres.in/api/users?page=2")
        .then(res => {
            let persons = res.data.data;
            this.setState({ persons });
            //console table print
           // console.table(persons)
        })
    }
    
    render(){
        return(
            <>
                {JSON.stringify(this.state.persons)}
    
                <h1> Register details</h1>
                <table border="1">
                  <tr>
                    <td> ID </td>
                    <td> Email </td>
                    <td> First Name </td>
                    <td> Last Name </td>
                    <td> Avatar </td>
                  </tr>
                  {this.state.persons.map ((details,index) => {
                    return(
                      <tr key = {index}>
                        <td> {index + 1}</td>
                        <td> {details.email} </td>
                        <td> {details.first_name} </td>
                        <td> {details.last_name} </td>
                        <td> {details.avatar} </td>
                      </tr>
                    )
                  })}
                  
                </table>
            </>
        )
    }
    }

export default API1;