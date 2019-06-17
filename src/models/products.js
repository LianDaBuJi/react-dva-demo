export default {
  namespace: 'products',
  state: [],
  reducers: {
    delete(state, { payload: id}) {
      return state.filter(item => item.id !== id);
    },
    add(state, { payload: value}) {
      return state.concat({
        id: state.length + 1,
        name: value
      });
    }
  }
}