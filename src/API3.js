import React from "react";
import axios from "axios";

class API3 extends React.Component{
    constructor(){
        super()
        this.state = {
            mydata : []
        }
    }
    componentDidMount(){
        axios.get("https://dummyjson.com/products")
        .then(res => {
            let mydata = res.data.products
            this.setState ({mydata})
            console.table (mydata)
        })
    }
    render(){
        return(
            <>
            <table border="1">
                <tr> 
                    <th> Id </th>
                    <th> Title </th>
                    <th> Description</th>
                    <th> Price</th>
                    <th> Discount Percentage</th>
                    <th> Rating</th>
                    <th> Stock</th>
                    <th> Brand</th>
                    <th> Category</th>
                    <th> Thumbnail</th>
                    <th> Images</th>
                </tr>
                {this.state.mydata.map (details => 
                    <tr>
                        <td> {details.id}</td>
                        <td> {details.title} </td>
                        <td> {details.description} </td>
                        <td> {details.price} </td>
                        <td> {details.discountPercentage} </td>
                        <td> {details.rating} </td>
                        <td> {details.stock} </td>
                        <td> {details.brand} </td>
                        <td> {details.category} </td>
                        <td> <img alt={details.thumbnail} height="100" width="100" src={details.thumbnail}/>  </td>
                        <td> <img alt={details.image} height="100" src={details.image}/></td>
                    </tr>
                    )}
            
           



                </table>

            </>
        )
    }
}

export default API3;