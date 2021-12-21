import React from 'react'
import { Card, Button } from "react-bootstrap"
import Logo from "../image/load.gif"

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
                    this.quote()
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
                            <center>
                            {this.state.loading ? <img src={Logo} height={100} width={100} alt="loading..." /> : this.state.punch+" "+ this.state.delivery}
                            </center>
                        </Card.Text>
                        <Button variant="warning" onClick={this.quote}>Smile</Button>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}
