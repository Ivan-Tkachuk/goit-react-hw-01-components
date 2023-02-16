import styled from '@emotion/styled';

export const ProfileContainer = styled.div`
  position: relative;
  left: 50%;
  transform: translate(-50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 300px;
  margin-top: 10px;
  margin-bottom: 50px;
  padding: 0;

  border-radius: 5px 5px 0 0;

  box-shadow: 0px 3px 10px 3px rgba(209, 209, 209, 1),
    0px 3px 10px 3px rgba(209, 209, 209, 1),
    0px 3px 10px 3px rgba(209, 209, 209, 1);
`;

export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;

  width: 300px;
  padding: 30px 0;
  margin: 0;

  background-color: #fff;

  border-radius: 5px 5px 0 0;
`;

export const Avatar = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-bottom: 20px;
`;

export const Username = styled.p`
  padding: 0;
  margin: 0;

  font-family: Tahoma, Verdana, Segoe, sans-serif;
  font-size: 18px;
  font-weight: 600;
`;

export const Tag = styled.p`
  padding: 0;
  margin: 0;
  font-family: Tahoma, Verdana, Segoe, sans-serif;
  color: #c1c1c1;
`;

export const Location = styled.p`
  padding: 0;
  margin: 0;
  font-family: Tahoma, Verdana, Segoe, sans-serif;
  color: #c1c1c1;
`;

export const StatsList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;

  width: 300px;
  margin: 0px;
  padding: 0px;

  background-color: #f3fafe;

  border-top: 1px solid #e8f0f4;
  border-radius: 0px 0 5px 5px;
`;

export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;

  width: 100%;
  margin: 0px;
  padding: 20px 5px;

  &:not(:last-child) {
    border-right: 1px solid #e8f0f4;
  }
`;

export const StatsLabel = styled.span`
  padding: 0;
  margin: 0;
  font-family: Tahoma, Verdana, Segoe, sans-serif;
  color: #c1c1c1;
`;

export const StatsQuantity = styled.span`
  padding: 0;
  margin: 0;
  font-family: Tahoma, Verdana, Segoe, sans-serif;
  font-size: 18px;
  font-weight: 600;
`;
