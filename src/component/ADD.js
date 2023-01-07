import React, { Component } from 'react';
import "./ADD.css";

class ADD extends Component {
    render() {
        return (
            <div>
                <form >
                    <h3>PURCHASE ORDER</h3>
                    <tr >
                        <td style={{padding:"5px"}}>
                            <label for="fname">First Name</label>
                            <input type="text" id="fname" name="firstname" placeholder="Enter Here.." />
                        </td>
                        <td style={{padding:"5px"}}>
                            <label for="lname">Last Name</label>
                            <input type="text" id="lname" name="lastname" placeholder="Enter Here.." />
                        </td>
                        </tr>
                        <tr>
                        <td style={{padding:"5px"}}>
                            <label for="lname">PO NO</label>
                            <input type="text" id="lname" name="lastname" placeholder="Enter Here.." />
                        </td>
                        <td style={{padding:"5px"}}>
                            <label for="lname">PO DATE</label>
                            <input type="text" id="lname" name="lastname" placeholder="Enter Here.." />
                        </td>
                        <td style={{padding:"5px"}}>
                            <label for="lname">BILL TO</label>
                            <input type="text" id="lname" name="lastname" placeholder="Enter Here.." />
                        </td>
                        </tr>
                        <tr>
                        <td style={{padding:"5px"}}>
                            <label for="lname">SHIP TO</label>
                            <input type="text" id="lname" name="lastname" placeholder="Enter Here.." />
                        </td>
                        <td style={{padding:"5px"}}>
                            <label for="lname">PARTY</label>
                            <input type="text" id="lname" name="lastname" placeholder="Enter Here.." />
                        </td>
                        <td style={{padding:"5px"}}>
                            <label for="lname">PARTY GST NO</label>
                            <input type="text" id="lname" name="lastname" placeholder="Enter Here.." />
                        </td>
                        <td style={{padding:"5px"}}>
                            <tr>
                                <td><label for="lname">PARTY ADDRESS</label></td>
                                </tr>
                                <tr>
                            <td><textarea rows={2} type="text" id="lname" name="lastname" placeholder="Enter Here.." /></td>
                            </tr>
                        </td>
                        </tr>
                        <tr>
                        <td style={{padding:"5px"}}>
                            <label for="lname">PO TYPE</label>
                            <input type="text" id="lname" name="lastname" placeholder="Enter Here.." />
                        </td>
                        <td style={{padding:"5px"}}>
                            <label for="lname">BILLING GST</label>
                            <input type="text" id="lname" name="lastname" placeholder="Enter Here.." />
                        </td>
                        <td style={{padding:"5px"}}>
                            <label for="lname">TOTAL AMT</label>
                            <input type="text" id="lname" name="lastname" placeholder="Enter Here.." />
                        </td>
                        </tr>
                        <h3>ORDER SUMMERY</h3>
                        <tr>
                        <td style={{padding:"5px"}}>
                            <label for="lname">ITEM</label>
                            <input type="text" id="lname" name="lastname" placeholder="Enter Here.." />
                        </td>
                        
                        
                        <td style={{padding:"5px"}}>
                            <label for="lname">ITEM Name</label>
                            <input type="text" id="lname" name="lastname" placeholder="Enter Here.." />
                        </td>
                        
                        <td style={{padding:"5px"}}>
                            <label for="lname">UOM</label>
                            <input type="text" id="lname" name="lastname" placeholder="Enter Here.." />
                        </td>
                        <td style={{padding:"5px"}}>
                            <label for="lname">HSN CODE</label>
                            <input type="text" id="lname" name="lastname" placeholder="Enter Here.." />
                        </td>
                        <td style={{padding:"5px"}}>
                            <label for="lname">QUANTITY</label>
                            <input type="text" id="lname" name="lastname" placeholder="Enter Here.." />
                        </td>
                        <td style={{padding:"5px"}}>
                            <label for="lname">RATE</label>
                            <input type="text" id="lname" name="lastname" placeholder="Enter Here.." />
                        </td>
                        <td style={{padding:"5px"}}>
                            <label for="lname">GROSS VALUE</label>
                            <input type="text" id="lname" name="lastname" placeholder="Enter Here.." />
                        </td>
                        </tr>
                        <tr>
                        <td style={{padding:"5px"}}>
                            <label for="lname">CGST(%)</label>
                            <input type="text" id="lname" name="lastname" placeholder="Enter Here.." />
                        </td>
                        <td style={{padding:"5px"}}>
                            <label for="lname">CGST</label>
                            <input type="text" id="lname" name="lastname" placeholder="Enter Here.." />
                        </td>
                        <td style={{padding:"5px"}}>
                            <label for="lname">SGST(%)</label>
                            <input type="text" id="lname" name="lastname" placeholder="Enter Here.." />
                        </td>
                        <td style={{padding:"5px"}}>
                            <label for="lname">IGST(%)</label>
                            <input type="text" id="lname" name="lastname" placeholder="Enter Here.." />
                        </td>
                        <td style={{padding:"5px"}}>
                            <label for="lname">IGST</label>
                            <input type="text" id="lname" name="lastname" placeholder="Enter Here.." />
                        </td>
                        <td style={{padding:"5px"}}>
                            <label for="lname">NET VALUE</label>
                            <input type="text" id="lname" name="lastname" placeholder="Enter Here.." />
                        </td>
                        <td style={{padding:"5px"}}>
                            <label for="lname">REMARKS</label>
                            <input type="text" id="lname" name="lastname" placeholder="Enter Here.." />
                        </td>
                       
                    </tr>
                        
                    
                    <tr>
                    <input type="submit" value="Submit" />
                    </tr>
                </form>
            </div>
        );
    }
}

export default ADD;
