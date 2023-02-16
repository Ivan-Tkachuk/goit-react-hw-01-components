import styled from '@emotion/styled';

export const StatisticsSection = styled.section`
  position: relative;
  left: 50%;
  transform: translate(-50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 300px;
  margin-bottom: 50px;
  padding: 0;
`;

export const Title = styled.h2`
  width: 300px;
  margin: 0px;
  padding: 20px 0;

  background-color: #fff;
  color: #5b5b5b;

  font-family: Tahoma, Verdana, Segoe, sans-serif;
  font-size: 18px;
  font-weight: 600;
  text-transform: uppercase;
  text-align: center;
`;

export const StatisticsList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;

  width: 300px;
  margin: 0px;
  padding: 0px;

  border-radius: 0px 0 5px 5px;
`;

export const StatisticsItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;

  width: 100%;
  margin: 0px;
  padding: 20px 5px;

  background-color: ${function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }};
`;

export const StatisticsLabel = styled.span`
  padding: 0;
  margin: 0;
  font-family: Tahoma, Verdana, Segoe, sans-serif;
  font-size: 14px;
  color: #fff;
`;

export const StatisticsPercentage = styled.span`
  padding: 0;
  margin: 0;
  font-family: Tahoma, Verdana, Segoe, sans-serif;
  font-size: 20px;
  color: #fff;
`;
