import React from 'react';
import './HowItWorks.css';

function HowItWorks() {
  const steps = [
    { title: 'Sign Up', desc: 'Create your free account as a Candidate or Recruiter.' },
    { title: 'Post or Apply', desc: 'Recruiters post jobs, candidates apply easily.' },
    { title: 'Get Hired', desc: 'Connect, interview, and land your dream job!' },
  ];

  return (
    <section className="how-it-works">
      <h2>How It Works</h2>
      <div className="steps">
        {steps.map((step, index) => (
          <div key={index} className="step-card">
            <h3>{step.title}</h3>
            <p>{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default HowItWorks;
