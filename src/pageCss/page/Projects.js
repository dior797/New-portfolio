import { Link } from "react-router-dom";
import '../pageCss/Footer.css'
import React from 'react';
import { MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import Movie from '../Images/Movie.png'
import Weather from '../Images/Weather.png'
import Website from '../Images/Website.png'
import Login from '../Images/Login.png'


function Projects() {
    return (
        <MDBRow className='row-cols-1 row-cols-md-2 g-4' style={{ width:"85%", margin:"auto"}}>
            <MDBCol>
                <MDBCard style={{border:"white 3px solid"}}>
                    <MDBCardImage
                        src={Movie}
                        alt='...'
                        position='top'
                    />
                    <MDBCardBody>
                        <MDBCardTitle>React Movie Api</MDBCardTitle>
                        <MDBCardText>
                        </MDBCardText>
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>
            <MDBCol>
            <MDBCard style={{border:"white 3px solid"}}>
                    <MDBCardImage
                    src={Weather}
                        alt='...'
                        position='top'
                    />
                    <MDBCardBody>
                        <MDBCardTitle>React Weather Api</MDBCardTitle>
                        <MDBCardText>
                        </MDBCardText>
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>
            <MDBCol>
            <MDBCard style={{border:"white 3px solid"}}>
                    <MDBCardImage
                        src={Website}
                        alt='...'
                        position='top'
                    />
                    <MDBCardBody>
                        <MDBCardTitle>Fbla Website</MDBCardTitle>
                        <MDBCardText>
                        </MDBCardText>
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>
            <MDBCol>
            <MDBCard style={{border:"white 3px solid"}}>
                    <MDBCardImage
                        src={Login}
                        alt='...'
                        position='top'
                    />
                    <MDBCardBody>
                        <MDBCardTitle>Log in sytem using PHP & MySql</MDBCardTitle>
                        <MDBCardText>
                        </MDBCardText>
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>
        </MDBRow>
    );
}

export default Projects