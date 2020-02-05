import React from 'react'
import {connect} from 'react-redux'
import {me} from '../store/user'
import CssBaseline from '@material-ui/core/CssBaseline'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Avatar from '@material-ui/core/Avatar'
import RsvpEvents from '../components/rsvpEvents'
import UserInterests from './userInterests'

class User extends React.Component {
  componentDidMount() {
    this.props.me()
  }

  render() {
    const user = this.props.user
    const userId = this.props.user.id

    return (
      <React.Fragment>
        <CssBaseline />
        <Container spacing={1} maxWidth="sm">
          <Typography
            component="div"
            spacing={1}
            style={{backgroundColor: '#cfe8fc', height: '100vh'}}
          >
            <Grid container spacing={1} justify="space-between">
              <Grid item xs={12}>
                {' '}
                <br />
                <br />Hi, {user.firstName} - Thank you for using Picket! <br />
                <br /> <br />
              </Grid>

              <Grid item xs={6}>
                <br />
                <Avatar alt={user.firstName} src={user.imageUrl} />{' '}
              </Grid>

              <Grid item xs={6}>
                <Paper>
                  {' '}
                  <br />
                  Name: {user.firstName} {user.lastName} <br />
                  Account Email: {user.email} <br />
                  <br />
                  <br />
                </Paper>
              </Grid>

              <Grid item xs={12}>
                <RsvpEvents userId={userId} />
              </Grid>
              <Grid item xs={12}>
                <UserInterests userId={userId} />
              </Grid>
            </Grid>
          </Typography>
        </Container>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({
  user: state.user
})

const mapDispatchToProps = dispatch => ({
  me: () => dispatch(me())
})

export default connect(mapStateToProps, mapDispatchToProps)(User)
