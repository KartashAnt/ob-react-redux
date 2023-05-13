import React from 'react'
import { connect } from 'react-redux'
import Filter from '../pure/filter'
import { setVisibilityFilter } from '../../store/actions/actions'


const mapStateToProps = (state,ownProps) => {
    return{
        active: ownProps.filter === state.filterState
    }
}

const mapDispatchToProps = (dispatch,ownProps)=>{
    return {
        onClick:()=>{
            dispatch(setVisibilityFilter(ownProps.filter));
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Filter)