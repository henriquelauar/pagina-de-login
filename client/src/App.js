import "./App.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import Axios from "Axios"

function App() {
  const handleClickCadastro = (values) => {};
  const validationCadastro = yup.object().shape({
    email: yup
      .string()
      .email("Não é um e-mail válido")
      .required("Campo obrigatório"),
    password: yup
      .string()
      .min(8, "A senha deve ter no mínimo 8 dígitos.")
      .required("Campo obrigatório"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "As senhas não são iguais"),
  });

  const handleClickLogin = (values) => console.log(values);
  const validationLogin = yup.object().shape({
    email: yup
      .string()
      .email("Não é um e-mail válido")
      .required("Campo obrigatório"),
    password: yup
      .string()
      .min(8, "A senha deve ter no mínimo 8 dígitos.")
      .required("Campo obrigatório"),
  });

  return (
    <div className="container">
      <h1>Login</h1>
      <Formik
        initialValues={{}}
        onSubmit={handleClickLogin}
        validationSchema={validationLogin}
      >
        <Form className="login-form">
          <div className="login-form-group">
            <Field name="email" className="form-field" placeholder="Email" />
            <ErrorMessage
              component="span"
              name="email"
              className="form-error"
            />
          </div>

          <div className="login-form-group">
            <Field
              name="password"
              className="form-field"
              placeholder="Password"
            />
            <ErrorMessage
              component="span"
              name="password"
              className="form-error"
            />
          </div>

          <button className="button" type="submit">
            Login
          </button>
        </Form>
      </Formik>

      <h1>Cadastro</h1>
      <Formik
        initialValues={{}}
        onSubmit={handleClickCadastro}
        validationSchema={validationCadastro}
      >
        <Form className="login-form">
          <div className="login-form-group">
            <Field name="email" className="form-field" placeholder="Email" />
            <ErrorMessage
              component="span"
              name="email"
              className="form-error"
            />
          </div>

          <div className="login-form-group">
            <Field
              name="password"
              className="form-field"
              placeholder="Password"
            />
            <ErrorMessage
              component="span"
              name="password"
              className="form-error"
            />
          </div>

          <div className="login-form-group">
            <Field
              name="confirmPassword"
              className="form-field"
              placeholder="Confirm your password"
            />
            <ErrorMessage
              component="span"
              name="confirmPassword"
              className="form-error"
            />
          </div>

          <button className="button" type="submit">
            Cadastrar
          </button>
        </Form>
      </Formik>
    </div>
  );
}

export default App;
