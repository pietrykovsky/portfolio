"use client";

import React, { useState, useRef } from 'react';
import { Container, Form, Button, Alert } from 'react-bootstrap';
import { useTranslations } from 'next-intl';
import styles from './page.module.css';
import ReCAPTCHA from "react-google-recaptcha";

export default function Contact() {
  const t = useTranslations('contact');
  const recaptchaRef = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    topic: '',
    message: ''
  });
  const [showAlert, setShowAlert] = useState(false);
  const [alertVariant, setAlertVariant] = useState('success');
  const [alertMessage, setAlertMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const recaptchaValue = recaptchaRef.current.getValue();
    if (!recaptchaValue) {
      setAlertVariant('danger');
      setAlertMessage(t('recaptchaRequired'));
      setShowAlert(true);
      return;
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...formData, recaptchaToken: recaptchaValue }),
      });

      const data = await response.json();

      if (data.success) {
        setAlertVariant('success');
        setAlertMessage(t('successMessage'));
        setFormData({ name: '', email: '', topic: '', message: '' });
      } else {
        setAlertVariant('danger');
        setAlertMessage(t('errorMessage'));
      }
    } catch (error) {
      console.error('Error:', error);
      setAlertVariant('danger');
      setAlertMessage(t('errorMessage'));
    }

    recaptchaRef.current.reset();
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 10000);
  };

  return (
    <Container className={styles.contactContainer}>
      <h1 className={styles.pageTitle}>{t('pageTitle')}</h1>
      {showAlert && (
        <Alert variant={alertVariant} onClose={() => setShowAlert(false)} dismissible>
          {alertMessage}
        </Alert>
      )}
      <Form onSubmit={handleSubmit} className={styles.contactForm}>
        <Form.Group className="mb-3" controlId="formName">
          <Form.Label>{t('nameLabel')}</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
            placeholder={t('namePlaceholder')}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Label>{t('emailLabel')}</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            placeholder={t('emailPlaceholder')}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formTopic">
          <Form.Label>{t('topicLabel')}</Form.Label>
          <Form.Select
            name="topic"
            value={formData.topic}
            onChange={handleInputChange}
            required
          >
            <option value="">{t('topicPlaceholder')}</option>
            {t.raw('topicOptions').map((option, index) => (
              <option key={index} value={option.value}>{option.label}</option>
            ))}
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formMessage">
          <Form.Label>{t('messageLabel')}</Form.Label>
          <Form.Control
            as="textarea"
            rows={5}
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            required
            placeholder={t('messagePlaceholder')}
          />
        </Form.Group>
        
        <div className='my-3'>
          <ReCAPTCHA
            sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_WEBSITE_KEY}
            ref={recaptchaRef}
          />
        </div>

        <div className={styles.buttonWrapper}>
          <Button variant="primary" type="submit" className={styles.submitButton}>
            {t('submitButton')}
          </Button>
        </div>
      </Form>
    </Container>
  );
}