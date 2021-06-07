export default function messagesReducer(state = {currentConvo: null}, action) {
  switch (action.type) {
    case "CHANGE_CONVO":
      return {
        currentConvo: action.convo_id
      };

    default:
      return state;
  }
}
