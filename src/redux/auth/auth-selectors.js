const getIsLoggedIn = state => state.auth.isLoggedIn;
const getUserName = state => state.auth.name;
const getIsRefreshing = state => state.auth.isRefreshing;

const authSelectors = {
    getIsLoggedIn,
    getUserName,
    getIsRefreshing,
};
export default authSelectors;