import { connect } from 'react-redux'
import { testBtn } from './../modules/test'

import Test from '../components/Test'

const mapDispatchtoProps = {
	testBtn: () => testBtn(1)
}

const mapStateToProps = (state) => ({
  test: state.test
})

export default connect(mapStateToProps, mapDispatchtoProps)(Test)
