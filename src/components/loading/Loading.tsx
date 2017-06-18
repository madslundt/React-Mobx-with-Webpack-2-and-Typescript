import * as React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(255,255,255,.8);
    color: #000;
    transition: .5s ease-in-out all;
`;

const Loading = () => (
    <Container>
        Loading
    </Container>
);

export default Loading;