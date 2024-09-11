"use client";
import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import "bootstrap/dist/css/bootstrap.min.css";
import { salesItems } from "./data";

function Sales() {
  const [search, setSearch] = useState(""); 

  return (
    <section>
      <Container>
        <Form>
          <InputGroup className="my-3">
            <Form.Control
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search contacts"
              value={search}
            />
          </InputGroup>
        </Form>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Date</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Money</th>
            </tr>
          </thead>
          <tbody>
            {salesItems
              .filter((item) => {
                if (search.toLowerCase() === "") {
                  return true;
                }
                return item.firstname
                  .toLowerCase()
                  .includes(search.toLowerCase());
              })
              .map((item, index) => (
                <tr key={index}>
                  <td>{item.date}</td>
                  <td>{item.firstname}</td>
                  <td>{item.lastname}</td>
                  <td>{item.money}</td> 
                </tr>
              ))}
          </tbody>
        </Table>
      </Container>
    </section>
  );
}

export default Sales;
