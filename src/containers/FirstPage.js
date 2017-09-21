import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router-dom'

import favicon from './favicon-512x512.png'
import thing from './thing.png'
import {MainApi} from '../api'
import * as userActions from '../actions/user'
import './FirstPage.css'

class FirstPageParent extends Component {
  async componentWillMount(){
    this.props.userActions.set({text: 'loading'})
    
    this._handleData('firstPage')
  }
  async _handleData(key){
    const {staticContext} = this.props

    if (staticContext && staticContext.data[key]){
      const {text} = staticContext.data[key]
      this.props.userActions.set({text})
      staticContext.head.push(
        <meta name="description" content={"Some description: "+text}/>
      )
    } else if (staticContext){
      staticContext.data[key] = this._getData()
    } else if (!staticContext && window.DATA[key]){
      const {text} = window.DATA[key]
      this.props.userActions.set({text})
      window.DATA[key] = null
    } else if (!staticContext) {
      const {text} = await this._getData()
      this.props.userActions.set({text})
    }
  }
  async _getData(){
    const {staticContext} = this.props
    const Api = staticContext ? staticContext.api.MainApi : MainApi
    const myApi = new Api()
    const {text} = await myApi.getMain()
    return {text}
  }
  render(){
    return <FirstPage {...this.props} />
  }
}
class FirstPage extends Component {
  render() {
    const b64 = this.props.staticContext ? 'wait for it' : window.btoa('wait for it')
    const {text, email} = this.props.user
    return (
      <div className='bold FirstPage'>
        <h2>First Page</h2>
        <img src={favicon} alt='favicon-big' />
        <img src={thing} alt='thing-inline' />
        <p>{`Email: ${email}`}</p>
        <p>{`Database / delayed Text: ${text}`}</p>
        <p>{`b64: ${b64}`}</p>
        <Link to={'/second'}>Second</Link>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  user: state.user
})

const mapDispatchToProps = dispatch => ({
  userActions: bindActionCreators(userActions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FirstPageParent)
