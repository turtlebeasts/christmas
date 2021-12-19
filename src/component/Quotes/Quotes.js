import React from 'react'
import { Card, Button } from "react-bootstrap"

export default class Quotes extends React.Component {
    constructor() {
        super();
        this.state = {
            punch: "",
            delivery: "",
            loading: false
        }
    }
    quote = () => {
        this.setState({
            loading: true
        })
        fetch('https://v2.jokeapi.dev/joke/Any')
            .then(response => response.json())
            .then(data => {
                if(data.error){
                    this.setState({
                        loading: false,
                        punch: "Got an error instead of jokes from the Api",
                        delivery: ""
                    })
                }else if(data.setup === undefined){
                    this.setState({
                        loading: false,
                        punch: "Got an error instead of jokes from the Api",
                        delivery: ""
                    })
                }else{
                    this.setState({
                        punch: data.setup,
                        delivery: data.delivery,
                        loading: false
                    })
                }
            })
    }
    render() {
        return (
            <div className='container'>
                <Card>
                    <Card.Header>Joke Section</Card.Header>
                    <Card.Body>
                        <Card.Title>Put a smile on your face.</Card.Title>
                        <Card.Text>
                            {this.state.loading ? "Loading..." : this.state.punch+" "+ this.state.delivery}
                        </Card.Text>
                        <Button variant="warning" onClick={this.quote}>Smile</Button>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}
