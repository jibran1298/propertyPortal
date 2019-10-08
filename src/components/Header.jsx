import React from 'react'
import '../static/CompStyle.css'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
  input: {
    display: 'none',
  },
  root: {
    flexGrow: 1,
  },
}))

const Header = () => {
  const classes = useStyles()
  const [value, setValue] = React.useState(0)

  const handleChange = (event, newValue) => {
    event.preventDefault()
    setValue(newValue)
  }

  return (
    <div className="header-wrapper">
      <div className="logo">
        <h1>Property360</h1>
      </div>

      <div className="search-bar">
        <input type="text" placeholder="Search" />
      </div>
      <div className="header-buttons">
        <Paper className={classes.root}>
          <Tabs value={value} onChange={handleChange} indicatorColor="primary" textColor="primary" centered>
            <Tab label="Rent" />
            <Tab label="Purchase" />
            <Tab label="Sale" />
            <Tab label="Admin Login" />
          </Tabs>
        </Paper>
      </div>
    </div>
  )
}

export default Header
