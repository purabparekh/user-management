import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { Grid } from "@material-ui/core";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";

import { ROLES } from "../../constants/roles";
import { defaultImageUrl } from "../../services/UserService";

import "./modifyUser.css";
import ProfilePic from "../common/ProfilePic";

class ModifyUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: this.props.user,
      action: this.props.user.id === -1 ? "Add" : "Update"
    };
  }
  handleChange = event => {
    const user = {
      ...this.state.user,
      [event.target.name]: event.target.value
    };
    this.setState({
      user
    });
  };

  handleImageUpload = event => {
    const user = {
      ...this.state.user,
      thumbnailUrl: URL.createObjectURL(event.target.files[0])
    };
    this.setState({
      user
    });
  };
  render() {
    const { user, action } = this.state;
    return (
      <Dialog
        open={true}
        onClose={this.props.onClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">{action} User</DialogTitle>
        <DialogContent>
          <Grid container spacing={24}>
            <Grid item xs={6}>
              <ProfilePic
                src={user.thumbnailUrl || defaultImageUrl}
                displayPicChooser
                onChange={this.handleImageUpload}
              />
              <FormControl fullWidth margin="dense">
                <InputLabel htmlFor="role">Role</InputLabel>
                <Select
                  autoWidth
                  required
                  value={user.role}
                  onChange={this.handleChange}
                  inputProps={{
                    name: "role",
                    id: "role"
                  }}
                >
                  <MenuItem value={ROLES.USER}>{ROLES.USER}</MenuItem>
                  <MenuItem value={ROLES.ADMIN}>{ROLES.ADMIN}</MenuItem>
                  <MenuItem value={ROLES.OWNER}>{ROLES.OWNER}</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <Grid container>
                <TextField
                  autoFocus
                  margin="dense"
                  name="firstName"
                  label="First Name"
                  type="text"
                  defaultValue={user.firstName}
                  onChange={this.handleChange}
                  fullWidth
                  required
                />
                <TextField
                  margin="dense"
                  name="lastName"
                  label="Last Name"
                  type="text"
                  defaultValue={user.lastName}
                  onChange={this.handleChange}
                  fullWidth
                  required
                />
                <TextField
                  margin="dense"
                  name="username"
                  label="Username"
                  type="text"
                  defaultValue={user.username}
                  onChange={this.handleChange}
                  fullWidth
                  required
                />
                <TextField
                  margin="dense"
                  name="email"
                  label="Email"
                  type="email"
                  defaultValue={user.email}
                  onChange={this.handleChange}
                  fullWidth
                  required
                />
                <TextField
                  margin="dense"
                  name="phone"
                  label="Phone"
                  type="phone"
                  defaultValue={user.phone}
                  onChange={this.handleChange}
                  fullWidth
                  required
                />
              </Grid>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={this.props.onClose} color="primary">
            Cancel
          </Button>
          <Button
            onClick={() => this.props.onSubmit(this.state.user)}
            color="primary"
          >
            {action}
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

export default ModifyUser;
