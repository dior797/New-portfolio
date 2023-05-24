import { Link } from "react-router-dom";
import '../pageCss/Contact.css'
import { useState } from 'react'
import { MDBInput, MDBCheckbox, MDBBtn } from 'mdb-react-ui-kit';

function Contact() {
    return (
        <>
            <div className="AllTogether">
                <div className="t1"><b>Contact Me</b></div>
                <div className="alll">
                    <div className="textCon">
                        <div id="sumForm">
                            This form is included to improve accessibility, professionalism, and create new opportunities for collaboration. The contact form offers a direct and convenient way for visitors to reach out to me, demonstrating my openness to communication. It can lead to exciting business prospects, project inquiries, and partnerships, while ensuring efficient and direct communication.
                        </div>
                    </div>
                    <div>
                        <form style={{ color: "white" }} id="FormAll">
                            <MDBInput id='form4Example1' wrapperClass='mb-4' label='Name'style={{backgroundColor:"white"}} />
                            <MDBInput type='email' id='form4Example2' wrapperClass='mb-4' label='Email address' style={{backgroundColor:"white"}} />
                            <MDBInput wrapperClass='mb-4' textarea id='form4Example3' rows={4} label='Message' style={{backgroundColor:"white"}} />

                            <MDBCheckbox wrapperClass='d-flex justify-content-center mb-4' id='form4Example4' label='Send me a copy of this message' defaultChecked />

                            <MDBBtn type='submit' className='mb-4' block>
                                Sign in
                            </MDBBtn>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact;
