import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';

const Login = () => {

  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

  };

  return (
    <Form className="col-12 col-md-4 mx-auto my-5 pb-5" onSubmit={handleSubmit}>
      <h1 className="my-4">Sign in</h1>
      <p className="mb-3">
        Use your <b>Login</b> and <b>Password</b> to Sign in.
      </p>

      <Form.Group>
        <Form.Group className="mb-3" controlId="formLogin">
          <Form.Label>Login</Form.Label>
          <Form.Control
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
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

        <Button variant="secondary" type="submit">
          Sign in
        </Button>
      </Form.Group>
    </Form>
  );
};
export default Login;