import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  header {
    height: 144px;
    background-color: #28262e;

    display: flex;
    align-items: center;

    div {
      width: 100%;
      max-width: 1120px;
      margin: 0 auto;

      svg {
        color: #909591;
        width: 25px;
        height: 25px;
      }
    }
  }
`;

export const Content = styled.div`
  width: 100%;
  margin: -176px 0 auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  form {
    margin: 80px 0;
    width: 340px;
    text-align: center;
    display: flex;
    flex-direction: column;

    h1 {
      margin-bottom: 20px;
      text-align: left;
    }

    a {
      color: #f4ede8;
      display: block;
      margin-top: 24px;
      text-decoration: none;
      transition: color 0.2s;

      &:hover {
        color: ${shade(0.2, '#f4ede8')};
      }
    }
  }
`;

export const AvatarInput = styled.div`
  margin-bottom: 32px;
  position: relative;
  align-self: center;

  label {
    width: 48px;
    height: 48px;
    background: #ff9000;
    border-radius: 50%;
    position: absolute;
    right: 0;
    bottom: 0;
    border: 0;
    transition: background 0.2s;

    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    > input {
      display: none;
    }

    svg {
      width: 20px;
      height: 20px;
    }

    &:hover {
      background: ${shade(0.2, '#FF9000')};
    }
  }

  img {
    width: 186px;
    height: 186px;
    border-radius: 50%;
  }
`;
