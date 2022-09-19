import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { QuoteContainer, Text } from './QuoteStyles';

const url = "https://goquotes-api.herokuapp.com/api/v1/random?count=1";

const Quote = () => {
    const [data, setData] = useState(null);
    
    useEffect(() => {
        axios.get(url)
        .then(res => {
            setData(res.data);
        }).catch(err => {
            console.log(err);
        })
    }, []);
    console.log(data);

    if (!data) {
        return null
    }

  return (
      <QuoteContainer>
          <Text>{data.quotes[0].text}</Text>
          <Text>--{data.quotes[0].author }</Text>
      </QuoteContainer>
  )
}
export default Quote