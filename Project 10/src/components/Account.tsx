import React, { FC } from "react";
import { Field, Form, useField, Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import {
  Grid,
  TextField,
  Button,
  CheckboxProps,
  FormControlLabel,
  Checkbox,
  Container,
} from "@material-ui/core";
import { boolean } from "yup";

interface accountInformation {
  email: string;
  userName: string;
  password: string;
  confirmPassword: string;
  terms: boolean;
}

const initialValues: accountInformation = {
  email: "",
  userName: "",
  password: "",
  confirmPassword: "",
  terms: false,
};

interface Props {
  submit: React.Dispatch<React.SetStateAction<number>>;
  setFormValues: React.Dispatch<React.SetStateAction<{}>>;
  prevValues: any;
}

const validationSchema = Yup.object().shape({
  userEmail: Yup.string().email().required("Required"),
  userName: Yup.string().required("Required"),
  password: Yup.string()
    .required("Required")
    .min(8, "minimum length of password is 8"),
  // this code is used for for checking the previous password is equal to newst password
  confirmPassword: Yup.string()
    .required("Required")
    .oneOf([Yup.ref("password")], "Passwored is not matching"),
  terms: boolean().oneOf([true]),
});

const AccountInformation: FC<Props> = ({
  submit,
  setFormValues,
  prevValues,
}) => {
  return (
    <div className="div">
      <Formik
        initialValues={prevValues}
        onSubmit={(values: accountInformation) => {
          console.log(values);
          submit(2);
          setFormValues({ ...values, ...prevValues });
        }}
        validationSchema={validationSchema}
      >
        {({ dirty, isValid }) => {
          return (
            <Form>
              <div>
                <Container maxWidth="sm">
                  <Grid container spacing={3} justify="center" className="data">
                    <Grid item sm={12} md={12} lg={12}>
                      <Field
                        as={TextField}
                        name="userEmail"
                        type="email"
                        variant="outlined"
                        helperText={<ErrorMessage name="userEmail" />}
                        label="Email"
                        fullWidth
                      />
                    </Grid>

                    <Grid item sm={12} md={12} lg={12}>
                      <Field
                        as={TextField}
                        name="userName"
                        type="text"
                        variant="outlined"
                        helperText={<ErrorMessage name="userName" />}
                        label="UserName"
                        fullWidth
                      />
                    </Grid>

                    <Grid item sm={12} md={12} lg={12}>
                      <Field
                        as={TextField}
                        name="password"
                        variant="outlined"
                        helperText={
                          <ErrorMessage name="password" className="requier" />
                        }
                        label="Password"
                        fullWidth
                        type="password"
                      />
                    </Grid>

                    <Grid item sm={12} md={12} lg={12}>
                      <Field
                        as={TextField}
                        name="confirmPassword"
                        variant="outlined"
                        helperText={<ErrorMessage name="confirmPassword" />}
                        label="ConfirmPassword"
                        fullWidth
                        type="password"
                      />
                    </Grid>

                    <Grid item sm={12} md={12} lg={12}>
                      <div className="checkbox">
                        <MyCheckbox
                          // style={{ textAlign: "left" }}
                          name="terms"
                        />
                        <b>Accept Terms and Condition</b>
                      </div>
                    </Grid>

                    <Grid item sm={6} md={6} lg={6} className="buttons">
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={() => submit(0)}
                      >
                        Back
                      </Button>
                      <Button
                        variant="contained"
                        disabled={!(dirty && isValid)}
                        color="primary"
                        type="submit"
                      >
                        Next
                      </Button>
                    </Grid>
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

export interface MyCheckboxProps extends CheckboxProps {
  name: string;
  value?: string | number;
  label?: string;
}

export function MyCheckbox(props: MyCheckboxProps) {
  const [field] = useField({
    name: props.name,
    type: "checkbox",
    value: props.value,
  });

  return (
    <FormControlLabel
      control={<Checkbox {...props} {...field} />}
      label={props.label}
    />
  );
}

export default AccountInformation;
