import React from "react";

import { Grid } from "@material-ui/core";
import Fab from "@material-ui/core/Fab";
import Icon from "@material-ui/core/Icon";

import "./profilePic.css";

// function imageToDataURL(image) {
//   const canvas = document.createElement("canvas");
//   const context = canvas.getContext("2d");
//   const base_image = new Image();
//   base_image.crossOrigin = "anonymous";
//   base_image.src = image;
//   base_image.onload = function() {
//     context.drawImage(base_image, 100, 100);
//     const dataUrl = canvas.toDataURL();
//     console.log(dataUrl);
//     return dataUrl;
//   };
// }

const ProfilePic = props => {
  const { displayPicChooser, src, onChange } = props;
  // console.log(imageToDataURL(src));
  return (
    <Grid container justify="center">
      <div className="profile-pic-chooser">
        <div className="profile-pic">
          <img src={src} alt="Profile Pic" />
        </div>
        {displayPicChooser && (
          <div className="pic-chooser">
            <input
              accept="image/*"
              className={"display-none"}
              id="profile-pic"
              onChange={onChange}
              type="file"
            />
            <label htmlFor="profile-pic">
              <Fab
                size="small"
                color="primary"
                aria-label="Add"
                component="span"
              >
                <Icon>camera_alt</Icon>
              </Fab>
            </label>
          </div>
        )}
      </div>
    </Grid>
  );
};

export default ProfilePic;
