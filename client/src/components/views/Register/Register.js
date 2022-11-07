import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';

const Register = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();

  };

  return (
    <Form className="col-12 col-md-4 mx-auto my-5 pb-5" onSubmit={handleSubmit}>
      <h1 className="my-4">Register</h1>
      <p className="mb-3">
        For demo purpose you can just sign in with login: <b>JohnDoe</b> and
        password: <b>test</b>.
      </p>

      <Form.Group className="mb-3" controlId="formLogin">
        <Form.Label>Login</Form.Label>
        <Form.Control
          type="text"
          value={login}
          onChange={(e) => setLogin(e.target.value)}
          placeholder="Enter login"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
      </Form.Group>

      <Button variant="outline-secondary" size="lg" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default Register;