const solutionCode1 = `
//App.js

import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import { data } from "./data.js";
import './styles.css'

function App() {
  const [search, setSearch] = useState("");
  const [contacts, setContacts] = useState(data);

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const sortName = () => {
    const sortedContacts = [...contacts].sort((a, b) => {
      return a.first_name.toLowerCase() < b.first_name.toLowerCase() ? -1 : 1;
    });
    setContacts(sortedContacts);
  };

  return (
    <div>
      <Container>
        <h1 className='text-center mt-4'>Contact Keeper</h1>
        <Form>
          <InputGroup className='my-3'>
            <Form.Control
              onChange={handleSearchChange}
              placeholder='Search contacts'
            />
          </InputGroup>
        </Form>
        <Button variant='primary' onClick={sortName} className='mb-3'>
          Sort by First Name
        </Button>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            {contacts
              .filter((item) => {
                return search.toLowerCase() === ""
                  ? item
                  : item.first_name.toLowerCase().includes(search);
              })
              .map((item, index) => (
                <tr key={index}>
                  <td>{item.first_name}</td>
                  <td>{item.last_name}</td>
                  <td>{item.email}</td>
                  <td>{item.phone}</td>
                </tr>
              ))}
          </tbody>
        </Table>
      </Container>
    </div>
  );
}

export default App;

`;



// eslint-disable-next-line import/no-anonymous-default-export
export default solutionCode1;
