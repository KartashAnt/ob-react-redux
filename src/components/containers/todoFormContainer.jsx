import React from 'react'
import { connect } from 'react-redux'
import TodoForm from '../pure/todoForm'
import { addTodo } from '../../store/actions/actions'

const mapStateToProps = (state) => { }

const mapDispatchToProps = (dispatch) => {
    return {
        submit: (text) => {
            dispatch(addTodo(text))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm)