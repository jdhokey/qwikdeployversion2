import React, { useState } from 'react';
import Navbar from './Navbar';
import UpperNavbar from './VerticalNavbar';
import ProgressTimeline from './ProgressTimeline';

const AddProject = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [formData, setFormData] = useState({
    projectName: '',
    projectStartDate: '',
    projectStatus: '',
    environments: [],
    projectManager: '',
    projectGoLiveDate: '',
    technicalLead: '',
    technicalStartDate: '',
    technicalEndDate: '',
    technicalTeam: '',
    components: [],
    functionalLead: '',
    functionalStartDate: '',
    functionalEndDate: '',
    functionalTeam: '',
    modules: [],
    ifa: '',
  });
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleNext = () => {
    if (currentStep < 5) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);
    setSelectedFiles(files);
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      if (name === 'environments') {
        const updatedEnvironments = checked
          ? [...formData.environments, value]
          : formData.environments.filter((env) => env !== value);
        setFormData({ ...formData, environments: updatedEnvironments });
      } else if (name === 'components' || name === 'modules') {
        const updatedArray = checked
          ? [...formData[name], value]
          : formData[name].filter((item) => item !== value);
        setFormData({ ...formData, [name]: updatedArray });
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = () => {
    // Basic validation
    if (!formData.projectName || !formData.projectStartDate || !formData.projectStatus) {
      alert('Please fill in required fields: Project Name, Start Date, and Status.');
      return;
    }
    setShowConfirmation(true);
  };

  const closeConfirmation = () => {
    setShowConfirmation(false);
  };

  const renderFormSection = () => {
    switch (currentStep) {
      case 1:
        return (
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start' }}>
            <div style={{ display: 'flex', gap: '70px', width: '1000px' }}>
              <div style={{ width: '50%', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                  <div style={{ color: '#535455', fontSize: 15, fontFamily: 'Open Sans', fontWeight: 400 }}>Project Name</div>
                  <input
                    type="text"
                    name="projectName"
                    value={formData.projectName}
                    style={{ width: '100%', height: '33.46px', border: '1px solid #A19D9D', borderRadius: '4px', padding: '5px' }}
                    placeholder="Enter Project Name"
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                  <div style={{ color: '#535455', fontSize: 15, fontFamily: 'Open Sans', fontWeight: 400 }}>Project Start Date</div>
                  <input
                    type="date"
                    name="projectStartDate"
                    value={formData.projectStartDate}
                    style={{ width: '100%', height: '33.46px', border: '1px solid #A19D9D', borderRadius: '4px', padding: '5px' }}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                  <div style={{ color: '#535455', fontSize: 15, fontFamily: 'Open Sans', fontWeight: 400 }}>Project Status</div>
                  <select
                    name="projectStatus"
                    value={formData.projectStatus}
                    style={{ width: '100%', height: '33.46px', border: '1px solid #A19D9D', borderRadius: '4px', padding: '5px' }}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Select the Status</option>
                    <option value="Active">Active</option>
                    <option value="Inactive">Inactive</option>
                  </select>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                  <div style={{ color: '#535455', fontSize: 15, fontFamily: 'Open Sans', fontWeight: 400 }}>Environments Required</div>
                  <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                    {['Dev1', 'Dev2', 'SIT', 'Prod'].map((env) => (
                      <label key={env} style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                        <input
                          type="checkbox"
                          name="environments"
                          value={env}
                          checked={formData.environments.includes(env)}
                          onChange={handleInputChange}
                        /> {env}
                      </label>
                    ))}
                  </div>
                </div>
              </div>
              <div style={{ width: '50%', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                  <div style={{ color: '#535455', fontSize: 15, fontFamily: 'Open Sans', fontWeight: 400 }}>Project Manager Name</div>
                  <input
                    type="text"
                    name="projectManager"
                    value={formData.projectManager}
                    style={{ width: '100%', height: '33.46px', border: '1px solid #A19D9D', borderRadius: '4px', padding: '5px' }}
                    placeholder="Enter Project Manager Name"
                    onChange={handleInputChange}
                  />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                  <div style={{ color: '#535455', fontSize: 15, fontFamily: 'Open Sans', fontWeight: 400 }}>Project Go-live Date</div>
                  <input
                    type="date"
                    name="projectGoLiveDate"
                    value={formData.projectGoLiveDate}
                    style={{ width: '100%', height: '33.46px', border: '1px solid #A19D9D', borderRadius: '4px', padding: '5px' }}
                    onChange={handleInputChange}
                  />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                  <div style={{ color: '#535455', fontSize: 15, fontFamily: 'Open Sans', fontWeight: 400 }}>Upload Project Logo</div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <input
                      type="file"
                      id="logoUpload"
                      style={{ display: 'none' }}
                      accept=".png,.jpg"
                      onChange={handleFileChange}
                    />
                    <label htmlFor="logoUpload">
                      <button style={{ width: '103.69px', height: '33.46px', background: '#007CB0', color: 'white', borderRadius: '4px' }}>
                        Choose file
                      </button>
                    </label>
                    <div style={{ fontSize: 12 }}>
                      {selectedFiles.length > 0 ? `${selectedFiles[0].name}` : 'No file selected (.png, .jpg)'}
                    </div>
                  </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                  <div style={{ color: '#535455', fontSize: 15, fontFamily: 'Open Sans', fontWeight: 400 }}>IFA</div>
                  <div style={{ display: 'flex', gap: '10px' }}>
                    {['Yes', 'No'].map((option) => (
                      <label key={option} style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                        <input
                          type="radio"
                          name="ifa"
                          value={option}
                          checked={formData.ifa === option}
                          onChange={handleInputChange}
                        /> {option}
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      case 2:
        return (
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start' }}>
            <div style={{ display: 'flex', gap: '70px', width: '1000px' }}>
              <div style={{ width: '50%', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                  <div style={{ color: '#535455', fontSize: 15, fontFamily: 'Open Sans', fontWeight: 400 }}>Technical Lead Name</div>
                  <input
                    type="text"
                    name="technicalLead"
                    value={formData.technicalLead}
                    style={{ width: '100%', height: '33.46px', border: '1px solid #A19D9D', borderRadius: '4px', padding: '5px' }}
                    placeholder="Enter Technical Lead Name"
                    onChange={handleInputChange}
                  />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                  <div style={{ color: '#535455', fontSize: 15, fontFamily: 'Open Sans', fontWeight: 400 }}>Technical Development Start Date</div>
                  <input
                    type="date"
                    name="technicalStartDate"
                    value={formData.technicalStartDate}
                    style={{ width: '100%', height: '33.46px', border: '1px solid #A19D9D', borderRadius: '4px', padding: '5px' }}
                    onChange={handleInputChange}
                  />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <div style={{ color: '#535455', fontSize: 15, fontFamily: 'Open Sans', fontWeight: 400 }}>Components Required</div>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '15px', padding: '10px', background: '#f9f9f9', borderRadius: '4px' }}>
                    {[
                      'Delivered Notifications', 'Custom RTF Template', 'OAC Data Visualization', 'Custom Analysis',
                      'Delivered OTB1 Dashboard', 'Delivered BIP Dashboard', 'SSO Reconfiguration', 'Custom BIP Report',
                      'Custom ODA Intent', 'Custom OTB1 Dashboard', 'Redirection Link', 'Custom Notifications',
                      'Custom PaaS Report', 'Alert Composer', 'Custom Web Portal', 'Fast Formula',
                      'Auto complete Rules', 'Loopback Integration'
                    ].map((component) => (
                      <label key={component} style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '14px' }}>
                        <input
                          type="checkbox"
                          name="components"
                          value={component}
                          checked={formData.components.includes(component)}
                          onChange={handleInputChange}
                        /> {component}
                      </label>
                    ))}
                  </div>
                </div>
              </div>
              <div style={{ width: '50%', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                  <div style={{ color: '#535455', fontSize: 15, fontFamily: 'Open Sans', fontWeight: 400 }}>Technical Team Members</div>
                  <input
                    type="text"
                    name="technicalTeam"
                    value={formData.technicalTeam}
                    style={{ width: '100%', height: '33.46px', border: '1px solid #A19D9D', borderRadius: '4px', padding: '5px' }}
                    placeholder="Enter names (e.g., Name1; Name2; Name3)"
                    onChange={handleInputChange}
                  />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                  <div style={{ color: '#535455', fontSize: 15, fontFamily: 'Open Sans', fontWeight: 400 }}>Technical Development End Date</div>
                  <input
                    type="date"
                    name="technicalEndDate"
                    value={formData.technicalEndDate}
                    style={{ width: '100%', height: '33.46px', border: '1px solid #A19D9D', borderRadius: '4px', padding: '5px' }}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </div>
          </div>
        );
      case 3:
        return (
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start' }}>
            <div style={{ display: 'flex', gap: '70px', width: '1000px' }}>
              <div style={{ width: '50%', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                  <div style={{ color: '#535455', fontSize: 15, fontFamily: 'Open Sans', fontWeight: 400 }}>Functional Lead Name</div>
                  <input
                    type="text"
                    name="functionalLead"
                    value={formData.functionalLead}
                    style={{ width: '100%', height: '33.46px', border: '1px solid #A19D9D', borderRadius: '4px', padding: '5px' }}
                    placeholder="Enter Functional Lead Name"
                    onChange={handleInputChange}
                  />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                  <div style={{ color: '#535455', fontSize: 15, fontFamily: 'Open Sans', fontWeight: 400 }}>Functional Development Start Date</div>
                  <input
                    type="date"
                    name="functionalStartDate"
                    value={formData.functionalStartDate}
                    style={{ width: '100%', height: '33.46px', border: '1px solid #A19D9D', borderRadius: '4px', padding: '5px' }}
                    onChange={handleInputChange}
                  />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                  <div style={{ color: '#535455', fontSize: 15, fontFamily: 'Open Sans', fontWeight: 400 }}>Module Required</div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                    {['Oracle Core HR', 'Oracle Recruiting Cloud', 'Benefits', 'Absence Management', 'HelpDesk Management'].map((module) => (
                      <label key={module} style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                        <input
                          type="checkbox"
                          name="modules"
                          value={module}
                          checked={formData.modules.includes(module)}
                          onChange={handleInputChange}
                        /> {module}
                      </label>
                    ))}
                  </div>
                </div>
              </div>
              <div style={{ width: '50%', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                  <div style={{ color: '#535455', fontSize: 15, fontFamily: 'Open Sans', fontWeight: 400 }}>Functional Team Members</div>
                  <select
                    name="functionalTeam"
                    value={formData.functionalTeam}
                    style={{ width: '100%', height: '33.46px', border: '1px solid #A19D9D', borderRadius: '4px', padding: '5px' }}
                    onChange={handleInputChange}
                  >
                    <option value="">Select Team Members</option>
                    <option value="Team1">Team 1</option>
                    <option value="Team2">Team 2</option>
                    <option value="Team3">Team 3</option>
                  </select>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                  <div style={{ color: '#535455', fontSize: 15, fontFamily: 'Open Sans', fontWeight: 400 }}>Functional Development End Date</div>
                  <input
                    type="date"
                    name="functionalEndDate"
                    value={formData.functionalEndDate}
                    style={{ width: '100%', height: '33.46px', border: '1px solid #A19D9D', borderRadius: '4px', padding: '5px' }}
                    onChange={handleInputChange}
                  />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                  <div style={{ color: '#535455', fontSize: 15, fontFamily: 'Open Sans', fontWeight: 400 }}>Module Required</div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                    {['Payroll', 'Learning Management System', 'Security', 'Oracle Time and Labour', 'Performance Management', 'Functional Setup Manager(FSM)'].map((module) => (
                      <label key={module} style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                        <input
                          type="checkbox"
                          name="modules"
                          value={module}
                          checked={formData.modules.includes(module)}
                          onChange={handleInputChange}
                        /> {module}
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      case 4:
        return (
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '600px', textAlign: 'center' }}>
              <div style={{ color: '#535455', fontSize: 15, fontFamily: 'Open Sans', fontWeight: 400, marginBottom: '10px' }}>
                Upload Configuration Workbook for CoreHR
              </div>
              <div style={{ border: '2px dashed #A19D9D', borderRadius: '4px', width: '100%', height: '200px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', background: '#f9f9f9', marginBottom: '10px' }}>
                <span style={{ color: '#666', fontSize: '14px' }}>Drag and drop here or</span>
                <input
                  type="file"
                  multiple
                  style={{ display: 'none' }}
                  id="fileUpload"
                  accept=".xlsx,.xls"
                  onChange={handleFileChange}
                />
                <label htmlFor="fileUpload">
                  <button style={{ width: '100px', height: '35px', background: '#007CB0', color: 'white', borderRadius: '4px', marginTop: '10px' }}>Choose File</button>
                </label>
                <span style={{ color: '#666', fontSize: '12px', marginTop: '5px' }}>
                  {selectedFiles.length > 0 ? `${selectedFiles.length} file(s) selected` : 'No file selected'}
                </span>
              </div>
              {selectedFiles.length > 0 && (
                <div style={{ textAlign: 'left', width: '100%', maxHeight: '100px', overflowY: 'auto', marginTop: '10px' }}>
                  <ul style={{ padding: 0, listStyle: 'none' }}>
                    {selectedFiles.map((file, index) => (
                      <li key={file.name + index} style={{ fontSize: '12px', color: '#535455' }}>
                        {file.name}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        );
      case 5:
        return (
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', padding: '20px' }}>
            <div style={{ width: '1000px', textAlign: 'left' }}>
              <h3 style={{ color: '#535455', fontSize: 18, fontFamily: 'Open Sans', fontWeight: 600 }}>Review Submission</h3>
              <div style={{ marginTop: '20px' }}>
                <h4 style={{ color: '#535455', fontSize: 16, fontFamily: 'Open Sans', fontWeight: 600 }}>Introduction</h4>
                <p><strong>Project Name:</strong> {formData.projectName || 'Not specified'}</p>
                <p><strong>Project Start Date:</strong> {formData.projectStartDate || 'Not specified'}</p>
                <p><strong>Project Status:</strong> {formData.projectStatus || 'Not specified'}</p>
                <p><strong>Environments Required:</strong> {formData.environments.length > 0 ? formData.environments.join(', ') : 'None'}</p>
                <p><strong>Project Manager:</strong> {formData.projectManager || 'Not specified'}</p>
                <p><strong>Project Go-live Date:</strong> {formData.projectGoLiveDate || 'Not specified'}</p>
                <p><strong>IFA:</strong> {formData.ifa || 'Not specified'}</p>

                <h4 style={{ color: '#535455', fontSize: 16, fontFamily: 'Open Sans', fontWeight: 600, marginTop: '20px' }}>Technical Module</h4>
                <p><strong>Technical Lead:</strong> {formData.technicalLead || 'Not specified'}</p>
                <p><strong>Technical Start Date:</strong> {formData.technicalStartDate || 'Not specified'}</p>
                <p><strong>Technical End Date:</strong> {formData.technicalEndDate || 'Not specified'}</p>
                <p><strong>Technical Team:</strong> {formData.technicalTeam || 'Not specified'}</p>
                <p><strong>Components Required:</strong> {formData.components.length > 0 ? formData.components.join(', ') : 'None'}</p>

                <h4 style={{ color: '#535455', fontSize: 16, fontFamily: 'Open Sans', fontWeight: 600, marginTop: '20px' }}>Functional Module</h4>
                <p><strong>Functional Lead:</strong> {formData.functionalLead || 'Not specified'}</p>
                <p><strong>Functional Start Date:</strong> {formData.functionalStartDate || 'Not specified'}</p>
                <p><strong>Functional End Date:</strong> {formData.functionalEndDate || 'Not specified'}</p>
                <p><strong>Functional Team:</strong> {formData.functionalTeam || 'Not specified'}</p>
                <p><strong>Modules Required:</strong> {formData.modules.length > 0 ? formData.modules.join(', ') : 'None'}</p>

                <h4 style={{ color: '#535455', fontSize: 16, fontFamily: 'Open Sans', fontWeight: 600, marginTop: '20px' }}>Config Workbook</h4>
                <p><strong>Files Uploaded:</strong> {selectedFiles.length > 0 ? selectedFiles.map(file => file.name).join(', ') : 'None'}</p>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div style={{ width: '100%', height: '100vh', background: 'white', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      <div style={{ flex: 1, display: 'flex' }}>
        <UpperNavbar />
        <div style={{ flex: 1, padding: '20px', display: 'flex', flexDirection: 'column', marginLeft: '200px' }}>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
            <ProgressTimeline currentStep={currentStep} />
          </div>
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            {renderFormSection()}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginTop: '40px' }}>
              <button
                style={{ width: '115px', height: '35px', background: '#007CB0', color: 'white', borderRadius: '4px' }}
                onClick={handleBack}
                disabled={currentStep === 1}
              >
                Back
              </button>
              <button style={{ width: '115px', height: '35px', background: '#D2CFCF', color: '#535455', borderRadius: '4px' }}>
                Save as Draft
              </button>
              {currentStep === 5 ? (
                <button
                  style={{ width: '115px', height: '35px', background: '#007CB0', color: 'white', borderRadius: '4px' }}
                  onClick={handleSubmit}
                >
                  Submit
                </button>
              ) : (
                <button
                  style={{ width: '115px', height: '35px', background: '#007CB0', color: 'white', borderRadius: '4px' }}
                  onClick={handleNext}
                >
                  Next
                </button>
              )}
            </div>
            {showConfirmation && (
              <div style={{
                position: 'fixed',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                background: 'white',
                padding: '20px',
                border: '1px solid #ccc',
                borderRadius: '4px',
                boxShadow: '0 0 10px rgba(0,0,0,0.1)',
                zIndex: 1000,
                textAlign: 'center',
                width: '300px'
              }}>
                <p style={{ color: '#535455', fontSize: '14px', fontFamily: 'Open Sans' }}>Action has been successful</p>
                <button
                  style={{ width: '80px', height: '35px', background: '#007CB0', color: 'white', borderRadius: '4px', marginTop: '15px' }}
                  onClick={closeConfirmation}
                >
                  Okay
                </button>
              </div>
            )}
            {showConfirmation && <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.5)', zIndex: 999 }} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProject;