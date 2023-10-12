import React,{useState} from 'react';
import { useNavigate } from "react-router-dom";
import {Button,Form} from 'react-bootstrap';

const Login = () => {
    const navigate = useNavigate();
    const [userLogin, setUserLogin] = useState({
        email: "",
        pwd: "",
      });

    // const onInputChanged = (fieldName) => {
    //   // eslint-disable-next-line no-undef
    //   setUserLogin((prev) => ({ ...prev, [fieldName]: value }));
    // };

    const handleLogin = (e) => {
        e.preventDefault();
        const loggedUser = JSON.parse(localStorage.getItem("loginuser") || "");
    
        if (loggedUser) {
          if (userLogin.email === loggedUser.email && userLogin.pwd === loggedUser.pwd) {
            navigate("/");
            console.log("successful");
          } else {
            alert("Wrong Email or Password");
          }
        }
      };
    
      const resetForm = () => {
        setUserLogin({ email: "", pwd: "" });
      };
  return (
    <Form className='container'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email"  value={userLogin.email}
            onChange={(e) => {
                setUserLogin(...userLogin, e.target.value);
            }}
        />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" 
         value={userLogin.pwd}
            onChange={(e) => {
                setUserLogin(...userLogin, e.target.value);
            }}/>
      </Form.Group>
      {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group> */}
      <Button variant="primary" type="submit"  onClick={handleLogin}>
        Submit
      </Button>
      <Button onClick={resetForm}>Reset</Button>
    </Form>
  );
}

export default Login;