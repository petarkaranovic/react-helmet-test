import React from 'react';
import { Helmet } from 'react-helmet';

const About = () => {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>I am from About</title>
                <link rel="canonical" href="http://localhost:3000/about" />
                <meta name="description" content="This is a react-helmet demo app and we are currently in About page" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
            </Helmet>
            <h1>Hey I am from about page, inspect me</h1>
        </div>
    )
}

export default About;