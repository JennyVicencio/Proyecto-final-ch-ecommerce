import { Col, Form, Row } from 'react-bootstrap';
import { ButtonOrder }  from '../../components/Buttons/Buttons';
import { useState } from 'react';
import { useBsValidation } from '../../hooks/useValidation';

const CheckoutForm = ({onConfirm}) => {
   const isValidated = useBsValidation();
   const [name, setName] =  useState('');
   const [phone, setPhone] =  useState('');
   const [email, setEmail] =  useState('');
   const [emailRepeat, setEmailRepeat] =  useState('');

   const handleForm = (e) => {
      const userData = { name, phone, email }
      if(isValidated) {
         onConfirm(userData);
      }
   }

   return (
      <Form className='needs-validation' noValidate onSubmit={handleForm}>
         <Row>
            <Col md={8} className='mb-4'>
               <Form.Floating>
                  <Form.Control type="text" placeholder="Placeholder text" minLength={3} id='orderName' value={name} onChange={ e => setName(e.target.value)} required />
                  <Form.Label htmlFor='orderName'>Nombre completo</Form.Label>
                  <Form.Control.Feedback type="invalid">Tu nombre debe contener al menos 3 caracteres.</Form.Control.Feedback>
               </Form.Floating>
            </Col>
            <Col md={8} className='mb-4'>
               <Form.Floating>
                  <Form.Control type="tel" placeholder="+56987654321" maxLength={14} id='orderPhone' pattern='\+(?:\d{11,15})' value={phone} onChange={ e => setPhone(e.target.value)} required />
                  <Form.Label htmlFor='orderPhone'>Teléfono</Form.Label>
                  <Form.Control.Feedback type="invalid">Debes ingresar un teléfono válido en formato +56987654321.</Form.Control.Feedback>
               </Form.Floating>
            </Col>
            <Col md={8} className='mb-4'>
               <Form.Floating>
                  <Form.Control type="email" placeholder="mail@email.com" maxLength={40} id='orderEmail' value={email} onChange={ e => setEmail(e.target.value)} required />
                  <Form.Label htmlFor='orderEmail'>Correo Electrónico</Form.Label>
                  <Form.Control.Feedback type="invalid">Debes ingresar un correo electrónico válido.</Form.Control.Feedback>
               </Form.Floating>
            </Col>
            <Col md={8} className='mb-4'>
               <Form.Floating>
                  <Form.Control type="email" placeholder="mail@email.com" maxLength={40} id='orderEmailRepeat' pattern={email} value={emailRepeat} onChange={ e => setEmailRepeat(e.target.value)} required />
                  <Form.Label htmlFor='orderEmailRepeat'>Repetir Correo Electrónico</Form.Label>
                  <Form.Control.Feedback type="invalid">El correo electrónico no concuerda.</Form.Control.Feedback>
               </Form.Floating>
            </Col>
            <Col md={8}>
               <ButtonOrder />
            </Col>
         </Row>
      </Form>
   )
}

export default CheckoutForm