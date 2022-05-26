import { Container } from '@mui/system';
import { ReactNode } from 'react';
import AppBar from './AppBar';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <AppBar />
      <Container maxWidth="xl">{children}</Container>
    </>
  );
};

export default Layout;
