import React from 'react'
import { connect } from 'react-redux'
import LoginForm from '../pure/loginForm'
import { httpRequest } from '../../store/actions/asynActions'



const mapStateToProps = (state) => ({
    loged:state.userState.loged,
    fetching:state.userState.fetching,
})

const mapDispatchToProps = (dispatch)=>({
    onLogin:(email,password)=>{
        const data={
            email,
            password
        }
        dispatch(httpRequest('POST','https://reqres.in/api/login',data))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)