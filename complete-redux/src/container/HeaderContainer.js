import Header from "../components/Header"
import React from "react"
import {connect} from 'react-redux'

const mapStateToProps = state =>({
    data: state
})

const mapDispatchToProps=dispatch=>({
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)
