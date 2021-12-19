import React, { Component } from 'react'
import { Card, Row, Col } from 'react-bootstrap';
import "./style.css";
import { ArrowRightCircleFill } from 'react-bootstrap-icons';
import {Link} from "react-router-dom";

export default class Christmas extends Component {

    constructor() {
        super();
        this.state = {
            loading: false,
            photo: []
        }
    }

    componentDidMount() {
        fetch('https://api.unsplash.com/search/photos?query=christmas&client_id=0kGzMmXHHdpvMTO7YyOB9hux-fR-_hqf4_kmRW5woMI')
            .then(response => response.json())
            .then(data => {
                this.setState({
                    loading: false,
                    photo: data.results
                })
            })
    }
    render() {
        return (
            <Card className="container">
                <Card.Header as="h5">Christmas photos</Card.Header>
                <Card.Body>
                    <Card.Title>Gallery</Card.Title>
                    <Card.Text>
                        <Row>
                        {this.state.photo[0] === undefined?"loading...":<Col sm={12} lg={3}><img src={this.state.photo[0].urls.thumb} alt="Christmas" width={'100%'} /></Col>}
                        {this.state.photo[1] === undefined?"loading...":<Col sm={12} lg={3}><img src={this.state.photo[1].urls.thumb} alt="Christmas" width={'100%'} /></Col>}
                        {this.state.photo[2] === undefined?"loading...":<Col sm={12} lg={3}><img src={this.state.photo[2].urls.thumb} alt="Christmas" width={'100%'} /></Col>}
                        {this.state.photo[3] === undefined?"loading...":<Col sm={12} lg={3}><img src={this.state.photo[3].urls.thumb} alt="Christmas" width={'100%'} /></Col>}
                        </Row>
                        
                        <br/>View more <Link to="/gallery"><ArrowRightCircleFill color='black' size={50} /></Link>
                    </Card.Text>
                </Card.Body>
            </Card>
        )
    }
}
