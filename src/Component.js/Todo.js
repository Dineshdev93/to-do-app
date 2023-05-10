import React from "react";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useState } from "react";
export default function Todo() {
  const [title, setTitle] = useState("");
  const [task1, setTask1] = useState("");
  const [task2, setTask2] = useState("");

  const data = { title, task1, task2 }; // for stringfy
  function saveData() {
    fetch("http://localhost:3000/To-do", {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((result) => {
      console.log(result);
      result.json().then((res) => {
        console.log(res);
      });
    });
  }
  return (
    <div>
      <div className="head">
        <h2>My To-do-list</h2>
        <h5>Make Your List</h5>
      </div>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Task-1</Form.Label>
          <Form.Control
            type="text"
            name="mar"
            value={task1}
            onChange={(e) => setTask1(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Task-2</Form.Label>
          <Form.Control
            type="text"
            name="sch"
            value={task2}
            onChange={(e) => setTask2(e.target.value)}
          />
        </Form.Group>

        <Button
          variant="primary"
          className="submit"
          onClick={() => saveData()}
        >
          Save
        </Button>
      </Form>
    </div>
  );
}
