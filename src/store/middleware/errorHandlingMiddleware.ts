import { isRejectedWithValue, Middleware } from '@reduxjs/toolkit';

const errorHandlingMiddleware: Middleware = () => (next: (action: any) => any) => (action: any) => {
  if (isRejectedWithValue(action)) {
    // Log the error to the console
    // If you want to use a notification controller or similar to show a toast, you can do so here
    // toastController.error({ message: action.payload as string });
  }
  return next(action);
};

export default errorHandlingMiddleware;
