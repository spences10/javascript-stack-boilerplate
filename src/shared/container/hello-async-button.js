// @flow

import { connect } from 'react-redux'

import { sayHelloAsync } from '../action/hello'
import Button from '../component/button'

const mapStateToProps = () => ({
  label: 'Say hello asynchronously and send 1234',
})

/**
 * In order to demonstrate how you would pass a parameter to your asynchronous
 * call and to keep things simple, I am hard-coding a 1234 value here. This
 * value would typically come from a form field filled by the user.
 */
const mapDispatchToProps = dispatch => ({
  handleClick: () => { dispatch(sayHelloAsync(1234)) },
})

export default connect(mapStateToProps, mapDispatchToProps)(Button)
