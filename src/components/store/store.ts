import { createStore } from '@stencil/store';

const { state } = createStore({
  todos: [],
});

export default state;
