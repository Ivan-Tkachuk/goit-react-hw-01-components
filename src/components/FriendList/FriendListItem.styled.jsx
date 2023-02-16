import styled from '@emotion/styled';

export const FriendItem = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  gap: 10px;

  width: 300px;
  padding: 5px 0px;
  margin-bottom: 10px;

  background-color: #fff;

  border-radius: 5px;
  box-shadow: 0px 3px 3px 0px rgba(209, 209, 209, 1),
    0px 3px 3px 0px rgba(209, 209, 209, 1),
    0px 3px 3px 0px rgba(209, 209, 209, 1);
`;

export const FriendAvatar = styled.img`
  border-radius: 5px;
  height: 48px;
`;

export const FriendName = styled.p`
  padding: 0;
  margin: 0;
  font-family: Tahoma, Verdana, Segoe, sans-serif;
  font-size: 22px;
`;

export const OnlineStatus = styled.span`
  display: block;
  width: 15px;
  height: 15px;
  margin-left: 10px;
  border-radius: 50%;

  background-color: ${props => {
    switch (props.isOnlineStatus) {
      case true:
        return 'green';
      case false:
        return 'red';
      default:
        return 'grey';
    }
  }};
`;
