import React from 'react';
import styled from 'styled-components';
import Header from '../Header'

const Tracks = () => {

    const Track = styled.h1`
        margin-top: 10%;
        text-align: center;
    `

  return (
    <>
    <Header/>
    <Track>Tracks</Track>
    </>
  )
}

export default Tracks