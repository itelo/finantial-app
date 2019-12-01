import React from 'react';
import styled from 'styled-components';

const Layout = styled.div`
  background-color: #f1f2f2;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  height: 100%;
  width: 100vw;
  padding: 24px 24px;
  overflow-x: hidden;
`;

type LoginProps =  {
  children: React.ReactNode;
}

export const AuthLayout = (props: LoginProps) => {
  return (
    <Layout>{props.children}</Layout>
  )
};
