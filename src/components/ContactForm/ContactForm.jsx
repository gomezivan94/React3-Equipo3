import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from 'yup'
import Swal from 'sweetalert2'
import emailjs from '@emailjs/browser'
import Footer from "../Footer/Footer"
import './ContactForm.css'

const validationSchema = Yup.object({
    firstName: Yup.string().required('First name is Required').max(25, 'Nombre no puede ser mayor a 25 caracteres'),
    lastName: Yup.string().required('Last name is Required').max(25, 'Apellido no puede ser mayor a 25 caracteres'),
    email: Yup.string().email('Invalid email address').required('Email address is Required').max(40, 'Email no puede ser mayor a 40 caracteres'),
    phone: Yup.string().matches(/^[0-9]+$/, 'Must be a number').required('Phone number is Required').max(20, 'Telefono no puede ser mayor a 20 caracteres').min(8, 'Telefono no pueder ser menor a 30 caracteres'),
    comments: Yup.string().required('Comments are Required').max(250, 'Comentarios no puede ser mayor a 250 caracteres').min(30, 'comentarios no pueder ser menor a 30 caracteres')
    
})



function ContactForm() {


    const handleSubmit = (values, {resetForm}) => {


        const serviceId = 'service_k9o5okc'
        const templateId = 'template_jdd7owd'
        const publicKey = 'i8MVs1bZ5vF8uEl8C'

        emailjs
        .send(serviceId, templateId, {
            to_name:'Pay 2 Win',
            from_name: values.firstName + " " + values.lastName,
            from_email: values.email,
            message: values.comments,
            phone: values.phone,
            subject: "New message",
        }, publicKey)
        .then(
            () => {
                Swal.fire({
                    icon: 'success',
                    title: 'Form submitted!',
                    text: 'Your message has been sent successfully.',
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                });
                resetForm()
            },
            (error) =>{
                Swal.fire({
                    icon: 'error',
                    title: 'Oops!',
                    text: 'Something went wrong. Please try again.',
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                });
                console.log('Emailjs error:', error)
            }
        )
    }


    return (
        <>
        <div className="container contactform">
          <h1 className="text-grey pt-2 text-center">Contactanos!</h1>
        </div>
        
    <div className="container contactform d-flex align-items-center my-5 text-grey">
      
        <div className="container">
            <div className="d-flex align-items-center justify-content-center">
            </div>
            <div className="d-flex justify-content-center">
            <Formik
            initialValues={{
              firstName: '',
              lastName: '',
              email: '',
              phone: '',
              comments: '',
            }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
            >
            {({ errors, touched }) => (
              <Form className="w-100">
                <div className="row mb-3 mt-3">
                  <div className="col-md-6">
                    <label htmlFor="firstName">Nombre</label>
                    <Field
                      type="text"
                      id="firstName"
                      name="firstName"
                      className={`form-control ${
                        errors.firstName && touched.firstName ? 'is-invalid' : ''
                      }`}
                    />
                    <ErrorMessage component="div" name="firstName" className="invalid-feedback" />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="lastName">Apellido</label>
                    <Field
                      type="text"
                      id="lastName"
                      name="lastName"
                      className={`form-control ${
                        errors.lastName && touched.lastName ? 'is-invalid' : ''
                      }`}
                    />
                    <ErrorMessage component="div" name="lastName" className="invalid-feedback" />
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-md-6">
                    <label htmlFor="email">Email</label>
                    <Field
                      type="email"
                      id="email"
                      name="email"
                      className={`form-control ${
                        errors.email && touched.email ? 'is-invalid' : ''
                      }`}
                    />
                    <ErrorMessage component="div" name="email" className="invalid-feedback" />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="phone">Telefono</label>
                    <Field
                      type="tel"
                      id="phone"
                      name="phone"
                      className={`form-control ${
                        errors.phone && touched.phone ? 'is-invalid' : ''
                      }`}
                    />
                    <ErrorMessage component="div" name="phone" className="invalid-feedback" />
                  </div>
                </div>
                <div className="mb-5">
                  <label htmlFor="comments">Comentarios</label>
                  <Field
                    as="textarea"
                    id="comments"
                    name="comments"
                    className={`form-control ${
                      errors.comments && touched.comments ? 'is-invalid' : ''
                    }`}
                  />
                  <ErrorMessage component="div" name="comments" className="invalid-feedback" />
                </div>
                <button type="submit" className="btn botonenviar btn-success btn-lg mb-5">
                  Enviar
                </button>
              </Form>
            )}
          </Formik>
            </div>
        </div>

    </div>
    <Footer/>
    </>
    )
}

export default ContactForm