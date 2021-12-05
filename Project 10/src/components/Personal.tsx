import React, { FC } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import {
  Grid,
  TextField,
  Button,
  Typography,
  Container,
} from "@material-ui/core";

interface personalInfo {
  firstName: string;
  lastName: string;

  phoneNumber: number;
  age: number;
}

const initialValues: personalInfo = {
  firstName: "",
  lastName: "",

  phoneNumber: 0,
  age: 0,
};

interface Props {
  submit: React.Dispatch<React.SetStateAction<number>>;
  setFormValues: React.Dispatch<React.SetStateAction<{}>>;
  prevValues: any;
}

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required("Required"),
  lastName: Yup.string().required("Required"),
  phoneNumber: Yup.number().required("Required"),
  age: Yup.number()
    .required("Required")
    .min(18, "age should be greater than 18"),
});

const PersonalInformation: FC<Props> = ({
  submit,
  setFormValues,
  prevValues,
}) => {
  return (
    <div>
      <Formik
        initialValues={prevValues}
        onSubmit={(values: personalInfo) => {
          console.log(values);
          setFormValues({ ...values });
          submit(1);
        }}
        validationSchema={validationSchema}
      >
        {({ dirty, isValid }) => {
          return (
            <Form>
              <div>
                <Typography className="heading" variant="h4">
                  Personal Informatoin
                </Typography>

                <Container maxWidth="sm">
                  <Grid container spacing={3} justify="center" className="data">
                    <Grid item sm={12} md={12} lg={12}>
                      <Field
                        name="firstName"
                        as={TextField}
                        label="FirstName"
                        variant="outlined"
                        helperText={<ErrorMessage name="firstName" />}
                        fullWidth
                      />
                    </Grid>
                    <Grid item sm={12} md={12} lg={12}>
                      <Field
                        name="lastName"
                        as={TextField}
                        label="lastName"
                        variant="outlined"
                        helperText={<ErrorMessage name="lastName" />}
                        fullWidth
                      />
                    </Grid>

                    <Grid item sm={12} md={12} lg={12}>
                      <Field
                        name="phoneNumber"
                        as={TextField}
                        label="phoneNumber"
                        type="number"
                        variant="outlined"
                        helperText={<ErrorMessage name="phoneNumber" />}
                        fullWidth
                      />
                    </Grid>
                    <Grid item sm={12} md={12} lg={12}>
                      <Field
                        name="age"
                        as={TextField}
                        label="age"
                        type="number"
                        variant="outlined"
                        helperText={<ErrorMessage name="age" />}
                        fullWidth
                      />
                    </Grid>

                    <Button
                      variant="contained"
                      disabled={!(dirty && isValid)}
                      color="primary"
                      type="submit"
                    >
                      Next
                    </Button>
                  </Grid>
                </Container>
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default PersonalInformation;
