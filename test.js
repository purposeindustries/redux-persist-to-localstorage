const assert = require('assert');
const redux = require('redux');
const persist = require('./');

global.localStorage = {
  _storage: {},
  getItem: key => localStorage._storage[key],
  setItem: (key, value) => localStorage._storage[key] = value,
};

describe('redux-persist-to-localstorage', () => {
  it('should persists the state', () => {
    const enhancer = persist('foo', state => state, (state, object) => object);
    const store = redux.createStore((state = 0, action) => state + +(action.type == 'inc'), 0, enhancer);
    store.dispatch({type: 'inc'});
    store.dispatch({type: 'inc'});
    assert.equal(store.getState(), 2);
    const anotherStore = redux.createStore((state = 0, action) => state + +(action.type == 'inc'), 0, enhancer);
    assert.equal(anotherStore.getState(), store.getState());
  });
});
