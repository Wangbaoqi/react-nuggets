// 创建节点
function appendRoot() {
  let root = document.getElementById('root')
  let nodeTitle = document.createElement('div')
  let nodeContent = document.createElement('div')

  nodeTitle.id = 'title'
  nodeContent.id = 'content'


  root.appendChild(nodeTitle)
  root.appendChild(nodeContent)
}



function renderTitle(newTitle, oldTitle = {} ) {

  if(oldTitle === newTitle) return
  console.log('renderTitle');

  let titleDom = document.getElementById('title')

  titleDom.innerHTML = newTitle.text
  titleDom.style.color = newTitle.color
}

function renderContent(newContent, oldContent = {} ) {

  if(oldContent === newContent) return
  console.log('renderContent');


  let contentDom = document.getElementById('content')

  contentDom.innerHTML = newContent.text
  contentDom.style.color = newContent.color
}


const appState = {
  title: {
    text: 'React.js 小书',
    color: 'red',
  },
  content: {
    text: 'React.js 小书内容',
    color: 'blue'
  }
}


// 修改数据必须经过 dispatch function
function stateChange(state, action) {
  switch (action.type) {
    case 'UPDATE_TITLE_TEXT':
      return {
        ...state,
        title: {
          ...state.title,
          text: action.text
        }
      }
    case 'UPDATE_TITLE_COLOR':
      return {
        ...state,
        title: {
          ...state.title,
          color: action.color
        }
      }
    default:
      return false;
  }
}


// 收集state 统一修改state
function createStore(reducer) {
  let listeners = [];
  let state = null;
  const subscribe = (listener) => {listeners.push(listener)}
  const getState = () => state;
  const dispatch = (action) => {

    // state = stateChange(state, action);

    state = reducer(state, action);
    listeners.forEach(listener => listener())
  }
  // init appState 
  dispatch({})
  
  return { getState, dispatch, subscribe }
}


// pure function 只能初始化state 和 计算新的state   不能修改数据 不能ajax 不能操作DOM 
function reducer(state, action) {
  if(!state) {
    return {
      title: {
        text: 'React.js 小书',
        color: 'red',
      },
      content: {
        text: 'React.js 小书内容',
        color: 'blue'
      }
    }
  }
  switch (action.type) {
    case 'UPDATE_TITLE_TEXT':
      return {
        ...state,
        title: {
          ...state.title,
          text: action.text
        }
      }
    case 'UPDATE_TITLE_COLOR':
      return {
        ...state,
        title: {
          ...state.title,
          color: action.color
        }
      }
    default:
      return false;
  }
}


function renderApp(newState, oldState = {} ) {
  if(oldState === newState) return;
  console.log('renderApp');

  renderTitle(newState.title, oldState.title )
  renderContent(newState.content, oldState.content )
}


function render() {
  const store = createStore(reducer)

  let oldState = store.getState()

  store.subscribe(() => {
    const newState = store.getState()
    renderApp(newState, oldState)
    oldState = newState
  })
  // 修改数据必须调用 dispatch 
  // dispatch({ type: 'UPDATE_TITLE_COLOR', color: 'green' })


  // 首次渲染
  renderApp(store.getState())

  // question 数据变化的时候 每次调用store.dispatch? no => 数据监听 
  store.dispatch({ type: 'UPDATE_TITLE_TEXT', text: 'this is title changed' })
  store.dispatch({ type: 'UPDATE_TITLE_COLOR', color: 'green' })


  // renderApp(store.getState())


}


export {
  appendRoot,
  render
}