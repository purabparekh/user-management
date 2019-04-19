import React from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

import Tooltip from "@material-ui/core/Tooltip";

import "./pageTitle.css";

const PageTitle = props => {
  const { text, children, displayBackButton, onBackClick } = props;
  return (
    <Grid container className="page-header">
      <Grid item xs={8}>
        {displayBackButton && (
          <Tooltip title="Back">
            <Button className="action-button" onClick={onBackClick}>
              <i className="material-icons">arrow_back_ios</i>
            </Button>
          </Tooltip>
        )}
        <span className="page-header-text">{text}</span>
      </Grid>
      <Grid item xs={4}>
        <Grid container justify="flex-end">
          {children}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default PageTitle;
