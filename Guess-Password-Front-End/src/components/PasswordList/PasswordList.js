import React from 'react';
import styled from 'styled-components';
import { Typography } from '@smooth-ui/core-sc';
import * as Styled from './style';

const PasswordList = ({lists}) => {
  const view = lists.map((list, key) => {
    const data = list.data;
    const higlighted = list.highlight;
    const isCorrect = list.isCorrect;
      return (
        <Styled.Progress key={key}>
          <Typography variant="h2" textAlign="center" >
            Attempt #{key + 1}
          </Typography>
          <Typography variant="h6" textAlign="right" color={isCorrect ? 'green': 'red'}>
            {isCorrect ? 'Right Answer': 'Wrong Answer'}
          </Typography>
          <Styled.History>
              {data.map((value, index) => {
                const highlight = higlighted.includes(value);

                const Lists = styled.li`
                  display: flex;
                  border: 1px solid #fff;
                  border-radius: 4px;
                  padding: 10px;
                  background:  ${highlight ? "#0ac2d0" : "transparent"};
                  margin: 3px;
                  list-style: none;
                  color: white;
                  font-size: 22px;
                  overflow: -webkit-paged-x;
                `;

                return <Lists key={index}>{value}</Lists>
              })}
          </Styled.History>
        </Styled.Progress>
      )
    });

  return view;
};

export default PasswordList;