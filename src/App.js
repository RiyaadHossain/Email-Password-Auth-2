import "./App.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from "./firebase.init"
import { useState } from "react";

const auth = getAuth(app);


function App() {
  const [validated, setValidated] = useState(false);
  const [email, setEamil] = useState('')
  const [password, setPassword] = useState('')
  const onBlurEmail = event => {
    setEamil(event.target.value)
    console.log(email);
  }
  const onBlurPassword = event => {
    setPassword(event.target.value)
  }
  const onSubmit = event => {
    createUserWithEmailAndPassword(auth, email, password)
    .then(credential => {
      const user = credential.user
      console.log(user);
    })
    .then(error => {
      const errorMessage = error.message
      console.log(errorMessage);
    })
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  }
  return (
    <div className="container">
      <h1 className="text-center mt-5 mb-4 text-primary">Submit the Form</h1>
      <div className="border py-3 px-3 shadow rounded-3 mt-3">
        <h2 className="text-center mb-3 text-info">Sign Up</h2>
        <Form noValidate validated={validated} onSubmit={onSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control onBlur={onBlurEmail} type="email" placeholder="Enter email" required />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
            <Form.Control.Feedback type="invalid">
            Please provide a valid Email.
          </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control onBlur={onBlurPassword} type="password" placeholder="Password"  required/>
            <Form.Control.Feedback type="invalid">
            Please provide a valid Password.
          </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Already Signed in" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Sign In
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default App;
