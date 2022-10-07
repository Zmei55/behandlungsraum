import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Container } from 'components/Container';
import { Layout } from 'components/Layout';
import { AuthView, DesktopView } from 'components/views';
import { LoginForm } from 'components/LoginForm';
import { StaffUnit } from 'components/StaffUnit';

export function App() {
  const [formState, setFormState] = useState({
    login: '',
    password: '',
    station: '',
  });

  return (
    <Container>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route element={<AuthView />}>
            <Route
              index
              element={
                <LoginForm formState={formState} setFormState={setFormState} />
              }
            />
            <Route
              path="station"
              element={
                <StaffUnit formState={formState} setFormState={setFormState} />
              }
            />
          </Route>
          <Route path="desktop" element={<DesktopView />} />
        </Route>
      </Routes>
    </Container>
  );
}
