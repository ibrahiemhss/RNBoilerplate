export const appInit = (state: any) => ({
  type: 'APP_INIT',
  payload: state,
});

export const rehydrateState = (state: any) => ({
  type: 'REHYDRATE_STATE',
  payload: state,
});
