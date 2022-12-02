import { createStore } from "vuex";

export default createStore({
  state: {
    user: null,
    saltKey : "booklike123!456"
  },
  getters: {
    _isAuthenticated: (state) => state.user !== null,
    _getCurrentUser(state) {
      const user = state.user;
      delete user?.password;
      return user;
    },
    _saltkey : state => state.saltKey
  },
});
