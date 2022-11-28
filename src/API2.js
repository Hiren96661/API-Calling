import React from "react";
import axios from "axios";

class API2 extends React.Component{
    constructor(){
        super()
        this.state = {
            mydata : []
        }
    }
    componentDidMount(){
        axios.get("https://fakestoreapi.com/products")
        .then(res => {
            let mydata = res.data;
            this.setState ({ mydata });
            console.table (mydata);
        })
    }
    render(){
        return(
            <>
             <h1> Data Sheet</h1>
             <table border="1">
                <tr>
                    <th> ID </th>
                    <th> Title </th>
                    <th> Price </th>
                    <th> Description </th>
                    <th> Category </th>
                    <th> Image </th>
                    <th> Rating</th> 
                </tr>
                {this.state.mydata.map (detail => 
                    <tr>
                        <td> {detail.id} </td>
                        <td> {detail.title} </td>
                        <td> {detail.price}</td>
                        <td> {detail.description} </td>
                        <td> {detail.category} </td>
                        <td> <center> <img alt={detail.image} height="100" src={detail.image}/> </center> </td>
                        <td> Rate :  {detail.rating.rate} <br/>
                             Count : {detail.rating.count}</td>
                    </tr>)}
             </table>
            </>
        )
    }
}


export default API2;