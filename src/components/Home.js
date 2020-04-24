import React, { useState } from 'react';
import { Helmet } from 'react-helmet';

const Home = () => {
    const [homeText] = useState('Now that we know who you are, I know who I am. Im not a mistake! It all makes sense! In a comic, you know how you can tell who the arch-villains going to be? Hes the exact opposite of the hero. And most times theyre friends, like you and me! I shouldve known way back when... You know why, David? Because of the kids. They called me Mr Glass.')
    return (
        <div>
            <Helmet>
                <meta charSet="UTF-8" />
                <title>I am from Home</title>
                <link rel="canonical" href="http://localhost:3000/" />
                <meta name="description" content={homeText.slice(0, 100)} />
                <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
            </Helmet>
            <h1>{homeText}</h1>
        </div>
    )
}

export default Home;