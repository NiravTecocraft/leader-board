import React from 'react';
import {
  LeaderBoardMain,
  Container,
  Grid,
  LeftSide,
  RightSide,
  Number,
  Avatar,
  Name,
  PointWrapper,
  Normal,
  Second,
  Third,
} from '../styles';

const LeaderBoard = (props: any) => {
  const { data } = props;
  const UserWin = (index: any) => {
    switch (index) {
      case 1:
        return <Number> {index} </Number>;
      case 2:
        return <Second>{index} </Second>;
      case 3:
        return <Third>{index} </Third>;
      default:
        return <Normal> {index}</Normal>;
    }
  };
  return (
    <>
      <Container>
        <LeaderBoardMain>
          {data?.map((item: any, index: number) => {
            return (
              <Grid>
                <LeftSide>
                  {UserWin(index + 1)}
                  <Avatar></Avatar>
                  <Name>
                    <h3>{item.displayName}</h3>
                  </Name>
                </LeftSide>
                <RightSide>
                  <PointWrapper>
                    <p>{item.score}</p>
                  </PointWrapper>
                </RightSide>
              </Grid>
            );
          })}
        </LeaderBoardMain>
      </Container>
    </>
  );
};

export default LeaderBoard;
