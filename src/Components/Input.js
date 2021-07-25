import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";

const Input = () => {

    const [input, setInput] = useState('')
    const addTodo= () => {
 
    }

  return (
    <div className="m-5">
      <Form>
        <Row>
          <Col>
            <Form.Control placeholder="Note " value={input} onChange={e=>setInput(e.target.value)}/>
          </Col>
          <Col>
            <Button variant="primary" className="" onClick={addTodo}>
            Add!</Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
};
export default Input;
