import { useState } from 'react';
import { product } from '../data';
import Reveal from './Reveal';

const empty = { name: '', email: '', message: '' };

function validate(v) {
  const errors = {};
  if (!v.name.trim()) errors.name = 'Please enter your name.';
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email)) errors.email = 'Please enter a valid email address.';
  if (v.message.trim().length < 10) errors.message = 'Message should be at least 10 characters.';
  return errors;
}

export default function Contact() {
  const [values, setValues] = useState(empty);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('');

  const onChange = (e) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
    if (errors[name]) setErrors((er) => ({ ...er, [name]: undefined }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const errs = validate(values);
    setErrors(errs);
    if (Object.keys(errs).length) {
      setStatus('');
      document.getElementById(`f-${Object.keys(errs)[0]}`)?.focus();
      return;
    }
    const subject = encodeURIComponent(`${product.name} enquiry from ${values.name}`);
    const body = encodeURIComponent(`${values.message}\n\n— ${values.name} (${values.email})`);
    window.location.href = `mailto:${product.contactEmail}?subject=${subject}&body=${body}`;
    setStatus('Opening your email app… thanks for getting in touch!');
    setValues(empty);
  };

  const field = (name, label, type = 'text', props = {}) => {
    const Tag = type === 'textarea' ? 'textarea' : 'input';
    return (
      <div className={`field ${errors[name] ? 'has-error' : ''}`}>
        <label htmlFor={`f-${name}`}>{label}</label>
        <Tag
          id={`f-${name}`}
          name={name}
          type={type === 'textarea' ? undefined : type}
          value={values[name]}
          onChange={onChange}
          aria-invalid={!!errors[name]}
          aria-describedby={errors[name] ? `e-${name}` : undefined}
          {...props}
        />
        {errors[name] && (
          <p id={`e-${name}`} className="field-error">
            {errors[name]}
          </p>
        )}
      </div>
    );
  };

  return (
    <section id="contact" className="section" aria-labelledby="contact-title">
      <div className="container contact-grid">
        <Reveal className="contact-intro">
          <p className="eyebrow">Contact</p>
          <h2 id="contact-title">Ready to build better study habits?</h2>
          <p>
            Join the beta, request a feature, or ask about plans for your school or study group.
            Send a message and you'll get a reply within a day or two.
          </p>
          <ul className="contact-points">
            <li>🎓 Free for individual students</li>
            <li>🏫 Discounts for schools & universities</li>
            <li>💬 Feature ideas always welcome</li>
          </ul>
        </Reveal>

        <Reveal as="form" className="card contact-form" onSubmit={onSubmit} noValidate delay={120}>
          {field('name', 'Your name', 'text', { autoComplete: 'name', placeholder: 'Jane Doe' })}
          {field('email', 'Email address', 'email', { autoComplete: 'email', placeholder: 'jane@example.com' })}
          {field('message', 'Message', 'textarea', { rows: 5, placeholder: 'I would love to try StudyNest for…' })}
          <button type="submit" className="btn btn-primary btn-block">
            Send message
          </button>
          <p className="form-status" role="status">{status}</p>
        </Reveal>
      </div>
    </section>
  );
}
