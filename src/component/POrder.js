import React, { Component } from 'react';
import ReactToPrint from 'react-to-print';
import "./POrder.css"

class POrder extends Component {
    render() {
        return (
            <div style={{backgroundColor : "white",width:"70rem",paddingLeft:"30px",marginLeft:"200px"}}>
           <div ref={el=>(this.componentRef=el)} >   
        <div>
            <h3 style={{textAlign:"center"}}>PURCHASE ORDER</h3>
            <table>
                <tr>
                    <td><b>Po NO :</b></td><td>401122456285</td>
                    <td><b>PO DATE :</b></td><td>7/01/2023</td>
                    <td><b>BILL TO :</b><br/>(TRANSAFE SERVICES LTD) : EASWAR <br/> MILL COMPOUND EASWAR MILL <br/>COMPOUNDBODIPALAYAM POST<br/>MALUMCHAMPATTI MALUMICHAMPATTI,<br/>COIMBTORE -641105</td>
                    <td><b>SHIP TO :</b><br/>(TRANSAFE SERVICES LTD) : EASWAR <br/> MILL COMPOUND EASWAR MILL <br/>COMPOUNDBODIPALAYAM POST<br/>MALUMCHAMPATTI MALUMICHAMPATTI,<br/>COIMBTORE -641105</td>
                </tr>
                <tr>
                    <td><b>PARTY :</b></td><td>102425-M. HANEEFA AUTO GLASSES</td>
                    <td><b>PARTY GST NO :</b></td><td>33BTZPM2791P1ZK</td>
                   

                </tr>
                <tr>
                    <td><b>PART ADDRESS :</b> </td><td>NO.88, KARUMBUKADAI - 641008</td>
                    <td><b>Delivery Date No :</b> </td><td>23/02/2022</td>
                    <td><b>PO TYPE :</b></td><td>Material Against So</td>
                </tr>
                <tr>
                    <td><b>BILLING GST :</b> </td><td>33AACI5531R2ZB</td>
                    <td><b>TOTAL AMT :</b> 18,408.00Rs</td>
                </tr>

               
            <b>REMARKS :</b> <br />PROJECT : PSOXL, PAYMENT:WITHIN 15 DAYS, 5MM CLEAR TOUGHENED GLASS 350X350-12 NOS,EPDM GLASS RUBBER BEADING -48 MTR
               
                <tr>
                    <td><b>Dear Sir/Madam</b></td>
                </tr>
                <tr><td>
                    We are please to award you the order for the following :-
                    </td></tr>
                <tr>
                    <td><b>Enter By :</b><b>65031-JAYAKUMAR .K</b></td>
                </tr>
            </table>
        </div>
        <div>
                <h3 style={{textAlign : "center"}}>ORDER SUMMARY</h3>
                <table className='bod' >
                    <tr>
                        <th className='bod'>Item</th>
                        <th className='bod'>S. No</th>
                        <th className='bod'>Item Name</th>
                        <th className='bod'>UOM</th>
                        <th className='bod'>HSN Code</th>
                        <th className='bod'>Quantity</th>
                        <th className='bod'>Rate</th>
                        <th className='bod'>Gross Value</th>
                        <th className='bod'>CGST(%)</th>
                        <th className='bod'>CGST</th>
                        <th className='bod'>SGST(%)</th>
                        <th className='bod'>SGST</th>
                        <th className='bod'>IGST(%)</th>
                        <th className='bod'>IGST</th>
                        <th className='bod'>Net Value</th>
                        <th className='bod'>Remarks</th>
                    </tr>
                    <tr>
                        <td  className='bod'>1</td>
                        <td className='bod'>100054</td>
                        <td className='bod'>inspection window</td>
                        <td className='bod'>OTHER</td>
                        <td className='bod'>73201</td>
                        <td className='bod'>12</td>
                        <td className='bod'>13,200</td>
                        <td className='bod'>15,600</td>
                        <td className='bod'>9</td>
                        <td className='bod'>1,1451</td>
                        <td className='bod'>9</td>
                        <td className='bod'>1,404</td>
                        <td className='bod'></td>
                        <td className='bod'></td>
                        <td className='bod'>18,408</td>
                        <td className='bod'></td>
                        
                    </tr>
                </table>
                
        </div>
        </div>

        <ReactToPrint
                trigger={()=>{
                    return <button style={{backgroundColor:"blue",borderRadius:"8px",fontSize:"20px",border:"none",padding:"16px",margin:"10px",marginLeft:"30rem"}}>Print</button>
                }}
                content = {()=>this.componentRef}
                documentTitle='new document'
                pageStyle="print"
                />
        
        </div>

        );
    }
}

export default POrder;
