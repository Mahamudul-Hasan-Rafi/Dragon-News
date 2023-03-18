import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';
import LeftSideNav from '../LeftSideNav/LeftSideNav';
import { FaUser } from "react-icons/fa";
import Image from 'react-bootstrap/Image'
import { Button } from 'react-bootstrap';

const Header = () => {
    const { user, handleSignOut } = useContext(AuthContext);

    const handleLogOut = () => {
        handleSignOut()
            .then()
            .catch(err => console.error(err));
    }

    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
            <Container>
                <Navbar.Brand><Nav.Link as={Link} to='/'>Dragon News</Nav.Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                    </Nav>
                    <Nav>
                        {
                            user ?
                                <><Nav.Link>{user?.displayName}</Nav.Link>
                                    <Button onClick={handleLogOut} size='sm' className='m-2' variant='danger'>LogOut</Button>
                                    <Nav.Link>
                                        {
                                            user?.photoURL ? <Link to='/profile'><Image src={user.photoURL} style={{ height: '30px' }} roundedCircle></Image> </Link> : <FaUser></FaUser>
                                        }
                                    </Nav.Link>
                                </> :
                                <>
                                    <Link style={{ textDecoration: 'none' }} to='/login' className='me-3'>Login</Link>
                                    <Link style={{ textDecoration: 'none' }} to='/register'>Register</Link>
                                </>
                        }
                    </Nav>
                    <div className='d-lg-none d-block mt-4'>
                        <LeftSideNav></LeftSideNav>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;