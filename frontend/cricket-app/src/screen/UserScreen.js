import React, { useState } from "react";
import "./UserScreen.css";

const UserScreen =()=>{
    const [signUp,doSignUp] = useState(false);
    const signIn = () =>{
        doSignUp(true);
    }
    return (
        <>
          <section className="h-100 gradient-form"  style={{backgroundColor: "#eee"}}>
    <div className="container py-5 h-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-xl-10">
          <div className="card rounded-3 text-black">
            <div className="row g-0">
              <div className="col-lg-6">
                <div className="card-body p-md-5 mx-md-4">
  
                  <div className="text-center">
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                      style={{width: "185px"}} alt="logo"/>
                    <h4 className="mt-1 mb-5 pb-1">We are The CrickChat Team</h4>
                  </div>
  
                  <form>
                    <p>Please login to your account</p>
  
                    <div className="form-outline mb-4">
                      <input type="email" id="form2Example11" className="form-control"
                        placeholder="abc@gmail.com " />
                      <label className="form-label" htmlFor="form2Example11">Email</label>
                    </div>
  
                    <div className="form-outline mb-4">
                      <input type="password" placeholder="Enter Your Password " id="form2Example22" className="form-control" />
                      <label className="form-label" htmlFor="form2Example22">Password</label>
                    </div>
                   
                   {signUp &&   
                    <>
                    <div className="form-outline mb-4">
                      <input type="text" id="form2Example33" className="form-control" />
                      <label className="form-label" htmlFor="form2Example33">UserName</label>
                    </div>

                    <div className="form-outline mb-4">
                      Select Your Gender:<br/>
                      <input type="radio" value="MALE" name="gender"/> Male  &nbsp; <input type="radio" value="FEMALE" name="gender"/> Female
                    </div>
                    </>
                   }
                    
  
                    <div className="text-center pt-1 mb-5 pb-1">
                      <button className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3" type="button">Log
                        in</button><br/>
                      <a className="text-muted" href="#!">Forgot password?</a>
                    </div>
  
                    <div className="d-flex align-items-center justify-content-center pb-4">
                      <p className="mb-0 me-2">Don't have an account?</p>
                      <button type="button" className="btn btn-outline-danger" onClick={signIn}>Create new</button>
                    </div>
  
                  </form>
  
                </div>
              </div>
              <div className="col-lg-6 d-flex align-items-center gradient-custom-2">
                <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                  <h4 className="mb-4">Why Just Watch?? When You Can Watch And Chat Together</h4>
                  <p className="small mb-0">Welcome to Cricket Chat, the ultimate app for cricket fans! Here you can chat with other cricket lovers, get live updates on matches, scores and stats, and access exclusive content from your favorite players and teams. Whether you are a fan of test cricket, one-day internationals, or T20 leagues, Cricket Chat has something for you. Join now and start chatting! 🏏</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
        </>
      );
}

export default UserScreen;