module.exports = (key, select, receive) => createStore => (reducer, initialState, enhancer) => {
  let store;

  try {
    const item = localStorage.getItem(key);
    if (!item) {
      store = createStore(reducer, receive(initialState, undefined), enhancer);
    } else {
      store = createStore(reducer, receive(initialState, JSON.parse(item)), enhancer);
    }
  } catch (err) {
    console.error(err);
  }

  store.subscribe(() => {
    try {
      localStorage.setItem(key, JSON.stringify(select(store.getState())));
    } catch (err) {
      console.error(err);
    }
  });

  return store;
};
