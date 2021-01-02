sortByName = () => {
  this.setState((prevState) => {isSorted: !prevState.isSorted })
}

render() {
  const isSorted = this.state.isSorted;
  const sortedArray = [...this.props.players].sort((a,b) => a.name.localeCompare(b.name))
  const playerArray =  isSorted ? sortedArray : this.props.players
