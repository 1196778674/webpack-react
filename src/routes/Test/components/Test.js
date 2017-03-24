import React, {Component} from 'react'

export const Test = (props) => (

  <div>
      <button type="button" className="btn btn-default" onClick={props.testBtn}>button</button>
    </div>

)

Test.propTypes = {
  testBtn: React.PropTypes.func.isRequired
}

export default Test