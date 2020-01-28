import React from 'react'

import { connect } from 'react-redux';
import * as uploadsActions from '../actions/uploadsActions';
class Uploads extends React.Component {
  
  componentDidMount() {
    // this.props.getTarget(this.props.id)
  }
  render() {
    return(
      <div>
      uploads
      </div>
    )
  }
}
const mapStateToProps = ({uploadsReducers}) => uploadsReducers
export default connect(mapStateToProps, uploadsActions) (Uploads);

