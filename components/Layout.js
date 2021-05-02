import React from 'react';
import styled from 'styled-components';

const Layout = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

const Wrapper = styled.div`
  text-align: center;
`;

export default Layout;
