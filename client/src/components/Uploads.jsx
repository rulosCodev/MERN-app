import React from 'react'

import { connect } from 'react-redux';
import * as uploadsActions from '../actions/uploadsActions';
class Uploads extends React.Component {
 
  constructor(props) {
    super(props);
    
  this.thereAreNotTarget = this.thereAreNotTarget.bind(this);
  this.createTarget = this.createTarget.bind(this);

  

  }
  async thereAreNotTarget() {
    const response = await this.props.getTarget(this.props.id);
    const targets = Object.values(response)
    console.log(targets)
    return targets

  }
  async createTarget() {

      const imagesids = Object.values(this.props.uploadsfiles);
      const newTarget = {
        surgeryid: this.props.id,
        imageid: imagesids
      }
      console.log(newTarget)
      
      this.props.addTargetUploads(newTarget)

  }
  async componentDidMount() {
    const response = await this.thereAreNotTarget();
    console.log('se buscan targets')
    console.log(response)
    if(response.length === 0) {
      console.log('no hay target')

      this.createTarget()
      this.thereAreNotTarget()
      
    } 
    // if(target.length >= 0) {
    //   const response = this.props.getTarget(this.props.id)
    //   console.log(response.body.length)
    //   // if(!response.body) {

    //   //   console.log('tuve que crear')
    //   //   const newTarget = {
    //   //     surgeryid: this.props.id,
    //   //     imageid: []
    //   //   }
    //   //   this.props.addTargetUploads(newTarget)
    //   // }
    //   console.log('tuve que traer')

      
    // }  
    // if(this.props.target) {
    //   console.log('ya hay target')
    // }
    // const target = Object.values(this.props.target);
    // if(target.length >= 0) {
    //   console.log('hay target')
    // }
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

