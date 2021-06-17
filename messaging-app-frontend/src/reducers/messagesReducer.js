export default function messagesReducer(state = {currentConvo: null, messages: [], requestingMessages: false}, action) {
  switch (action.type) {
    case "CHANGE_CONVO":
      return {
        ...state,
        currentConvo: parseInt(action.convo_id)
      };
    case "START_ADDING_MESSAGES":
      return {
        ...state,
        messages: [...state.messages],
        requestingMessages: true
      }
    case "ADD_MESSAGES":
      return {
        ...state,
        messages: [action.messages],
        requestingMessages: false
      }

    default:
      return state;
  }
}
