import React, { FC } from "react";
import { AccordionDetails, Button, Grid, Container } from "@material-ui/core";
import { Formik, Form } from "formik";

interface Props {
  submit: React.Dispatch<React.SetStateAction<number>>;
  formValues: any;
}

const Review: FC<Props> = ({ formValues, submit }) => {
  return (
    <Formik
      initialValues={formValues}
      onSubmit={(values) => {
        alert("Thanks for submitting");
        window.location.reload(true);
        submit(0);
      }}
    >
      <Form className="form_Content">
        <Container maxWidth="sm">
          <Grid container spacing={3} justify="center">
            <Grid item sm={12} xs={12} lg={12} md={12} className="data">
              <AccordionDetails className="review_Content">
                <p style={{ textAlign: "right" }}>Name: </p>
                <p>{formValues.firstName.concat(formValues.lastName)}</p>
              </AccordionDetails>

              <AccordionDetails className="review_Content">
                <p>Age: </p>
                <p>{formValues.age}</p>
              </AccordionDetails>

              <AccordionDetails className="review_Content">
                <p>Phone Number: </p>
                <p>{formValues.phoneNumber}</p>
              </AccordionDetails>

              <AccordionDetails className="review_Content">
                <p>Email ID </p>
                <p>{formValues.userEmail}</p>
              </AccordionDetails>
              <AccordionDetails className="review_Content">
                <p>User Name </p>
                <p>{formValues.userName}</p>
              </AccordionDetails>
              <AccordionDetails className="review_Content">
                <p>Password</p>
                <p>{formValues.password}</p>
              </AccordionDetails>

              <div className="buttons">
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => submit(1)}
                >
                  Back
                </Button>
                <Button variant="contained" color="primary" type="submit">
                  Submit
                </Button>
              </div>
            </Grid>
          </Grid>
        </Container>
      </Form>
    </Formik>
  );
};

export default Review;
