import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TablePagination from "@material-ui/core/TablePagination";
import Avatar from "@material-ui/core/Avatar";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Tooltip from "@material-ui/core/Tooltip";
import Icon from "@material-ui/core/Icon";

// import addUserLogo from "../../assets/ic_add_user.svg";

import "./userList.css";
import ModifyUser from "../modifyUser/ModifyUser";
import User from "../../models/User";
import PageTitle from "../common/PageTitle";

import { connect } from "react-redux";
import {
  addUser,
  deleteUser,
  updateUser
} from "../../actions/user/userActions";
import UserDetails from "../userDetails/UserDetails";
// import Notification from "../common/Notification";

class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userToModify: null,
      page: 0,
      rowsPerPage: 5,
      isAddUserModalOpen: false,
      isUserInfoVisible: false
    };
  }

  handleChangePage = (event, page) => {
    this.setState({ page });
  };

  handleChangeRowsPerPage = event => {
    this.setState({ rowsPerPage: event.target.value });
  };

  openModifyUserModal = userToModify => {
    this.setState({
      userToModify,
      isAddUserModalOpen: true
    });
  };

  closeModifyUserModal = () => {
    this.setState({
      isAddUserModalOpen: false
    });
  };

  showUserInfo = user => {
    this.setState({
      userToModify: user,
      isUserInfoVisible: true
    });
  };

  hideUserInfo = () => {
    this.setState({
      userToModify: null,
      isUserInfoVisible: false
    });
  };

  modifyUserDetails = userDetails => {
    const { users } = this.props;

    if (userDetails.id === -1) {
      // New user added
      const newUser = new User({ ...userDetails, id: users.length + 1 });

      this.props.addUser(newUser);
      this.setState({
        isAddUserModalOpen: false
      });
    } else {
      // Existing user details modified
      this.props.updateUser(userDetails);
      this.setState({
        userToModify: userDetails,
        isAddUserModalOpen: false
      });
    }
  };

  deleteUser = userToDelete => {
    this.props.deleteUser(userToDelete);
    if (this.state.isUserInfoVisible) {
      this.setState({
        userToModify: null,
        isUserInfoVisible: false
      });
    }
  };

  render() {
    const { rowsPerPage, page } = this.state;
    const { users } = this.props;
    return (
      <>
        {/* <Notification
          open
          message="User details edited successfully!"
          type="sucess"
        /> */}
        {this.state.isAddUserModalOpen && (
          <ModifyUser
            user={this.state.userToModify}
            onClose={this.closeModifyUserModal}
            onSubmit={this.modifyUserDetails}
          />
        )}
        {this.state.isUserInfoVisible && (
          <UserDetails
            user={this.state.userToModify}
            onEdit={() => this.openModifyUserModal(this.state.userToModify)}
            onDelete={() => this.deleteUser(this.state.userToModify)}
            onBack={this.hideUserInfo}
          />
        )}
        {!this.state.isUserInfoVisible && (
          <React.Fragment>
            <PageTitle text="User Management">
              <Button
                variant="contained"
                color="primary"
                size="small"
                onClick={() => this.openModifyUserModal(new User())}
              >
                <Icon>add</Icon>
                {/* <img src={addUserLogo} alt="Add user" /> */}
                Add user
              </Button>
            </PageTitle>
            <Paper>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell align="center">Image</TableCell>
                    <TableCell>Username</TableCell>
                    <TableCell>First Name</TableCell>
                    <TableCell>Last Name</TableCell>
                    <TableCell>Role</TableCell>
                    <TableCell />
                  </TableRow>
                </TableHead>
                <TableBody>
                  {users.length === 0 && (
                    <TableRow>
                      <TableCell>No data available!</TableCell>
                    </TableRow>
                  )}
                  {users
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((user, index) => (
                      <TableRow key={user.id}>
                        <TableCell align="center">
                          <Grid container justify="center" alignItems="center">
                            <Avatar
                              alt={user.firstName + " " + user.lastName}
                              src={user.thumbnailUrl}
                            />
                          </Grid>
                        </TableCell>
                        <TableCell>{user.username}</TableCell>
                        <TableCell>{user.firstName}</TableCell>
                        <TableCell>{user.lastName}</TableCell>
                        <TableCell>{user.role}</TableCell>
                        <TableCell>
                          <Tooltip title={"View details"}>
                            <Button
                              className="action-button"
                              onClick={() => this.showUserInfo(user)}
                            >
                              <i className="material-icons">visibility</i>
                            </Button>
                          </Tooltip>
                          <Tooltip title={"Edit"}>
                            <Button
                              className="action-button"
                              onClick={() => this.openModifyUserModal(user)}
                            >
                              <i className="material-icons">create</i>
                            </Button>
                          </Tooltip>
                          <Tooltip title={"Delete"}>
                            <Button
                              className="action-button"
                              onClick={() => this.deleteUser(user)}
                            >
                              <i className="material-icons">delete_outline</i>
                            </Button>
                          </Tooltip>
                        </TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </Paper>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25]}
              component="div"
              count={users.length}
              rowsPerPage={rowsPerPage}
              page={page}
              backIconButtonProps={{
                "aria-label": "Previous Page"
              }}
              nextIconButtonProps={{
                "aria-label": "Next Page"
              }}
              onChangePage={this.handleChangePage}
              onChangeRowsPerPage={this.handleChangeRowsPerPage}
            />
          </React.Fragment>
        )}
      </>
    );
  }
}

// export default UserList;

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
  addUser: payload => dispatch(addUser(payload)),
  deleteUser: payload => dispatch(deleteUser(payload)),
  updateUser: payload => dispatch(updateUser(payload))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserList);
