export default function playerReducer(state = {players: []}, action) {
  switch (action.type) {
    case 'FETCH_PLAYERS':
      return {players: action.payload}
    case 'ADD_REPORT':
      return {...state, players: [...state.players, action.payload]}
    case 'UPDATE_BADGES':
      let newState = state.players.map(player => {
        if (player.id === action.payload.id) {
          return action.payload
        } else {
          return player
        }
      })
      return {...state, players: newState}
    default:
      return state
  }
}
