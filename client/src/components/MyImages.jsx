import React from 'react'

import { connect} from 'react-redux';
import * as uploadsActions from '../actions/uploadsActions';
class MyImages extends React.Component {
  componentDidMount(){
    this.props.getFiles()
  }
  render() {
    return(
      <div>
       {this.props.uploadsfiles.map(({id,filename})=>{
         const url = `http://localhost:4000/image/${filename}`
         return(
           <img key={id} src={url} />
         )
       })}
      </div>
    )
  }
}
const mapStateToProps = ({uploadsReducers}) => uploadsReducers;
export default connect(mapStateToProps, uploadsActions) (MyImages);
