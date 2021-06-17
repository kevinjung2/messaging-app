export default function fetchMessages(params) {
  return (dispatch) => {
    dispatch({ type: 'START_ADDING_MESSAGES' });
    fetch(`http://localhost:3000/api/v1/conversations/${params.convo_id}`, {
      method: "GET",
      headers: {Authorization: `Bearer ${params.token}`}
    })
    .then(response => response.json())
    .then(convo => dispatch({ type: 'ADD_MESSAGES', messages: convo.conversation.messages }));
  };
}
