import { useState } from 'react';
import './index.css';

// Simple SVG icons as components
const PlantIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon">
    <path d="M15 10c.32-1.75 1.44-4 3-4 1.56 0 2.68 2.25 3 4 .32 1.75-.68 3-2 3s-2.68-1.25-3-3z" />
    <path d="M1 10c.32-1.75 1.44-4 3-4 1.56 0 2.68 2.25 3 4 .32 1.75-.68 3-2 3s-2.68-1.25-3-3z" />
    <path d="M8 14a5 5 0 0 0 8 0" />
    <path d="M12 4v20" />
  </svg>
);

const DropletsIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon">
    <path d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z" />
    <path d="M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97" />
  </svg>
);

const CloudRainIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon">
    <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" />
    <path d="M16 14v6" />
    <path d="M8 14v6" />
    <path d="M12 16v6" />
  </svg>
);

const BugIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon">
    <path d="m8 2 1.88 1.88" />
    <path d="M14.12 3.88 16 2" />
    <path d="M9 7.13v-1a3.003 3.003 0 1 1 6 0v1" />
    <path d="M12 20c-3.3 0-6-2.7-6-6v-3a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v3c0 3.3-2.7 6-6 6" />
    <path d="M12 20v-9" />
    <path d="M6.53 9C4.6 8.8 3 7.1 3 5" />
    <path d="M6 13H2" />
    <path d="M3 21c0-2.1 1.7-3.9 3.8-4" />
    <path d="M17.47 9c1.93-.2 3.53-1.9 3.53-4" />
    <path d="M18 13h4" />
    <path d="M21 21c0-2.1-1.7-3.9-3.8-4" />
  </svg>
);

const SproutIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon">
    <path d="M7 20h10" />
    <path d="M10 20c5.5-2.5.8-6.4 3-10" />
    <path d="M9.5 9.4c1.1.8 1.8 2.2 2 3.6.2-1.4.9-2.8 2-3.6 1.5-1 2.5-2.9 2.5-4.4 0 0-1 1-4 1-3 0-4-1-4-1 0 1.5 1 3.4 2.5 4.4z" />
  </svg>
);

const ThermometerIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon">
    <path d="M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z" />
  </svg>
);

const RulerIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon">
    <path d="M21.3 8.7 8.7 21.3c-1 1-2.5 1-3.4 0l-2.6-2.6c-1-1-1-2.5 0-3.4L15.3 2.7c1-1 2.5-1 3.4 0l2.6 2.6c1 1 1 2.5 0 3.4Z" />
    <path d="m7.5 10.5 2 2" />
    <path d="m10.5 7.5 2 2" />
    <path d="m13.5 4.5 2 2" />
    <path d="m4.5 13.5 2 2" />
  </svg>
);

const MountainIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon">
    <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
  </svg>
);

export default function App() {
  const [formData, setFormData] = useState({
    fieldSize: '',
    sizeUnit: 'acres',
    terrainType: '',
    cropType: '',
    plantingDate: '',
    growthStage: '',
    pestProblems: '',
    pesticideType: '',
    pesticideDate: '',
    soilType: '',
    irrigationMethod: '',
    weatherPatterns: '',
    waterSources: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted successfully!');
    console.log(formData);
  };

  return (
    <div className="page-container">
      <div className="form-container">
        <div className="form-card">
          {/* Header */}
          <div className="form-header">
            <div className="header-content">
              <div>
                <h1>Agricultural Field Information</h1>
                <p>Complete the form below to register your field data</p>
              </div>
              <div className="header-icon">
                <PlantIcon />
              </div>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="form-body">
            <div className="form-grid">
              {/* Field Size & Terrain */}
              <div className="form-section">
                <h2 className="section-title">Field Basics</h2>
                <p className="section-description">
                  Start by providing the basic information about your agricultural field. 
                  Accurate field size and terrain details help us optimize recommendations for your specific conditions.
                </p>
                
                <div className="input-group">
                  {/* Field Size */}
                  <div className="form-field">
                    <label className="field-label">
                      <span className="icon-wrapper"><RulerIcon /></span>
                      Field Size
                    </label>
                    <div className="flex-inputs">
                      <input
                        type="number"
                        name="fieldSize"
                        value={formData.fieldSize}
                        onChange={handleChange}
                        className="size-input"
                        placeholder="Size"
                        required
                      />
                      <select
                        name="sizeUnit"
                        value={formData.sizeUnit}
                        onChange={handleChange}
                        className="unit-select"
                      >
                        <option value="acres">acres</option>
                        <option value="hectares">hectares</option>
                      </select>
                    </div>
                  </div>

                  {/* Terrain Type */}
                  <div className="form-field">
                    <label className="field-label">
                      <span className="icon-wrapper"><MountainIcon /></span>
                      Terrain Type
                    </label>
                    <select
                      name="terrainType"
                      value={formData.terrainType}
                      onChange={handleChange}
                      className="full-width-input"
                      required
                    >
                      <option value="">Select terrain type</option>
                      <option value="flat">Flat</option>
                      <option value="hilly">Hilly</option>
                      <option value="terraced">Terraced</option>
                      <option value="mixed">Mixed</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Crop Information */}
              <div className="form-section crop-section">
                <h2 className="section-title">
                  <span className="icon-wrapper"><SproutIcon /></span>
                  Crop Information
                </h2>
                <p className="section-description">
                  Detailed crop information is essential for proper agricultural planning. 
                  The crop type, planting date, and current growth stage help us provide tailored recommendations for your crops.
                </p>
                
                <div className="crop-grid">
                  <div className="form-field">
                    <label className="field-label">Crop Type(s)</label>
                    <input
                      type="text"
                      name="cropType"
                      value={formData.cropType}
                      onChange={handleChange}
                      className="full-width-input"
                      placeholder="e.g., Wheat, Corn"
                      required
                    />
                  </div>
                  <div className="form-field">
                    <label className="field-label">Planting Date</label>
                    <input
                      type="date"
                      name="plantingDate"
                      value={formData.plantingDate}
                      onChange={handleChange}
                      className="full-width-input"
                      required
                    />
                  </div>
                  <div className="form-field">
                    <label className="field-label">Growth Stage</label>
                    <select
                      name="growthStage"
                      value={formData.growthStage}
                      onChange={handleChange}
                      className="full-width-input"
                      required
                    >
                      <option value="">Select stage</option>
                      <option value="germination">Germination</option>
                      <option value="seedling">Seedling</option>
                      <option value="vegetative">Vegetative</option>
                      <option value="flowering">Flowering</option>
                      <option value="ripening">Ripening</option>
                      <option value="mature">Mature</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Pest and Treatment Information */}
              <div className="form-section">
                <h2 className="section-title">Pest Management</h2>
                <p className="section-description">
                  Understanding your field's pest history and previous treatments helps in developing 
                  sustainable pest management strategies. This information enables better planning for future crop protection.
                </p>
                
                <div className="input-group">
                  {/* Pest Problems */}
                  <div className="form-field">
                    <label className="field-label">
                      <span className="icon-wrapper"><BugIcon /></span>
                      Major Pest Problems (Previous Season)
                    </label>
                    <textarea
                      name="pestProblems"
                      value={formData.pestProblems}
                      onChange={handleChange}
                      rows="3"
                      className="full-width-input"
                      placeholder="Describe any pest issues"
                    ></textarea>
                  </div>

                  {/* Pesticide Application */}
                  <div className="form-field">
                    <label className="field-label">Last Pesticide Application</label>
                    <div className="pesticide-inputs">
                      <input
                        type="text"
                        name="pesticideType"
                        value={formData.pesticideType}
                        onChange={handleChange}
                        className="pesticide-input"
                        placeholder="Type"
                      />
                      <input
                        type="date"
                        name="pesticideDate"
                        value={formData.pesticideDate}
                        onChange={handleChange}
                        className="pesticide-input"
                        placeholder="Date"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Soil and Irrigation */}
              <div className="form-section">
                <h2 className="section-title">Soil & Water Management</h2>
                <p className="section-description">
                  Soil type and irrigation method are foundational factors in your field's productivity. 
                  These details allow us to provide recommendations for soil health and water efficiency.
                </p>
                
                <div className="input-group">
                  {/* Soil Type */}
                  <div className="form-field">
                    <label className="field-label">Basic Soil Type</label>
                    <select
                      name="soilType"
                      value={formData.soilType}
                      onChange={handleChange}
                      className="full-width-input"
                      required
                    >
                      <option value="">Select soil type</option>
                      <option value="clay">Clay</option>
                      <option value="loam">Loam</option>
                      <option value="sandy">Sandy</option>
                      <option value="silt">Silt</option>
                      <option value="peaty">Peaty</option>
                      <option value="chalky">Chalky</option>
                      <option value="mixed">Mixed</option>
                    </select>
                  </div>

                  {/* Irrigation Method */}
                  <div className="form-field">
                    <label className="field-label">
                      <span className="icon-wrapper"><DropletsIcon /></span>
                      Irrigation Method
                    </label>
                    <select
                      name="irrigationMethod"
                      value={formData.irrigationMethod}
                      onChange={handleChange}
                      className="full-width-input"
                      required
                    >
                      <option value="">Select method</option>
                      <option value="drip">Drip irrigation</option>
                      <option value="sprinkler">Sprinkler system</option>
                      <option value="flood">Flood irrigation</option>
                      <option value="furrow">Furrow irrigation</option>
                      <option value="rainfall">Rainfall only</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Weather & Water Sources */}
              <div className="form-section water-section">
                <h2 className="section-title">
                  <span className="icon-wrapper"><CloudRainIcon /></span>
                  Weather & Water Sources
                </h2>
                <p className="section-description">
                  Local climate conditions and water availability significantly impact your agricultural practices. 
                  Detailed information about weather patterns and nearby water sources helps in planning for climate resilience.
                </p>
                
                <div className="water-grid">
                  <div className="form-field">
                    <label className="field-label">
                      <span className="icon-wrapper"><ThermometerIcon /></span>
                      Local Weather Patterns
                    </label>
                    <textarea
                      name="weatherPatterns"
                      value={formData.weatherPatterns}
                      onChange={handleChange}
                      rows="3"
                      className="full-width-input"
                      placeholder="Describe typical weather conditions"
                    ></textarea>
                  </div>
                  <div className="form-field">
                    <label className="field-label">Nearby Water Sources</label>
                    <textarea
                      name="waterSources"
                      value={formData.waterSources}
                      onChange={handleChange}
                      rows="3"
                      className="full-width-input"
                      placeholder="List any rivers, lakes, wells, etc."
                    ></textarea>
                  </div>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="submit-container">
              <button type="submit" className="submit-button">
                <span className="icon-wrapper"><SproutIcon /></span>
                Submit Field Information
              </button>
            </div>
          </form>
        </div>

        <div className="footer">
          © 2025 Farm Management System | All field data is securely stored
        </div>
      </div>
    </div>
  );
}
