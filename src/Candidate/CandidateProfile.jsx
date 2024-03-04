import React from 'react'
import bggimage from "./bgimage.png"
import fggimage from "./fgimage.png"
import "./CandidateProfile.css"
import pggimage from "./preview.svg"
import locationimage from "./loc.svg"
import previcon from "./previewbtn.svg"
import PersonalSkills from "./PersonalSkills.jsx"
import "./PersonalSkills.css"

function CandidateProfile() {
    return (
        <div className="body">
            <div className='image'>
                <div ><img className='bgimage' src={bggimage} alt=""></img></div>
                <div ><img className='fgimage' src={fggimage} alt=""></img></div>
                <div><a><img className='icon' src={pggimage} alt=""></img></a></div>
            </div>

        

            <div className='napl'>
                <p className='nam'>Steve Jobs</p>
                <p className='place'><img className=" locate" src={locationimage} alt="" ></img>NewYork,US</p>
                <p className='major'>UI/UX Designer,Front End Developer</p>
            </div>

            
                    
            <br></br>
            <div><hr></hr></div>
            <div>


                <div className='contactinfo'>
                    <div className='small'>
                        <h1 classname="heading" >My Account</h1>
                        <p >Update Profile</p>
                        <div className='updateprof'><div className='img'><img src={fggimage} alt=""></img></div>
                            <div className='upd'><button className='updpho'>Upload Image</button>
                                <button className='upddel'>Delete</button></div></div>
                    </div>
                    <div>
                        <table>
                            <tr>
                                <td><h1>Resume</h1></td>
                            </tr>
                            <tr>
                                <td><input type='file' className='file'></input></td>
                            </tr>
                            <div className='subm'>
                                <tr><td><button className='up'>Upload </button></td>
                                    <td><button className='deel'>Delete</button></td></tr>
                            </div>
                        </table>

                    </div>
                </div>
            </div>
            <hr></hr>









            <div className='form'>
                
                    <form>
                        <table className='table'>
                            <tr>Full Name</tr>
                            <tr><input type='text' Placeholder="Enter your Name" required></input></tr>

                            <tr>Email</tr>
                            <tr><input type='email' Placeholder="Enter your E-mail" required></input> </tr>


                            <tr>Contact Number</tr>
                            <tr><input type='text' Placeholder="Enter you contact" required></input></tr>


                            <tr>Bio</tr>
                            <tr><textarea rows="4"></textarea></tr>


                            <tr>Personal Website</tr>
                            <input type="url"></input>

                            <tr>Country</tr>
                            <tr><input type="text"></input></tr>

                            <tr>State</tr>
                            <tr><input type="text"></input></tr>

                            <tr>City</tr>
                            <tr><input type="text"></input></tr>

                            <tr>Zip code</tr>
                            <tr><input type="number"></input></tr>

                        </table>
                    </form>



                    <div>
                        <PersonalSkills />
                    </div>

            </div>










            <div>
                <hr className='hort'></hr>
                <h2 className='heading'>Change your Password</h2><br></br>
                <table>
                    <tr>
                        <tr>Password</tr>
                        <tr><input type="password"></input></tr>
                    </tr>
                    <tr>
                        <tr>Re-Password</tr>
                        <tr><input type="password" required></input></tr>
                    </tr>
                </table>
                <hr className='hort'></hr>

                <table> <tr> <td><input className="lbl-checkbox" type="checkbox" value="1" /></td> <td><p className='free'>Available for free lancers</p></td> </tr> </table>





                <button className='submit'>Save All Changes</button>
            </div>
        </div>

    )
}

export default CandidateProfile