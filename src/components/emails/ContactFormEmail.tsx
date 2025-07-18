import * as React from 'react';

interface ContactFormEmailProps {
  name: string;
  email: string;
  specialty: string;
  message: string;
}

export const ContactFormEmail: React.FC<Readonly<ContactFormEmailProps>> = ({
  name,
  email,
  specialty,
  message,
}) => (
  <div style={{ fontFamily: 'Arial, sans-serif', lineHeight: '1.6', color: '#333' }}>
    <h1 style={{ color: '#003366' }}>New Contact Form Submission</h1>
    <p>You have received a new message from your website's contact form.</p>
    <hr style={{ border: 'none', borderTop: '1px solid #eee' }} />
    <h2>Message Details:</h2>
    <ul>
      <li><strong>Name:</strong> {name}</li>
      <li><strong>Email:</strong> <a href={`mailto:${email}`}>{email}</a></li>
      <li><strong>Specialty/Inquiry:</strong> {specialty}</li>
    </ul>
    <h3>Message:</h3>
    <p style={{ padding: '15px', backgroundColor: '#f9f9f9', border: '1px solid #ddd', borderRadius: '5px' }}>
      {message}
    </p>
    <hr style={{ border: 'none', borderTop: '1px solid #eee' }} />
    <p style={{ fontSize: '12px', color: '#999' }}>This email was sent from the BluezoneSurgical website.</p>
  </div>
);
