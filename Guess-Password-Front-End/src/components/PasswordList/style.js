import styled from 'styled-components';

const Progress = styled.div`
  margin-top: 20px;
  color: yellow;
`;
const History = styled.ul`
  display: flex;
  border: 1px solid #fff;
  border-radius: 4px;
  min-height: 50px;
  padding: 15px;
  margin: 0;
  list-style: none;
  color: black;
  font-size: 22px;
  overflow: -webkit-paged-x;
`;


export {
  Progress,
  History
}