import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import { FaGoogle, FaGithub, FaFacebook, FaWhatsapp, FaTwitter, FaTwitch } from "react-icons/fa";
import ListGroup from 'react-bootstrap/ListGroup';
import { GoogleAuthProvider } from 'firebase/auth';
import { AuthContext } from '../../../contexts/AuthProvider';
import Carousel from 'react-bootstrap/Carousel';
import Brand1 from '../../../assets/Brand1.png';
import Brand2 from '../../../assets/Brand2.png'

const RightSideNav = () => {
    const { handleSignInWithGoogle } = useContext(AuthContext);

    const provider = new GoogleAuthProvider();

    const handleSignInGoogle = () => {
        handleSignInWithGoogle(provider)
            .then(result => console.log(result.user))
            .catch(err => console.error(err));
    }

    return (
        <div>
            <div className="d-grid gap-2">
                <Button onClick={handleSignInGoogle} variant="outline-primary" size="lg">
                    <FaGoogle></FaGoogle> Login with Google
                </Button>
                <Button variant="outline-secondary" size="lg">
                    <FaGithub></FaGithub> Login with Github
                </Button>
            </div>
            <div className='mt-5'>
                <h4>Find us on</h4>
                <ListGroup>
                    <ListGroup.Item style={{ cursor: 'pointer' }} className='mt-3'><FaFacebook></FaFacebook> Facebook</ListGroup.Item>
                    <ListGroup.Item style={{ cursor: 'pointer' }} className='mt-3'><FaWhatsapp></FaWhatsapp> Whatsapp</ListGroup.Item>
                    <ListGroup.Item style={{ cursor: 'pointer' }} className='mt-3'><FaTwitter></FaTwitter> Twitter</ListGroup.Item>
                    <ListGroup.Item style={{ cursor: 'pointer' }} className='mt-3'><FaTwitch></FaTwitch> Twitch</ListGroup.Item>
                </ListGroup>
            </div>
            <Carousel className='mt-5'>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Brand1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Brand2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default RightSideNav;