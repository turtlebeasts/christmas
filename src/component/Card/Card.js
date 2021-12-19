import React from 'react'
import "bootstrap/dist/css/bootstrap.css";
import { Button, Card } from "react-bootstrap";

export default function Cards(props) {
    return (
        <div style={{marginTop: "2%"}}>
            <Card>
                <Card.Img variant="top" src={props.image} />
                <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Text>
                        {props.description}
                    </Card.Text>
                    {props.button?<Button variant="primary">Read more</Button>:""}
                </Card.Body>
            </Card>
        </div>
    )
}
