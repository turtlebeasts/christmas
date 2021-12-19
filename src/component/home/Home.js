import React from 'react'
import Banner from '../Banner/Banner'
import Content from '../content/Content'
import CarouselDisplay from './carousel/CarouselDisplay'
import Places from "../Places/Places"
import Quotes from '../Quotes/Quotes'
import Christmas from '../Christmas/Christmas'

export default function Home() {
    return (
        <div>
            <CarouselDisplay />
            <Banner text="Activities" />
            <Content />
            <Banner text="Places" />
            <Places />
            <Banner text="Jokes" />
            <Quotes />
            <Banner text="Get Christmas photos" />
            <Christmas />
        </div>
    )
}
