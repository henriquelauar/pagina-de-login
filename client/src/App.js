import "./App.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import Axios from "axios";

function App() {
  const handleClickCadastro = (values) => {
    Axios.post("http://localhost:3001/login", {
      email: values.email,
      password: values.password,
    }).then((response) => {
      console.log(response);
    });
  };
  const handleClickLogin = (values) => console.log(values);

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
    <div className="app">
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
      </div>
      <div className="container">
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
    </div>
  );
}

export default App;
