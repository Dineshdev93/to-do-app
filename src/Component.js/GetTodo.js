import React from "react";
import Table from "react-bootstrap/Table";
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
export default function GetTodo() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getapi();
  }, [data]);

  function getapi() {
    fetch("http://localhost:3000/To-do").then((result) => {
      result.json().then((resp) => {
        setData(resp);
        // console.warn(resp);
      });
    });
  }
  function deleted(id) {
    fetch(`http://localhost:3000/To-do/${id}`, {
      method: "Delete",
      headers: {
        Accept: "application/json",
        "content-type": "application.json",
      },
    }).then((result) => {
      result.json().then((response) => {
        getapi();
      });
    });
  }
  return (
    <div>
      <Table striped bordered hover size="sm" >
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Task 1</th>
            <th>Task 2</th>
            <th>Operation</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, i) => (
            <tr key={i}>
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>{item.task1}</td>
              <td>{item.task2}</td>
              <td>
                <Button variant="danger" onClick={() => deleted(item.id)}>
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
