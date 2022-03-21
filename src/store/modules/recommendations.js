import axios from 'axios';

axios.defaults.baseURL = `${window.location.protocol}//${window.location.hostname}:${process.env.VUE_APP_SERVER_PORT || 5555}`;

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
        const response = await axios.get('/api/recommendations');
        commit('SET_RECOMMEND_LIST', response.data);
      } catch (e) {
        console.log(e);
      }
    },
  },
};
