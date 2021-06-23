/* eslint-disable import/prefer-default-export */
import { getInstance } from './index';

export const authGuard = (to, from, next) => {
  const authService = getInstance();

  const fn = () => {
    // if the user is authenticated, continue with the route
    if (authService.isAuthenticated) {
      return next();
    }

    // otherwise log in
    authService.loginWithRedirect({ appState: { targetUrl: to.fullPath } });
  };

  // if loading has already finished, check our auth state using 'fn()'
  if (!authService.loading) {
    return fn();
  }

  // watch for the loading property to change before we check isAuthenticated
  authService.$watch('loading', (loading) => {
    if (loading === false) {
      return fn();
    }
  });
};
