import { createStore } from 'vuex'

export default createStore({
  state: {
    registers:[]
  },
  mutations: {
    setRegisters(state, registers){
      state.registers = registers
    }
  },
  actions: {
    async fetchData({commit}) {
      try {
        const res = await fetch('http://localhost:8083/public/listAll')
        const registers = await res.json()
        commit('setRegisters', registers)
      } catch (error) {
        console.log(error)
      }
    }
  },
  modules: {
  }
})
