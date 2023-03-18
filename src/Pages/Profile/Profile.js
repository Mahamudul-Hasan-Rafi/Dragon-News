import React, { useContext, useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const Profile = () => {
    const { user, handleUpdate } = useContext(AuthContext);

    const photoRef = useRef(user?.photoURL);
    const navigate = useNavigate();

    const handleUpdateProfile = (event) => {
        event.preventDefault();

        const name = event.target.name.value;
        const photo = photoRef.current.value;

        handleUpdate({ displayName: name, photoURL: photo })
            .then(result => {
                navigate('/');
            })
            .catch(error => console.log(error.message))
    }

    return (
        <div>
            <Form onSubmit={handleUpdateProfile} className='mb-3'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" defaultValue={user?.email} readOnly />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name="name" placeholder="Enter name" defaultValue={user?.displayName} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Photo</Form.Label>
                    <Form.Control ref={photoRef} type="text" name="photo" placeholder="Photo URL" defaultValue={user?.photoURL} />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default Profile;