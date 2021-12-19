import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Card from '../Card/Card'

export default function Content() {
    return (
        <>
            <Container>
                <Row>
                    <Col md={12} lg={4}>
                        <Card
                            image="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/christmas-activity-ice-skating-party-1638820032.jpg?crop=1.00xw:0.668xh;0,0.103xh&resize=768:*"
                            title="Host an ice-skating social"
                            description="Gather your friends for some winter revelry. Embrace the cold weather and serve up some Hot Buttered Rum with Vanilla Ice Cream Balls and your favorite Christmas cookies for an ice-skating party. No snow? No problem. Throw on a scarf and make it a porch party."
                            button={true}
                        />
                    </Col>
                    <Col md={12} lg={4}>
                    <Card 
                    image="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/christmas-activities-garland-1576686987.jpg?crop=1xw:0.668xh;center,top&resize=768:*"
                    title="Make your own garland."
                    description="While you can certainly make your own strands of Christmas garland from faux pine or other greenery, why not step outside of the box this holiday season? There are tons of ideas for creative garlands, such as popcorn garland, dried fruit garland, or garland made out of mittens!"
                    button={true}
                    />
                    </Col>
                    <Col md={12} lg={4}>
                    <Card 
                    image="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/christmas-activities-snowman-1638819202.jpeg?crop=1xw:0.668xh;center,top&resize=768:*"
                    title="Build a snowman."
                    description="You don't need a lot of snow to sculpt a charming design with classic elements like a carrot nose and eyes made from coal or stones. If it isn't a white Christmas where you live, you can make an easy snowman craft or snowman ornament instead."
                    button={true}
                    />
                    </Col>
                </Row>
            </Container>
        </>
    )
}
