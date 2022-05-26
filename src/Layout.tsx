import { Container } from '@mui/system';
import { ReactNode } from 'react';
import AppBar from './AppBar';

const Layout = ({
  children,
  mounted,
}: {
  children: ReactNode;
  mounted: boolean;
}) => {
  return (
    <div
      style={{
        display: mounted ? 'block' : 'none',
      }}
    >
      <AppBar />
      <Container maxWidth="xl">{children}</Container>
    </div>
  );
};

export default Layout;
