import React, { useState } from "react";
import axios from "axios";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

const Createuser = ({ apiURL }) => {
  // states to store the required details
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");

  // function to handle the form submite and creating a new user in the API using post
  const handleSubmit = (e) => {
    axios
      .post(apiURL, {
        name: name,
        email_id: email,
        mobile_no: mobile,
      })
      .then((resp) => {
        alert("User Created!!");
        console.log(resp);
      })
      .catch((err) => console.log(err));

    // once the data are added, values are resetted to empty
    setName("");
    setEmail("");
    setMobile("");

    e.preventDefault();
  };

  return (
    <>
      <h4 className="text-primary">Kindly fill the below form:</h4>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label>Name</Label>
          <Input
            type="text"
            name="name"
            id="name"
            value={name}
            placeholder="Enter your name"
            onChange={(e) => setName(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label>Email</Label>
          <Input
            type="email"
            name="email"
            id="email"
            value={email}
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label>Mobile Number</Label>
          <Input
            type="tel"
            name="mobile"
            id="mobile"
            value={mobile}
            placeholder="Enter your mobile number"
            onChange={(e) => setMobile(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Button color="primary" type="submit">
            Create
          </Button>
        </FormGroup>
      </Form>
    </>
  );
};

export default Createuser;
