import React from 'react';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useAuth } from '../hooks';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';
import { HomeView } from 'views/HomeView';
import { RegisterView } from 'views/RegisterView';
import { LoginView } from 'views/LogInView';
import { UserContactsView } from 'views/UserContactsView';
import { refreshUser } from 'redux/auth/operations';

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomeView />} />
        <Route
          path="register"
          element={<RestrictedRoute component={<RegisterView />} />}
        />
        <Route
          path="login"
          element={<RestrictedRoute component={<LoginView />} />}
        />
        <Route
          path="contacts"
          element={
            <PrivateRoute
              redirectTo="/login"
              component={<UserContactsView />}
            />
          }
        />
      </Route>
    </Routes>
  );
};
