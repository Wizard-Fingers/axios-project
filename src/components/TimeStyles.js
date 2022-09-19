import styled from "styled-components";



export const Welcome = styled.div`
position: absolute;
text-align: center;
padding: 1rem;
top: 50%;
left: 50%;
--ms-transform: translate(-50%, -50%);
transform: translate(-50%, -50%);

`;

export const TimeStamp = styled.p`
font-size: 7rem;
font-weight: 600;
margin: 0;
padding: 0;
@media (max-width: 768px) {
    font-size: 5rem;
}`;

export const Greeting = styled.p`
font-size: 3rem;
font-weight: 600;
margin: 0;
padding: 0;
@media (max-width: 768px) {
    font-size: 2rem;
}`;
