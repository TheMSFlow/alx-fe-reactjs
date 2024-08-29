import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().required('Password is required')
});

const FormikForm = () => (
    <Formik 
        initialValus={{
        name: '',
        email: '',
        password: ''
    }}
    validationSchema={validationSchema}
    onSubmit={(values) => {
        console.log(values);
    }}>
        {() => (
            <Form>
                <label htmlFor='name'>Username:</label>
                <Field type='text' name='name' />
                <ErrorMessage name="name" component="div" />

                <label htmlFor='email'>Email:</label>
                <Field type='text' name='email' />
                <ErrorMessage name="email" component="div" />

                <label htmlFor='password'>Password:</label>
                <Field type='text' name='password' />
                <ErrorMessage name="password" component="div" />

                <button type='submit'>Submit</button>
            </Form>
        )}
    </Formik>
);

export default FormikForm;