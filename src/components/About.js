import React, { useState } from 'react';
import { Helmet } from 'react-helmet';

const About = () => {
    const [aboutText] = useState(`Morbi nec augue nisi. Sed dolor diam, consectetur ut consequat vel, facilisis vel mi. Vestibulum 
    ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse nec urna id nulla aliquet tristique. 
    Morbi mattis felis in dignissim volutpat. Fusce varius varius libero egestas porta. Aliquam eu tincidunt ante. Duis scelerisque elementum nisi, 
    non dignissim velit lacinia eu. Duis elit elit, condimentum eget purus eu, egestas consectetur leo. Sed sit amet neque et velit rutrum porttitor. 
    In non rhoncus sem. Cras non orci eros. Pellentesque non diam commodo, tincidunt dui quis, vestibulum dui. Proin aliquet posuere tempus`);
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>I am from About</title>
                <link rel="canonical" href="http://localhost:3000/about" />
                <meta name="description" content={aboutText.slice(0,100)} />
                <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
            </Helmet>
            <h1>{aboutText}</h1>
        </div>
    )
}

export default About;