export const updateBadges = (badge, playerId) => {

  return (dispatch) => {
    fetch(`http://localhost:3001/api/v1/players/${playerId}/badges/${playerId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(badge)
    })
    .then(response => response.json())
    .then(badge => dispatch({type: 'UPDATE_BADGES', payload: badge}))
  }
}
