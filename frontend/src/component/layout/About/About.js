import React from "react";
import "./aboutSection.css";
import { Button, Typography, Avatar } from "@material-ui/core";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
const About = () => {
  const visitInstagram = () => {
    window.location = "https://www.instagram.com/_____amit_____ghosh___";
  };
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Us</Typography>

        <div>
          <div>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src="https://res.cloudinary.com/amitghosh/image/upload/v1651256539/WhatsApp_Image_2022-04-15_at_10.28.14_PM_bwmgun.jpg"
              alt="Founder"
            />
            <Typography>Amit Ghosh</Typography>
            <Button onClick={visitInstagram} target="blank" color="primary">
              Visit Instagram
            </Button>
            <span>
              This is a sample wesbite made by @amitghosh. 
            </span>
          </div>
          <div className="aboutSectionContainer2">
            <Typography component="h2">Our Brands</Typography>
            <a href="https://www.instagram.com/_____amit_____ghosh___" target="blank">
              <InstagramIcon className="instagramSvgIcon" />
            </a>
            <a href="https://www.linkedin.com/in/amit-ghosh-4626b21b1" target="blank">
              <LinkedInIcon className="instagramSvgIcon" />
            </a>
            <a href="https://www.instagram.com/_____amit_____ghosh___" target="blank">
              <FacebookIcon className="instagramSvgIcon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
