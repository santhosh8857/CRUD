import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import { useHistory } from "react-router";

const EditUser = ({ apiURL }) => {
  // useParams hook to take the id from the URl query
  const { id } = useParams();

  const history = useHistory();

  // state object to store the user details from the API
  const [userDetails, setUserDetails] = useState({
    name: "",
    email_id: "",
    mobile_no: "",
    id: "",
  });

  // destructuring the required data from the state
  const { name, email_id, mobile_no } = userDetails;

  // fetching the details from the API using ID
  useEffect(() => {
    fetch(`${apiURL}/${id}`)
      .then((resp) => resp.json())
      .then((data) => setUserDetails(data))
      .catch((err) => console.log(err));
  }, [apiURL, id]);

  // function to handle the form submit and updating the details to the API
  const handleSubmit = (e) => {
    userDetails.id = id;
    axios
      .put(`${apiURL}/${id}`, userDetails)
      .then((resp) => alert("User details updated!!!"))
      .catch((err) => console.log(err));

    history.push("/users");
    e.preventDefault();
  };

  // function to capture the entered details in the FORM
  const handleChange = (e) => {
    e.preventDefault();
    setUserDetails({ ...userDetails, [e.target.name]: e.target.value });
  };
  return (
    <>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label>Name</Label>
          <Input
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label>Email</Label>
          <Input
            type="email"
            name="email_id"
            id="email_id"
            value={email_id}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label>Mobile Number</Label>
          <Input
            type="tel"
            name="mobile_no"
            id="mobile_no"
            value={mobile_no}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Button color="primary" type="submit">
            Update
          </Button>
        </FormGroup>
      </Form>
    </>
  );
};

export default EditUser;
