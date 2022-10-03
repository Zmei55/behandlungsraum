import { Outlet } from 'react-router-dom';
import { WorkingPlace } from 'components/WorkingPlace';
import { UserMenu } from 'components/UserMenu';
import { Header, Button } from './Layout.styled';

export function Layout() {
  return (
    <>
      <Header>
        <WorkingPlace />
        {/* <UserMenu /> */}
        <Button type="button">Menu</Button>
      </Header>
      <Outlet />
    </>
  );
}
