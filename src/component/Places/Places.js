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
                            image="https://media.easemytrip.com/media/Blog/International/637084787108695050/637084787108695050xjvkWW.jpg"
                            title="Bethlehem, West Bank"
                            description="With the hectic schedule of your life, you have forgotten the real meaning of Christmas. To go for Christmas family vacation, visit Bethlehem as the celebration of this festival can’t be more striking than the birthplace of Jesus. It is one of the best places to spend Christmas holidays. The mere thought of Christmas celebration on Manger Square and in the Old City can fill the visitors with a heavenly dynamism. The festival of Christmas becomes more incredible when you celebrate it at St. Catheroine’s Church’s midnight mass of Bethlehem."
                            button={false}
                        />
                    </Col>
                    <Col md={12} lg={4}>
                    <Card 
                    image="https://media.easemytrip.com/media/Blog/International/637084787108695050/6370847871086950505x0kan.jpg"
                    title="Lapland, Finland"
                    description="If you love seeing Santa everywhere on this lovely occasion, the Arctic Circle of Finland is a place to go. The joyful man in his red and white attire is the most admired resident of this city. You can follow him in reindeer-dotted forests and observe his elves preparing the toys. The city creates a fantastic world and if you love to celebrate a white Christmas, it is the perfect place to go. Being one of the topmost Christmas destinations, Lapland features an amazing ‘Santa Park’ that can be your fun place."
                    button={false}
                    />
                    </Col>
                    <Col md={12} lg={4}>
                    <Card 
                    image="https://media.easemytrip.com/media/Blog/International/637084787108695050/637084787108695050ezFUBd.jpg"
                    title="New York City, USA"
                    description="Christmas plays really important role in the Empire State as a number of films have already revealed it. With Christmas lights, tasteless muzak, light dusting of snow, the city turns into a destination celebrating one of the best Christmas of the world. Visitors are awed with the tallest Christmas tree of the world at the Rockefeller Center and ice skate beneath it. There is an excellent shop window displaying things in most desired way."
                    button={false}
                    />
                    </Col>
                </Row>
            </Container>
        </>
    )
}
