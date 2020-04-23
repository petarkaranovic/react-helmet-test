import React from 'react';
import { Helmet } from 'react-helmet';

const Home = () => {
    return (
        <div>
            <Helmet>
                <meta charSet="UTF-8" />
                <title>I am from Home</title>
                <link rel="canonical" href="http://localhost:3000/" />
                <meta name="description" content="Now that we know who you are, I know who I am. I'm not a mistake! 
                It all makes sense! In a comic, you know how you can tell who the arch-villain's going to be? He's the exact opposite of the hero. 
                And most times they're friends, like you and me! I should've known way back when... You know why, David? Because of the kids. 
                They called me Mr Glass." />
                <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
            </Helmet>

            <h1>I am from home comp!</h1>
        </div>
    )
}

export default Home;