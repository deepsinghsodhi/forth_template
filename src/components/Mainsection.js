import React from 'react'
import '../css/Mainsection.css'
import girl from '../images/girl.png'
import myprofile from '../images/myprofile.png'
import enrolled from '../images/enrolled.png'
import wishlist from '../images/wishlist.png'
import review from '../images/review.png'
import purchase from '../images/purchase.png'
import settings from '../images/settings.png'
import logout from '../images/logout.png'
import { Table } from 'reactstrap';
export default function MainSection() {
    return (
        <div className=''>
            <div className='head' > 
           <p> Home > My Profile</p>
            </div>

           
            <div className="container  main_block" style={{marginTop:'5rem',marginBottom:'5rem'}}>
                <div className="img_block">
                    <img src={girl} alt=""/>
                </div>
                <div className="text_content">
                    <h4 className="girl_text">Hello, Priya</h4>

                </div>
            </div>
           

           <div className="container section">
           <div style={{height:'22rem', width:'15rem'}}>
       <Table borderless>
      
      <tbody>
        <tr>
            <img src={myprofile} alt="" />
          <td style={{margin:'0rem'}}>My Profile</td>
        </tr>
        <tr>
          <img src={enrolled} alt="" />
          <td>Enrolled course</td>
        </tr>
        <tr>
          <img src={wishlist} alt="" />
          <td>Wishlist</td>
        </tr>
        <tr>
          <img src={purchase} alt="" />
          <td>purchase History</td>
        </tr>
        <tr>
          <img src={settings} alt="" />
          <td>settings</td>
        </tr>
        <tr>
          <img src={logout} alt="" />
          <td>Larry</td>
        </tr>
        <tr>
          <img src={review} alt="" />
          <td>logout</td>
        </tr>
      </tbody>
    </Table>
       </div>

       <div className='review' >
                <h5 style={{color:'black'}}>Purchase History</h5>
                <Table hover>
      
      <tbody  >

        <tr>
          <td>S.NO</td>
          <td> Order&nbsp;Id</td>
          <td>Invoice&nbsp;Number</td>
          <td>Payment&nbsp;Id</td>
          <td>Issued&nbsp;On</td>
          <td>Status</td>
          <td>Amount</td>
          <td>Actions</td>
        </tr>
       
      </tbody>
    </Table>
       </div>

           </div>
          

      
     
            
        </div>
    )
}
