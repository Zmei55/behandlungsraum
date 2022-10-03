import { Routes, Route } from 'react-router-dom';
import { Container } from 'components/Container';
import { Layout } from 'components/Layout';
import { LoginView } from 'components/views';

export function App() {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<LoginView />} />
        </Route>
      </Routes>
    </Container>
  );
}
