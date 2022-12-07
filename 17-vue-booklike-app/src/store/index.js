import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";

import SecureLS from "secure-ls";
var ls = new SecureLS({ isCompression: false });

export default createStore({
  state: {
    user: null,
    saltKey: "booklike123!456",
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
  },
  getters: {
    _isAuthenticated: (state) => state.user !== null,
    _getCurrentUser(state) {
      const user = state.user;
      /* şifresiz olarak user'i return etmiş olduk.
      user:null, bir obje olmadigi için içerisinde password yok.
      Bundan dolayı problem cikariyor. Bunu optional chaning yöntemiyle 
      çözebiliriz. user'in içerisinde password diye bir arkadas varsa bunu sil.

      uzun yol :

      if( user !== null && user.hasOwnProperty("password")){
        delete user.password;
      }
      */
      delete user?.password;
      return user;
    },
    _saltkey: (state) => state.saltKey,
  },
  plugins: [createPersistedState({
    storage: {
      getItem: (key) => ls.get(key),
      setItem: (key, value) => ls.set(key, value),
      removeItem: (key) => ls.remove(key),
    },
  }),],
});
