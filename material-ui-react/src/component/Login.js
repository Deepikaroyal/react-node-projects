import React from 'react'
import Form from '../common/Form'
import Header from '../common/Header'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles(theme => ({
  myCustomClass: {
    backgroundColor: "#E5E5E5"
    
  }
}))
export default function Login() {
  const classes = useStyles()
  return (
    <div className={classes.myCustomClass}>
     <Header/>
      <Form/>
     <div>main page</div>
    </div>
  )
}
