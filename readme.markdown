# redux-persist-to-localstorage [![travis-badge]][travis]

> A dead-simple redux store enhancer for adding `localStorage` persistance

## install

install the [package] with [`npm`][npm]:

```sh
$ npm install redux-persist-to-localstorage
```

## usage

```js
import persist from 'redux-persist-to-localstorage';
import {createStore} from 'redux';

const select = state => state.some.path.to.your.state;
const receive = (state, obj) => ({ ...state, ...obj });

const store = createStore(
  reducer,
  initialState,
  persist('some-key', select, receive)
);
```

## api

### `persist(key, select, receive)`

creates a store enhancer that automatically persists whatever `select` returns.
the persisted object will be stored using `JSON.stringify` under `key`.
the object will be restored with `JSON.parse` and you can use `receive` to merge it with the (initial) state.

## license

MIT License

Copyright (c) 2017 Bence Dányi

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

[package]: https://npmjs.com/package/redux-persist-to-localstorage
[npm]: https://npmjs.com
[travis]: https://travis-ci.org/purposeindustries/redux-persist-to-localstorage
[travis-badge]: https://travis-ci.org/purposeindustries/redux-persist-to-localstorage.svg?branch=master
