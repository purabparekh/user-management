import React, { Component } from "react";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";

class Notification extends Component {
  state = {
    open: this.props.open || false
  };
  handleClose = () => {
    this.setState({
      open: false
    });
  };
  render() {
    const { message } = this.props;
    return (
      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right"
        }}
        open={this.state.open}
        autoHideDuration={6000}
        onClose={this.handleClose}
        ContentProps={{
          "aria-describedby": "message-id"
        }}
        message={<span id="message-id">{message}</span>}
        action={[
          //   <Button
          //     key="undo"
          //     color="secondary"
          //     size="small"
          //     onClick={this.handleClose}
          //   >
          //     UNDO
          //   </Button>,
          <IconButton
            key="close"
            aria-label="Close"
            color="inherit"
            onClick={this.handleClose}
          >
            <CloseIcon />
          </IconButton>
        ]}
      />
    );
  }
}

export default Notification;
