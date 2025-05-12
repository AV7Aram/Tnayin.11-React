import style from "./LoginForm.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { FbButton } from "../FbButton/FbButton";
import { loginSchema } from "../../schema/schema";

export const LoginForm = ({ onLogin, onOpenRegister, loginError, loginSuccess }) => {

    return (
        <>
            <Formik
                initialValues={{ email: "", password: "" }}
                validationSchema={loginSchema}
                onSubmit={(values, { setSubmitting }) => {
                    onLogin(values.email, values.password);
                    setSubmitting(false);
                }}
            >
                {({ errors, touched }) => (
                    <div className={style.fbLeft}>
                        <div className={style.fbContent}>
                            <div className={style.fbForm}>
                                <Form>
                                    <div className={style.fbInput}>
                                        <Field
                                            name="email"
                                            placeholder="Email or phone number"
                                            className={`${style.fbInputField} ${errors.email && touched.email ? style.errorBorder : ""}`}
                                        />
                                        <ErrorMessage name="email" component="div" className="error" />
                                    </div>
                                    <div className={style.fbInput}>
                                        <Field
                                            type="password"
                                            name="password"
                                            placeholder="Password"
                                            className={`${style.fbInputField} ${errors.password && touched.password ? style.errorBorder : ""}`}
                                        />
                                        <ErrorMessage name="password" component="div" className="error" />
                                    </div>

                                    <FbButton />
                                    <div className={style.fbButton}>
                                        <button type="button" onClick={onOpenRegister}>
                                            <a href="#">Create a new account</a>
                                        </button>
                                    </div>

                                    {loginSuccess && (
                                        <div className={style.successMsg}>✅ Login successful!</div>
                                    )}
                                    {loginError && <div className={style.error}>{loginError}</div>}

                                    {(errors.email || errors.password) && (
                                        <div className={style.error}>
                                            Please fix the errors above before submitting.
                                        </div>
                                    )}
                                </Form>
                            </div>
                            <div className={style.fbMsg}>
                                <a href="#">Create a Page</a> for a celebrity, brand or business.
                            </div>
                        </div>
                    </div>
                )}
            </Formik>
        </>
    );
};