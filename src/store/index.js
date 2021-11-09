import { createStore } from "vuex";

export default createStore({
  state: {
    nombre:'',
  },
  mutations: {
    guardarNombre(state, nuevo){
      state.nombre = nuevo
    }
  },
  actions: {},
  modules: {},
});
