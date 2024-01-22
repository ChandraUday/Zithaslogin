import React from 'react'
import "./css/homescreen.css"

function HomeScreen() {
  return (


    <div className='homescreen'>

      <div className='header'>
         
            <a href="#" className="logo"><span>Z</span>ithas.in</a>

            <div className="navbar">
     
             <a class="active" href="#home">home</a>
             <a href="#Listings">Listings</a>
             <a href="#onlineorder">Online Order Managment</a>
             <a href="#Inquiry">Inquiry Form</a>
             <a href="#gallery">Gallery</a>
             <a href="#Blog">Blog</a>
             <a href="#contact">contact us</a>
            
            </div>

            <div>
            <button className="nav_logo" >LogOut</button>
            </div>

      </div>

           <div className='image'>
            <img src='https://res.cloudinary.com/ztpl-images/image/upload/q_auto,f_auto,fl_lossy/v1663522683/case-study/tvm-case-study-banners_uettvj.jpg' className='imgscreen'/>
            </div>

          {/* listing section starts */}

        <div className='listing'>
          <h1 className="heading">
             <span>L</span>
             <span>i</span>
             <span>s</span>
             <span>t</span>
             <span>i</span>
             <span>n</span>
             <span>g</span>
          </h1>

        <div className="box-container">

            <div className="box">
                <img src="https://cdn.vectorstock.com/i/preview-1x/77/12/banner-design-of-did-you-switch-to-visa-yet-vector-42357712.jpg" alt=""/>
                 <div className="content">
                     <h3>We help businesses To automize their process, increase their profitability, reduce their risk.</h3>
                    <p>Zithas Technologies</p>
                    
                    <div className="price">24<span>25</span></div>
                    <a href="#" className="btn">Buy it</a>
                 </div>
            </div>

            <div className="box">
                <img src="https://5.imimg.com/data5/SELLER/Default/2023/12/367561444/HU/JZ/EB/163126495/website-development-designing-services-for-schools-500x500.png" alt=""/>
                 <div className="content">
                     <h3>We help businesses To automize their process, increase their profitability, reduce their risk.</h3>
                    <p>Basic web kit Zithas Technologies</p>
                    
                    <div className="price">41 k <span>45 k</span></div>
                    <a href="#" className="btn">buy it</a>
                 </div>
            </div>

            <div className="box">
                <img src="https://assets.indiabizforsale.com/business/upload_pic/whatsapp_image_2019_08_08_at_18_3f10e5e5729c9d8c69ac2c52cfebeeab.jpeg" alt=""/>
                 <div className="content">
                     <h3>We help businesses To automize their process, increase their profitability, reduce their risk.</h3>
                    <p>Reliable Team Zithas Technologies</p>
                    
                    <div className="price">7 k <span>8 k</span></div>
                    <a href="#" className="btn">book now</a>
                 </div>
            </div>
          </div>
          </div>
    </div>
  )
}

export default HomeScreen