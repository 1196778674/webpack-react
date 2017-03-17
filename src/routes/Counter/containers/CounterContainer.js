import { connect } from 'react-redux'
import { increment, doubleAsync, clear } from '../modules/counter'

import Counter from '../components/Counter'

const mapDispatchToProps = {
  increment: () => increment(1),
  doubleAsync,
  clear
}

const mapStateToProps = (state) => ({
  counter: state.counter
})

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
