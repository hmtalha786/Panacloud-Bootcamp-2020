import React from "react";
import { Grid } from "@material-ui/core";
import useWebAnimations from "@wellyshen/use-web-animations";
import "../css/footer.css";

export const Footer = () => {
  const textLeftFrame = [
    { transform: "translateY(100px)", opacity: 0 },
    { transform: "translateY(0px)", opacity: 1 },
  ];

  const textLeftTiming = {
    duration: 3000,
    iterations: 1,
    delay: 7000,
    easing: "ease-out",
  };

  const textEffect = useWebAnimations({
    keyframes: textLeftFrame,
    timing: textLeftTiming,
  });

  return (
    <div className="footer">
      <Grid container className="row align-items-left" ref={textEffect.ref}>
        <Grid item xs={12} sm={12} className="col col-sm-12 mb-5">
          <div className="col col-sm-12">
            <h1 className="display-3 text-center">Go For Green Vitality</h1>
            <p className="lead text-center qoutations">
              Trees don't boost WiFi signals, but they boost life.
            </p>
          </div>
        </Grid>
        <Grid item xs={12} sm={4} className="col col-sm-4 mt-2 ml-5">
          <h1 className="ml-3">Our Mission</h1>
          <p className="text-justify ml-3">
            Our Motive is to make our Country and the whole World more Green and
            Eco-friendly. Joining hands to work towards a clean and green
            Pakistan.
          </p>
          <p className="text-justify ml-3">
            Motive is to Reduce the pollution and use of non recyclable
            products, Recycle the human waste and make them Reusable .
          </p>
          <ul className="nav-link social-media">
            <li>
              <h3>Follow us :</h3>
            </li>
            <li>
              <a href="#main_section">
                <i className="fab fa-facebook"></i>
              </a>
            </li>
            <li>
              <a href="#main_section">
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="#main_section">
                <i className="fab fa-instagram"></i>
              </a>
            </li>
          </ul>
        </Grid>
        <Grid item xs={12} sm={2}></Grid>
        <Grid item xs={12} sm={5} className="col col-sm-5 mt-1">
          <h1>Contact Us :</h1>
          <br />
          <div className="text-justify">
            <form>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your Full Name"
                  id="inputFullName"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  className="form-control"
                  id="inputEmail1"
                  placeholder="Enter Email"
                  aria-describedby="emailHelp"
                  required
                />
              </div>
              <div className="mb-3">
                <textarea
                  className="form-control"
                  id="validationTextarea"
                  placeholder="Your Message"
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </Grid>
        <Grid item xs={12} sm={12} className="text-center text-light">
          <br />
          <p>Privacy Policy | Terms and Conditions | © 2020 Green IROP Inc.</p>
        </Grid>
      </Grid>
    </div>
  );
};
