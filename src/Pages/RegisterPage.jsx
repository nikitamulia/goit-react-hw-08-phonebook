import { useDispatch } from "react-redux";
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import operations from "redux/auth/auth-operations";
import { Box, Input, InputIcon, AuthLabel, LogBtn, RegBtn} from "./RegisterPageStyled"

export default function RegisterPage(){
    const dispatch = useDispatch();
   
    const SignupSchema = Yup.object({
      email: Yup.string()
        .email('Invalid email, please try another')
        .required('Required'),
      password: Yup.string()
        .min(6, 'Too Short! Min length 6')
        .max(12, 'Too Long! Max lenght 12')
        .required('Required'),
      name: Yup.string()
        .min(1, 'Too Short! Min length 1')
        .max(12, 'Too Long! Max lenght 12')
        .required('Required'),
    });
    return(
        <Box>
            <Formik
              initialValues={{
                password: '',
                email: '',
                name: '',
              }}
              validationSchema={SignupSchema}
              onSubmit={values => {
                  dispatch(
                    operations.register({
                      email: values.email,
                      password: values.password,
                      name: values.name,
                    })
                    );
              }}
            >
          {({ errors, touched, values, handleChange }) => (
            <Form>
            <AuthLabel>
              <Input
                placeholder="E-mail"
                onChange={handleChange}
                name="email"
                value={values.email}
                autoComplete="off"
              ></Input>
              <InputIcon width="21" height="16" >
                <path
                  d="M18 0H2C.9 0 .00999999.9.00999999 2L0 14c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2Zm0 4-8 5-8-5V2l8 5 8-5v2Z"
                  fill="#E0E0E0"
                />
              </InputIcon>
            </AuthLabel>
            {errors.email && touched.email ? (
                  <div>{errors.email}</div>
                ) : null}

            <AuthLabel>
              <Input
                placeholder="Password"
                onChange={handleChange}
                name="password"
                type="password"
                value={values.password}
                autoComplete="off"
              ></Input>
              <InputIcon width="16" height="21" >
                <path
                  d="M14 7h-1V5c0-2.76-2.24-5-5-5S3 2.24 3 5v2H2C.9 7 0 7.9 0 9v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2Zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2Zm3.1-9H4.9V5c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2Z"
                  fill="#E0E0E0"
                />
              </InputIcon>
            </AuthLabel>
            {errors.password && touched.password ? (
                <div>{errors.password}</div>
              ) : null}

            
            <AuthLabel>
              <Input
                onChange={handleChange}
                value={values.name}
                placeholder="Name"
                name="name"
              ></Input>
              <InputIcon width="18" height="18" >
                <path d="M0 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2H2C.89 0 0 .9 0 2Zm12 4c0 1.66-1.34 3-3 3S6 7.66 6 6s1.34-3 3-3 3 1.34 3 3Zm-9 8c0-2 4-3.1 6-3.1s6 1.1 6 3.1v1H3v-1Z"
                  fill="#E0E0E0"
                />
              </InputIcon>
            </AuthLabel>
            {errors.name && touched.name ? (
                <div>{errors.name}</div>
              ) : null}

                <div>
                <RegBtn type="submit">
                REGISTER
                </RegBtn>
                <LogBtn to='/login'>
                LOG IN
                </LogBtn>
              </div>
              </Form>
          )}
        </Formik>
        </Box>
    )
}
