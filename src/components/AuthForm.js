import React from 'react'
import { connect } from 'react-redux'

import { auth } from '../actions/authActions'

import {Router, Route, Switch, Redirect} from 'react-router-dom'

class AuthForm extends React.Component {
  constructor(props){
    super(props)
    
    this.state = {
      login: '',
      password: '',
      checkLogin: 'admin',
      checkPassword: 'admin',
      errors:{
        message: null,
      }
    }
  }
  
  componentDidUpdate(prevProps, prevState) {
    if(prevProps.handlingErrors !== this.props.handlingErrors && this.props.handlingErrors.status !== 200){
      this.handleErrors(this.props.handlingErrors.message)
    }
  }
  
  handleErrors = (message) => {
    console.log('MESSAGE', message)
    this.setState({errors: {message: message}})
  }
  
  confirmAuth = () => {
    const { login, password } = this.state
    console.log('CONFIRM')
    this.props.auth(login, password)
  }

  handleChange = (key, value) => {
    this.setState({[key]: value})
  }
  
  render() {
    const { login, password, errors } = this.state

    return (
      <div className='container'>
        <form name='form' className='auth__form'>
          {
            errors.message ?
            <div className='errMessage'>
              <p>{errors.message}</p>
            </div> :
            null
          }
          
          <label className='inputLabel'>Логин</label>
          <input 
            type='text'
            className='input__login'
            value={login}
            style={{
              borderColor: errors.message ? '#bf360c' : null
            }}
            onChange={(e) => this.handleChange('login', e.target.value)}
          />
          <label className='inputLabel' style={{marginTop: '10px'}}>Пароль</label>
          <input
            type='password'
            className='input__password'
            value={password}
            style={{
              borderColor: errors.message ? '#bf360c' : null
            }}
            onChange={(e) => this.handleChange('password', e.target.value)}
          />
          <div 
            style={{
              display: 'flex', 
              flexDirection: 'row', 
              alignItems: 'center', 
              justifyContent: 'space-between', 
              margin: '10px'
            }}>
            <div 
              style={{
                display: 'flex', 
                flexDirection: 'row', 
                alignItems: 'center', 
                justifyContent: 'space-between'
              }}>
              <input 
                type='checkbox'
                className='input__auth__checkbox'
              />
              <p style={{margin: '0', marginLeft: '10px', color: '#9c27b0'}}>Запомнить меня</p>
            </div>
            
          </div>
          <div className='auth__button' onClick={() => this.confirmAuth()}>Войти</div>
          <div  style={{
            marginLeft: '10px',
            marginTop: '10px'
          }}>
            <a style={{cursor: 'pointer', color: '#9c27b0'}}>Забыли пароль?</a>
          </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  user: state.user,
  handlingErrors: state.handlingErrors,
})

const mapDispatchToProps = dispatch => ({
  auth: (login, password) => dispatch(auth(login, password))
})

export default connect(mapStateToProps, mapDispatchToProps)(AuthForm)


