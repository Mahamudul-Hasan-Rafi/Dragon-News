import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const Register = () => {
    const { handleRegister, handleUpdate } = useContext(AuthContext);

    const [error, setError] = useState();
    const [accepted, setAccepted] = useState(false);

    const handleCreate = (event) => {
        event.preventDefault();


        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        handleRegister(email, password)
            .then(result => {
                handleUpdate({ displayName: name, photoURL: photo })
                    .then(result => console.log(result))
                    .catch(error => setError(error));
                console.log(result.user);
                setError('');
                form.reset();
            })
            .catch(error => setError(error.message));
    }
    return (
        <div>
            <Form onSubmit={handleCreate} className='mb-3'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name="name" placeholder="Enter name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Photo</Form.Label>
                    <Form.Control type="text" name="photo" placeholder="Photo URL" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" placeholder="Enter email" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check onClick={() => setAccepted(!accepted)} type="checkbox" label={<p>Accept <Link to='/terms'>terms and conditions</Link></p>} />
                </Form.Group>
                <Button variant="primary" type="submit" disabled={!accepted}>
                    Submit
                </Button>
                <Form.Text className="text-muted">
                    {error}
                </Form.Text>
            </Form>
        </div>
    );
};

export default Register;