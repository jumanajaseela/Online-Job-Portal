import React from 'react';
import './TopCompanies.css';

const companies = [
  { name: 'Google', logo: 'https://logo.clearbit.com/google.com' },
  
  { name: 'Microsoft', logo: 'https://logo.clearbit.com/microsoft.com' },
];

function TopCompanies() {
  return (
    <section className="top-companies">
      <h2>Top Companies Hiring</h2>
      <div className="company-logos">
        {companies.map((company, index) => (
          <div key={index} className="company-card">
            <img src={company.logo} alt={company.name} />
            <p>{company.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TopCompanies;
