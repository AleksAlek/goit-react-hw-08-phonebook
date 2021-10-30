export const getFilter = state => state.globalStore.filter;

export const getUserName = state => state.authStore.user.name;

export const getUserEmail = state => state.authStore.user.email;

export const getIsLogged = state => state.authStore.isLoggedIn;
