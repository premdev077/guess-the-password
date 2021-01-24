import styled from 'styled-components';

const LandmarkContainer = styled.div`
  max-width: 380px;
  margin: 0 auto;
  padding:15px;
  border: 1px solid white
`;

const FooterContainer = styled.div`
  min-width: 412px;
  margin: 0 auto;
  display: inline-flex;
`;

const ListItem = styled.li`
  color: #fff;
  background-color: ${props => props.color};
  margin-right: 8px;
  padding: 2px;
  border-radius: 4px;
`;

export {
  LandmarkContainer,
  FooterContainer,
  ListItem
};