import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from 'components/Layout';
import {
  AuthView,
  DesktopView,
  CreateRequestView,
  PatientView,
} from 'components/views';
import { LoginForm } from 'components/LoginForm';
import { StaffUnit } from 'components/StaffUnit';
import { Container } from './App.styled';

export function App() {
  const [loginFormState, setLoginFormState] = useState({
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
                <LoginForm
                  loginFormState={loginFormState}
                  setLoginFormState={setLoginFormState}
                />
              }
            />
            <Route
              path="station"
              element={
                <StaffUnit
                  loginFormState={loginFormState}
                  setLoginFormState={setLoginFormState}
                />
              }
            />
          </Route>
          <Route path="desktop" element={<DesktopView />} />
          <Route path="create-request" element={<CreateRequestView />} />
        </Route>
      </Routes>
    </Container>
  );
}
