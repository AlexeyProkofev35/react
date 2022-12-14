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
  chats: [
    {
      title: 'Максим Максимов',
      messageList: [0],
      unreadMessage: false,
    },
    {
      title: 'Петя Петров',
      messageList: [1],
      unreadMessage: false,
    },
  ],
};

export default (store = initialStore, action) => {
  switch (action.type) {
  case SEND_MESSAGE: {
    return update(store, {
      chats: {
        [action.chatId]: {
          messageList: { $push: [action.messageId] },
        },
      },
    });
  }

  case ADD_CHAT: {
    return update(store, {
      chats: {
        $push: [{ title: action.title, messageList: [], unreadMessage: 0 }],
      },
    });
  }

  case DELETE_CHAT: {
    return update(store, {
      chats: {
        $splice: [[action.chatId, action.chatId]],
      },
    });
  }

  case BLINK_CHAT: {
    return update(store, {
      chats: {
        [action.chatId]: {
          unreadMessage: { $set: action.isOn },
        },
      },
    });
  }

  default:
    return store;
  }
};

