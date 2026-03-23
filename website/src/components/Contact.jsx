import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log('Quote Request:', data);
    setSubmitted(true);
  };

  useGSAP(() => {
    gsap.from('.contact-content', {
      y: 60,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
      scrollTrigger: {
        trigger: '.contact-wrapper',
        start: 'top 80%',
      },
    });
  });

  const inputStyle = {
    width: '100%',
    padding: '12px 16px',
    background: '#1a1a1a',
    border: '1px solid #333',
    borderRadius: '8px',
    color: '#ffffff',
    fontSize: '1rem',
    fontFamily: 'Inter, sans-serif',
    outline: 'none',
    transition: 'border-color 0.2s',
  };

  const labelStyle = {
    display: 'block',
    marginBottom: '6px',
    color: '#aaaaaa',
    fontSize: '0.9rem',
  };

  const errorStyle = { color: '#ff4444', fontSize: '0.8rem', marginTop: '4px' };

  return (
    <section
      id="contact"
      className="contact-wrapper py-24 px-6"
      style={{ background: '#0a0a0a' }}
    >
      <div className="max-w-2xl mx-auto">
        <h2
          className="contact-content text-4xl md:text-5xl font-bold text-center mb-4"
          style={{ fontFamily: 'Space Grotesk, sans-serif' }}
        >
          Request a Quote
        </h2>
        <p className="contact-content text-center mb-12" style={{ color: '#888888' }}>
          Tell us about your load and we'll get back to you within 24 hours.
        </p>

        {submitted ? (
          <div
            className="contact-content text-center py-16 rounded-xl"
            style={{ background: '#1a1a1a', border: '1px solid #00ff88' }}
          >
            <div className="text-5xl mb-4">✅</div>
            <h3
              className="text-2xl font-bold mb-2"
              style={{ fontFamily: 'Space Grotesk, sans-serif', color: '#00ff88' }}
            >
              Quote Request Received
            </h3>
            <p style={{ color: '#888888' }}>We'll be in touch within 24 hours.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="contact-content">
              <label style={labelStyle}>Full Name *</label>
              <input
                {...register('fullName', { required: 'Full name is required' })}
                style={inputStyle}
                placeholder="John Smith"
                onFocus={(e) => { e.target.style.borderColor = '#00ff88'; }}
                onBlur={(e) => { e.target.style.borderColor = '#333'; }}
              />
              {errors.fullName && <p style={errorStyle}>{errors.fullName.message}</p>}
            </div>

            <div className="contact-content">
              <label style={labelStyle}>Company Name *</label>
              <input
                {...register('companyName', { required: 'Company name is required' })}
                style={inputStyle}
                placeholder="Acme Industrial LLC"
                onFocus={(e) => { e.target.style.borderColor = '#00ff88'; }}
                onBlur={(e) => { e.target.style.borderColor = '#333'; }}
              />
              {errors.companyName && <p style={errorStyle}>{errors.companyName.message}</p>}
            </div>

            <div className="contact-content">
              <label style={labelStyle}>Load Description *</label>
              <textarea
                {...register('loadDescription', { required: 'Load description is required' })}
                rows={4}
                style={{ ...inputStyle, resize: 'vertical' }}
                placeholder="Describe your load: dimensions, weight, origin, destination..."
                onFocus={(e) => { e.target.style.borderColor = '#00ff88'; }}
                onBlur={(e) => { e.target.style.borderColor = '#333'; }}
              />
              {errors.loadDescription && <p style={errorStyle}>{errors.loadDescription.message}</p>}
            </div>

            <div className="contact-content">
              <label style={labelStyle}>Phone Number *</label>
              <input
                {...register('phone', {
                  required: 'Phone number is required',
                  pattern: {
                    value: /^[+\d\s\-().]{7,}$/,
                    message: 'Enter a valid phone number',
                  },
                })}
                style={inputStyle}
                placeholder="+1 (555) 000-0000"
                onFocus={(e) => { e.target.style.borderColor = '#00ff88'; }}
                onBlur={(e) => { e.target.style.borderColor = '#333'; }}
              />
              {errors.phone && <p style={errorStyle}>{errors.phone.message}</p>}
            </div>

            <div className="contact-content">
              <button
                type="submit"
                className="w-full py-4 text-lg font-semibold rounded-md pulse-glow"
                style={{
                  background: '#00ff88',
                  color: '#0a0a0a',
                  fontFamily: 'Space Grotesk, sans-serif',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'box-shadow 0.3s ease, transform 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 0 30px rgba(0,255,136,0.6)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '';
                  e.currentTarget.style.transform = '';
                }}
              >
                Submit Quote Request
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
