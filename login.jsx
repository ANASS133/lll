
import React from "react";
import "./App.css";
export default function Login(){
    return(
    <><div className="login">
        <div className="card">
            <section class="ban">
                <div class="form-box">
                    <div class="item">
                        <h1>log<span class="i">i</span>n</h1>
                        <label>Email</label><br/>
                        <div class="input-box">
                        <input type="email" class="in" placeholder="wahibabousyf@gmail.com" />
                        </div>
                        <br/>
                        <label>Password</label><br/>
                        <div class="input-box">
                        <input type="password" placeholder="Ulti Regalo" class="in"/>
                        </div>
                        <br/>
                        <p class="int">Forget Password ?</p><br/>
                        <input type="submit" class='inpt1' value="Sing In"/><br/>
                        <p class="sin">Sin Up? <span class="or">Or continue with</span></p><br/>
                        <div class="inpt2">
                        <button type="submit" class="inpt4" value="Log in" ><span>Login in</span><img src="google.png" class="im" alt=""/></button>
                        <button type="submit" class="inpt4" value="Log in" ><span>Login in</span><img src="facebook (3).png" class="im" alt=""/></button>
                        </div>
                    </div>
                </div>
            </section>
            </div>
            </div></>
    )
}