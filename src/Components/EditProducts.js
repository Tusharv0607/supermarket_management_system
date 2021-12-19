import React, {useState} from 'react'
import { Link } from "react-router-dom";
import Axios from 'axios';


const EditProducts = () => {

    const [P_Name,setP_Name]=useState('')
    const [P_Code,setP_Code]=useState('')
    const [P_Price,setP_Price]=useState('')
    const [Description,setDescription]=useState('')
    const [P_Avail,setP_Avail]=useState('')

    const requestOptions = {
        method: 'PUT',
        body: JSON.stringify({
            P_Name:P_Name,
            P_Code:P_Code,
            P_Price:P_Price,
            Description:Description,
            P_Avail:P_Avail
        })
    };

    const EditProduct = () => {
        fetch('localhost/Avenue/Prod/:P_Code',requestOptions).then((response)=> {
            if(response.message == 'Product was updated successfully.'){
                window.open('/Products','_self');
                alert("The Product was Updated successfully!")
            }
            else {
                alert(response.message);
                return;
            }
        })
    }

    return (
        <>
            <div className="main-wrapper">
                <div className="add-products-container">
                    <form className="add-products-form" action="">
                        <p align="center" style={{fontSize: '2vw'}}>Enter the Updated Values of the Product</p>
                        <p align="center" for="PName">Product Name : <input onChange={(e)=>setP_Name(e.target.value)} /><br /></p>
                        <p align="center" for="Pcode">Product Code &nbsp;: <input onChange={(e)=>setP_Code(e.target.value)} /><br /></p>
                        <p align="center" for="Pcost">Product Cost &nbsp;&nbsp;: <input onChange={(e)=>setP_Price(e.target.value)} /><br /></p>
                        <p align="center" for="Pdetails">Details &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: <input onChange={(e)=>setDescription(e.target.value)} /><br /></p>
                        <p align="center" for="Pavailability">Availability &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: <input onChange={(e)=>setP_Avail(e.target.value)} /><br /></p>
                        <div className="products-buttons special">
                            <button type="button" onClick={EditProduct} > UPDATE PRODUCTS </button>
                        </div>
                    </form>
                </div>
            </div>

            <div className="main-navigator product-navigator">
                <button className="button1"><Link className='button1-link' to="/ViewProduct">BACK</Link></button>
                <button className="button2">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</button>
            </div>
        </>
    )
}
export default EditProducts