import React from 'react';
import { TextInput, Button, Box, Heading, FormField, Form, Anchor, RoutedAnchor } from 'grommet';
import { useFormik } from 'formik';
import * as Icons from 'grommet-icons';
import {loginValidationSchema} from './props';
import { AuthContext } from '../../../../contexts/AuthContext';
import { colors } from 'grommet/themes/base';
import { Link } from 'react-router-dom';

export const Login = () => {
  const { authActions } = React.useContext(AuthContext);
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: loginValidationSchema,
    onSubmit: values => {
      const { email, password } = values;
      authActions.login(email, password).then((s) => console.log(s)).catch((err) => console.log(err));
    },
  });

  return (
    <Box gap="small" round={{ size: '8px' }} width={{
      max: 'calc(100% - 48px)',
      min: '512px'
    }}>
      <Box round={{size: '8px'}} background="light-1" pad="medium" elevation="large">
        <Heading margin={{ bottom: "10" }} level={2}>Login Top</Heading>
        <Form onSubmit={() => formik.handleSubmit()}>
          <FormField
            onChange={formik.handleChange}
            value={formik.values.email}
            component={TextInput}
            type="email"
            placeholder="juriscleide@gmail.com"
            label="email"
            name="email"
          />
          <FormField
            onChange={formik.handleChange}
            value={formik.values.password}
            type="password"
            placeholder="senhasupersecreta.com" 
            label="password"
            name="password" 
          />
          <Button type="submit" label="Entrar" primary />
        </Form>
      </Box>
      <Link to='/register'>
        <Anchor as='span' label="I don't have an account yet." margin={{ top: "20" }} />
      </Link>
    </Box>
)};
