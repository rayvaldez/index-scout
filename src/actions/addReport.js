export const addReport = (report, playerId) => {

  return (dispatch) => {
    fetch(`http://localhost:3001/api/v1/players/${playerId}/reports`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(report)
    })
    .then(response => response.json())
    .then(report => dispatch({type: 'ADD_REPORT', payload: report}))
  }
}
