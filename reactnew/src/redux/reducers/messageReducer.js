import { combineReducers } from 'redux'
import { postInputsReducer } from './postInputsReducer'
import { postsReducer } from './postsReducer'
// import { userReducer } from './userReducer'

export const rootReducer = combineReducers({
  posts: postsReducer,
  postInputs: postInputsReducer,
  // user: userReducer
})

const initialStore = {
    messages: {
      0: { text: 'Привет!', sender: 'bot' },
      1: { text: 'Здравствуйте!', sender: 'bot' },
    },
  };
  
  export default function chatReducer(store = initialStore, action) {
    switch (action.type) {
    case SEND_MESSAGE: {
      return update(store, {
        messages: { $merge: { [action.messageId]: { text: action.text, sender: action.sender } } },
      });
    }
  
    default:
      return store;
    }
  }
  