export const state = () => ({

  siteSample: process.env.VUE_APP_SAMPLE_ENV_VAR,
  defaultImage: '/static-images/defaults/no-category/no-category-tile.png',
  headerNav: [
    { text: 'Home', url: '/' },
    { text: 'Movies', url: '/movies' },
    {
      text: 'Bono',
      url: 'http://thomasbono.com',
      target: '_blank',
      external: true,
    },
  ],
})

// Getters read the current state of the store module and return something

export const getters = {
  siteSample(state) {
    return state.siteSample
  },
  defaultImage(state) {
    return state.defaultImage
  },
  headerNav(state) {
    return state.headerNav
  },
}

// Actions commit mutations and can contain arbitrary asynchronous operations

// export const actions = {
//   setNavigation({
//     commit,
//     state
//   }) {
//     this.$axios
//       .get(state.navigationAPI)
//       .then((response) => {
//         commit('setHeaderNav', response.data.primaryNavigation)
//         commit('setFooterNav', response.data.secondaryNavigation)
//         commit('setFooterSlogan', response.data.propertyDescription)
//         commit('setLegalNav', response.data.legalLinks)
//       })
//       .catch((error) => {
//         // eslint-disable-next-line no-console
//         console.log(error)
//       })
//   }
// }

// Mutations change the state of the store

export const mutations = {
  /* setHeaderNav(state, data) {
    state.headerNav = data
  }, */
}