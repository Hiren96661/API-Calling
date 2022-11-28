import React from "react";
import axios from "axios";

class API4 extends React.Component{
    constructor(){
        super()
        this.state = {
            mydata : []
        }
    }
    componentDidMount(){
        axios.get("https://dummyjson.com/users")
        .then (res => {
            let mydata = res.data.users
            this.setState ({mydata})
        })
    }
    render (){
        return(
            <>
             <table border="1">
                <tr>
                    <th> ID </th>
                    <th>First Name </th> 
                    <th> Last Name</th> 
                    <th> Middle Name </th> 
                    <th> Age </th> 
                </tr>
                {this.state.mydata.map (details => 
                    <tr>
                        <td> {details.id} </td>
                        <td> {details.firstName}</td>
                        <td> {details.lastName}</td>
                        <td> {details.maidenName}</td>
                        <td>{details.age}</td> 
                    </tr>
                )}
             </table>
            </>
        )
    }
}

export default API4;