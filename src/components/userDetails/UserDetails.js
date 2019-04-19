import React, { Component } from "react";
import PageTitle from "../common/PageTitle";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";
// import Card from "@material-ui/core/Card";
// import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

import { Grid } from "@material-ui/core";

import "./userDetails.css";
import ProfilePic from "../common/ProfilePic";

import { connect } from "react-redux";
import { deleteUser, updateUser } from "../../actions/user/userActions";

class UserDetails extends Component {
  render() {
    const { user } = this.props;
    const fullName = user.firstName + " " + user.lastName;
    return (
      <>
        <PageTitle
          text={fullName}
          displayBackButton
          onBackClick={this.props.onBack}
        >
          <Button
            variant="contained"
            color="primary"
            size="small"
            className="margin-right-8"
            onClick={() => this.props.onDelete(user)}
          >
            <Icon>delete_outline</Icon>
            Delete
          </Button>

          <Button
            variant="contained"
            color="primary"
            size="small"
            onClick={() => this.props.onEdit(user)}
          >
            <Icon>create</Icon>
            Edit
          </Button>
        </PageTitle>
        <Paper className="padding-top-bottom-15">
          <ProfilePic
            src={user.thumbnailUrl}
            displayPicChooser={false}
            onChange={this.handleImageUpload}
          />
          <Grid container justify="center">
            <Grid item xs={2}>
              <Grid container direction="column" spacing={16}>
                <Grid item>
                  <Typography color="textSecondary" gutterBottom>
                    Name
                  </Typography>
                  <Typography component="p">{fullName}</Typography>
                </Grid>
                <Grid item>
                  <Typography color="textSecondary" gutterBottom>
                    Username
                  </Typography>
                  <Typography component="p">{user.username}</Typography>
                </Grid>
                <Grid item>
                  <Typography color="textSecondary" gutterBottom>
                    Role
                  </Typography>
                  <Typography component="p">{user.role}</Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={2}>
              <Grid container direction="column" spacing={16}>
                <Grid item>
                  <Typography color="textSecondary" gutterBottom>
                    Email
                  </Typography>
                  <Typography component="p">{user.email}</Typography>
                </Grid>
                <Grid item>
                  <Typography color="textSecondary" gutterBottom>
                    Phone
                  </Typography>
                  <Typography component="p">{user.phone}</Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </>
    );
  }
}

// export default UserDetails;

// const mapStateToProps = state => ({
//   ...state
// });

const mapDispatchToProps = dispatch => ({
  deleteUser: payload => dispatch(deleteUser(payload)),
  updateUser: payload => dispatch(updateUser(payload))
});

export default connect(
  null,
  mapDispatchToProps
)(UserDetails);
