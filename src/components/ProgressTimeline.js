// ProgressTimeline.jsx
import React from 'react';
import './ProgressTimeline.css'; // We'll update the CSS file

const ProgressTimeline = ({ currentStep }) => {
  const steps = [
    { id: 1, label: 'Introduction' },
    { id: 2, label: 'Technical Module' },
    { id: 3, label: 'Functional Module' },
    { id: 4, label: 'Config Workbook' },
    { id: 5, label: 'Submit' },
  ];

  return (
    <div className="progress-timeline-container">
      <div className="progress-timeline">
        {steps.map((step, index) => (
          <div key={step.id} className="timeline-step">
            <div
              className={`step-circle ${
                currentStep > step.id ? 'completed' : 
                currentStep === step.id ? 'active' : 'inactive'
              }`}
            >
              {step.id}
            </div>
            {index < steps.length - 1 && <div className="step-line"></div>}
            <span className="step-label">{step.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgressTimeline;