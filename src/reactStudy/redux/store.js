// create reducer 
function reducer(state, action) {
  if(!state) {
    return {
      themeColor: 'red'
    }
  }
  switch (action.type) {
    case 'CHANGE_COLOR':
      return { ...state, themeColor: action.themeColor}
    default:
      return state
  }
}

// create store 
function createStore(reducer) {
  let state = null;
  let listeners = [];

  const getState = () => state;

  const subscribe = (listener) => listeners.push(listener);

  const dispatch = (action) => {
    state = reducer(state, action)
    listeners.forEach(listener => listener())
  }

  // init state 
  dispatch({})

  return { getState, subscribe, dispatch }
}


const store = createStore(reducer)


export {
  store
}
