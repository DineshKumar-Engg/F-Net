import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../../Styles/Form.css';
import { useFormik } from 'formik';

const Form = () => {
	const formik = useFormik({
		initialValues: {
			firstname: '',
			lastName: '',
			phoneNumber: '',
			email: '',
			organizationName: '',
			BussinessAddress: '',
			event: '',
			city: '',
			zipcode: '',
			message: '',
		},
		validate: (values) => {
			const errors = {};

			if (!values.firstname) {
				errors.firstname = 'Required*';
			}
			if (!values.lastName) {
				errors.lastName = 'Required*';
			}
			if (!values.phoneNumber) {
				errors.phoneNumber = 'Required*';
			} else if (!/^\d{10}$/.test(values.phoneNumber)) {
				errors.phoneNumber = 'Must be exactly 10 digits';
			}
			if (!values.email) {
				errors.email = 'Required*';
			} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
				errors.email = 'Must be valid e-mail';
			}
			if (!values.organizationName) {
				errors.organizationName = 'Required*';
			}
			if (!values.BussinessAddress) {
				errors.BussinessAddress = 'Required*';
			}
			// if (!values.event) {
			//     errors.event = 'Required*';
			// }
			if (!values.city) {
				errors.city = 'Required*';
			}
			if (!values.zipcode) {
				errors.zipcode = 'Required*';
			} else if (!/^\d{5}$/.test(values.zipcode)) {
				errors.zipcode = 'Must be exactly 5 digits';
			}

			if (!values.message) {
				errors.message = 'Required*';
			} else if (values.message.length > 2000) {
				errors.message = 'Must be 2000 characters or less';
			}

			if (Object.keys(errors).length === 0) {
				formik.setStatus({ isSubmitting: true });
			}

			return errors;
		},
		onSubmit: (values, { setSubmitting, resetForm }) => {
			setTimeout(() => {
				setSubmitting(false);
			}, 2000);
			resetForm();
		},
	});

	return (
		<Container fluid>
			<section className='formSection'>
				<Container>
					<Row className='d-flex justify-content-center align-items-center'>
						<Col lg={10} className='formSectionBackBg'>
							<Row>
								<h3>Want To Plan Your Event with Us?</h3>
							</Row>
							<Row className='d-flex justify-content-center align-items-center'>
								<Col lg={10}>
									<Row>
										<Col lg={6}>
											<input
												type='text'
												name=''
												id=''
												placeholder='First Name'
											/>
										</Col>
										<Col lg={6}>
											<input
												type='text'
												name=''
												id=''
												placeholder='Last Name'
											/>
										</Col>
										<Col lg={6}>
											<input
												type='email'
												name=''
												id=''
												placeholder='Email Address'
											/>
										</Col>
										<Col lg={6}>
											<input
												type='text'
												name=''
												id=''
												placeholder='Phone Number'
											/>
										</Col>
										<Col lg={6}>
											<input
												type='text'
												name=''
												id=''
												placeholder='Company Name'
											/>
										</Col>
										<Col lg={6}>
											<input
												type='text'
												name=''
												id=''
												placeholder='Company Address'
											/>
										</Col>
									</Row>
									<Row>
										<Col>
											<input
												type='text'
												name=''
												id=''
												placeholder='Company Location'
											/>
										</Col>
										<Col>
											<input
												type='text'
												name=''
												id=''
												placeholder='Company state'
											/>
										</Col>
										<Col>
											<input
												type='text'
												name=''
												id=''
												placeholder='Company City'
											/>
										</Col>
										<Col>
											<input
												type='text'
												name=''
												id=''
												placeholder='Company zip'
											/>
										</Col>
									</Row>
									<Row>
										<Col>
											<input
												type='text'
												name=''
												id=''
												placeholder='Event Location'
											/>
										</Col>
										<Col>
											<input
												type='text'
												name=''
												id=''
												placeholder='Event State'
											/>
										</Col>
										<Col>
											<input
												type='text'
												name=''
												id=''
												placeholder='Event City'
											/>
										</Col>
										<Col>
											<input
												type='text'
												name=''
												id=''
												placeholder='Event Zip'
											/>
										</Col>
									</Row>
									<Row>
										<Col>
											<textarea
												name=''
												id=''
												cols='30'
												rows='5'
												placeholder='Describe Your Event'></textarea>
										</Col>
									</Row>
								</Col>
							</Row>
							<Row className='d-flex justify-content-center align-items-center my-2'>
								<button>submit</button>
							</Row>
						</Col>
					</Row>
				</Container>
			</section>
		</Container>
	);
};

export default Form;
