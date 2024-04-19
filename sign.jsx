import React from "react";
import "./App.css";
export default function Sign(){
    return(
    <>
        <div className="signup">
        <section class="ban">
                <div class="form-box">
                    <div class="item">
                         <h1 id="h1">log<span class="i">i</span>n</h1>
                        <table>
                            <tr>
                                <td><label>email<br/></label></td>
                                <td><label>Nom<br/></label></td>
                            </tr>
                            <tr className="input-box">
                                <td><br/><input type="text" placeholder="wahibabousyf@gmail.com"/></td>
                                <td><br/><input type="text" placeholder="wahiba bousyf"/></td>
                            </tr>
                            <tr>
                                <td><br/><label>mot de passe<br/></label></td>
                                <td><br/><label>confirmation de mot passe<br/></label></td>
                            </tr>
                            <tr className="input-box">
                                <td><br/><input type="text" placeholder="ecrivez votre mot de pass"/></td>
                                <td><br/><input  type="text" placeholder="confirmez votre mot de pass"/></td>
                            </tr>
                        </table>
                        <p class="int">Forget Password ?</p><br/>
                        <span className="p">
                        <input type="submit" class='inpt1' value="Sing In"/><br/>
                        <p class="sin">Sin Up? <span class="or">Or continue with</span></p><br/>
                        <div class="inpt2">
                        <button type="submit" class="inpt4" value="Log in" ><span>Login in</span><img src="google.png" class="im" alt=""/></button>
                        <button type="submit" class="inpt4" value="Log in" ><span>Login in</span><img src="facebook (3).png" class="im" alt=""/></button>
                        </div>
                        </span>
                    </div>
                </div>
            </section>
            </div>
            </>
    )
}