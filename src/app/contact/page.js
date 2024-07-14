"use client";

import React, { useState } from 'react';
import { Container, Form, Button, Alert } from 'react-bootstrap';
import { useTranslations } from 'next-intl';
import styles from './page.module.css';

export default function Contact() {
  const t = useTranslations('contact');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    topic: '',
    message: ''
  });
  const [showAlert, setShowAlert] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // todo: send form data to backend
    console.log(formData);
    setShowAlert(true);
    setFormData({ name: '', email: '', topic: '', message: '' });
    setTimeout(() => setShowAlert(false), 3000);
  };

  return (
    <Container className={styles.contactContainer}>
      <h1 className={styles.pageTitle}>{t('pageTitle')}</h1>
      {showAlert && (
        <Alert variant="success" onClose={() => setShowAlert(false)} dismissible>
          {t('successMessage')}
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

        <div className={styles.buttonWrapper}>
          <Button variant="primary" type="submit" className={styles.submitButton}>
            {t('submitButton')}
          </Button>
        </div>
      </Form>
    </Container>
  );
}