import React from 'react';
import { Helmet } from 'react-helmet';

const Faq = () => {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>I am from Faq</title>
                <link rel="canonical" href="http://localhost:3000/" />
                <meta name="description" content="Your bones don't break, mine do. That's clear. 
                Your cells react to bacteria and viruses differently than mine. You don't get sick, I do. 
                That's also clear. But for some reason, you and I react the exact same way to water. 
                We swallow it too fast, we choke. We get some in our lungs, we drown. However unreal it may seem, we are connected, you and I. 
                We're on the same curve, just on opposite ends." />
                <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
            </Helmet>
            <h1>Faq comp</h1>
        </div>
    )
}

export default Faq;