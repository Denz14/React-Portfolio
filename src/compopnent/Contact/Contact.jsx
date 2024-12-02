import React from "react";
import "./Contact.css";
const Contact = () => {
  return (
    <>
      <div className="home-box  ">
        <div className="home-inner-box container  ">
    
          <div >
            <p><h1>Denzil Dsouza</h1></p> 
            
            <p>Ph: +353 899 88 0213</p> 
            <p>Email: denzdsouza14@gmail.com</p>
            <p>Add: Cappavilla Village, UL.</p>
          

          </div>
          
          <form style={{display:'flex',justifyContent:'center',width:'50%',}} >
  <div class="form-group " >
    <label for="exampleFormControlInput1" style={{color:'burlywood'}}>Email address</label>
    
    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
    <label for="exampleFormControlInput1" style={{color:'burlywood'}}>Name</label>
    <input type="name" class="form-control" id="exampleFormControlInput1" placeholder="Name "/>
    <label for="exampleFormControlInput1" style={{color:'burlywood'}}>Phone Number</label>
    <input type="number" class="form-control" id="exampleFormControlInput1" placeholder="phone number "/>
  </div>
 
 
  <div class="form-group">
    <label for="exampleFormControlTextarea1" style={{color:'burlywood'}}>Question</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>
</form>

        </div>
      </div>
    </>
  );
};

export default Contact;
