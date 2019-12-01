import React from 'react';
import { Link } from 'react-router-dom';
import { TextInput, Button, Box, Heading, FormField, Form, Anchor } from 'grommet';
import { useFormik } from 'formik';
import * as Icons from 'grommet-icons';
import {registerValidationSchema} from './props';
import { AuthContext } from '../../../../contexts/AuthContext';
import { colors } from 'grommet/themes/base';

export const Register = () => {
  const { auth, authActions } = React.useContext(AuthContext);
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: registerValidationSchema,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
      const { email, password } = values;
      authActions.registerUser(email, password).then((s) => console.log(s)).catch((err) => console.log(err));
    },
  });

  return (
    <Box round={{ size: '3px' }} background="light-1" pad="medium" elevation="large" width={{
      max: 'calc(100% - 48px)',
      min: '512px'
    }}>
      <Heading margin={{ bottom: "10" }} level={2}>Register Top</Heading>
      <Form onSubmit={(e: any) => formik.handleSubmit(e)}>
        <FormField component={TextInput} type="email" placeholder="juriscleide@gmail.com" label="email" name="email" onChange={formik.handleChange} value={formik.values.email}/>
        <FormField component={TextInput} type="password" placeholder="senhasupersecreta.com" label="password" name="password" onChange={formik.handleChange} value={formik.values.password}/>
        <Button type="submit" label="Register" style={{ marginTop: '10px' }} primary/>
      </Form>
      <Link to='/login' style={{ marginTop: '20px' }}>
        <Anchor as='span' label="Already have an account." />
      </Link>
    </Box>
)};
