import React, {useState} from 'react';
import { Helmet } from 'react-helmet';

const Faq = () => {
    const [faqText] = useState('Faq page custom text');
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>I am from Faq</title>
                <link rel="canonical" href="http://localhost:3000/" />
                <meta name="description" content={faqText}/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
            </Helmet>
            <h1>{faqText}</h1>
        </div>
    )
}

export default Faq;