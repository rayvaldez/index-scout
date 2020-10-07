export const deleteReport = (reportId, playerId) => {
  return (dispatch) =>  {
    fetch(`http://localhost:3001/api/v1/players/${playerId}/reports/${reportId}`, {
      method: 'DELETE'
    })
    .then(res => res.json())
    .then(players => dispatch({
      type: 'DELETE_REPORT',
      payload: players
    }))
  }
}
