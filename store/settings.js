export const state = () => ({
  theme: {
    dark: true,
  },
})

export const mutations = {
  switchTheme(state) {
    state.theme.dark = !state.theme.dark
  },
}
