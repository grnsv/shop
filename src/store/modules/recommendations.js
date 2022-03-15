import axios from 'axios';

export default {
  state: () => ({
    recommendations: [],
  }),
  getters: {
    recommendations(state) {
      return state.recommendations;
    },
  },
  mutations: {
    SET_RECOMMEND_LIST(state, recommendations) {
      state.recommendations = recommendations;
    },
  },
  actions: {
    async getRecommendList({ commit }) {
      try {
        const response = await axios.get('http://localhost:5555/api/recommendations');
        commit('SET_RECOMMEND_LIST', response.data);
      } catch (e) {
        console.log(e);
      }
    },
  },
};
