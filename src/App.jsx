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

const TestTubeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon">
    <path d="M14.5 2v17.5c0 1.4-1.1 2.5-2.5 2.5h0c-1.4 0-2.5-1.1-2.5-2.5V2" />
    <path d="M8.5 2h7" />
    <path d="M14.5 16h-5" />
  </svg>
);

const FlaskIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon">
    <path d="M9 3h6" />
    <path d="M10 9h4" />
    <path d="M10 3v6" />
    <path d="M14 3v6" />
    <path d="M6 20a5 5 0 0 1 .2-9" />
    <path d="M17.8 11a5 5 0 0 1 .2 9" />
    <path d="M12 14v0" />
  </svg>
);

const LeafIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon">
    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
    <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
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
    irrigationMethod: '',
    // Removing soilType as it's now part of the new section
    // Removing weatherPatterns as temperature/humidity will be in new section
    // Removing waterSources as rainfall will be in new section
    
    // New fields for crop suitability assessment
    nitrogen: '',
    phosphorus: '',
    potassium: '',
    temperature: '',
    humidity: '',
    ph: '',
    rainfall: ''
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

              {/* Irrigation Method (moved from Soil & Water Management) */}
              <div className="form-section">
                <h2 className="section-title">Irrigation</h2>
                <p className="section-description">
                  Your irrigation method is a key factor in water management and crop health.
                  This information helps determine optimal water usage for your field.
                </p>
                
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

              {/* NEW SECTION: Crop Suitability Assessment */}
              <div className="form-section soil-analysis-section">
                <h2 className="section-title">
                  <span className="icon-wrapper"><LeafIcon /></span>
                  Crop Suitability Assessment
                </h2>
                <p className="section-description">
                  Complete the following measurements to determine the most suitable crops for your land.
                  This analysis considers soil nutrients, pH levels, and environmental conditions.
                </p>
                
                <div className="soil-grid">
                  {/* Soil Nutrients (NPK) */}
                  <div className="nutrient-group">
                    <h3 className="subsection-title">
                      <span className="icon-wrapper"><TestTubeIcon /></span>
                      Soil Nutrients (mg/kg)
                    </h3>
                    
                    <div className="nutrient-inputs">
                      <div className="form-field">
                        <label className="field-label">Nitrogen (N)</label>
                        <input
                          type="number"
                          name="nitrogen"
                          value={formData.nitrogen}
                          onChange={handleChange}
                          className="full-width-input"
                          placeholder="e.g., 80"
                          required
                        />
                      </div>
                      
                      <div className="form-field">
                        <label className="field-label">Phosphorus (P)</label>
                        <input
                          type="number"
                          name="phosphorus"
                          value={formData.phosphorus}
                          onChange={handleChange}
                          className="full-width-input"
                          placeholder="e.g., 45"
                          required
                        />
                      </div>
                      
                      <div className="form-field">
                        <label className="field-label">Potassium (K)</label>
                        <input
                          type="number"
                          name="potassium"
                          value={formData.potassium}
                          onChange={handleChange}
                          className="full-width-input"
                          placeholder="e.g., 30"
                          required
                        />
                      </div>
                    </div>
                  </div>
                  
                  {/* Soil Chemistry */}
                  <div className="chemistry-group">
                    <h3 className="subsection-title">
                      <span className="icon-wrapper"><FlaskIcon /></span>
                      Soil Chemistry
                    </h3>
                    
                    <div className="form-field">
                      <label className="field-label">pH Value</label>
                      <input
                        type="number"
                        name="ph"
                        value={formData.ph}
                        onChange={handleChange}
                        className="full-width-input"
                        placeholder="e.g., 6.5"
                        min="0"
                        max="14"
                        step="0.1"
                        required
                      />
                    </div>
                  </div>
                  
                  {/* Environmental Conditions */}
                  <div className="environment-group">
                    <h3 className="subsection-title">
                      <span className="icon-wrapper"><ThermometerIcon /></span>
                      Environmental Conditions
                    </h3>
                    
                    <div className="environment-inputs">
                      <div className="form-field">
                        <label className="field-label">Temperature (°C)</label>
                        <input
                          type="number"
                          name="temperature"
                          value={formData.temperature}
                          onChange={handleChange}
                          className="full-width-input"
                          placeholder="Average temperature"
                          required
                        />
                      </div>
                      
                      <div className="form-field">
                        <label className="field-label">Humidity (%)</label>
                        <input
                          type="number"
                          name="humidity"
                          value={formData.humidity}
                          onChange={handleChange}
                          className="full-width-input"
                          placeholder="Average humidity"
                          min="0"
                          max="100"
                          required
                        />
                      </div>
                      
                      <div className="form-field">
                        <label className="field-label">
                          <span className="icon-wrapper"><CloudRainIcon /></span>
                          Rainfall (mm/year)
                        </label>
                        <input
                          type="number"
                          name="rainfall"
                          value={formData.rainfall}
                          onChange={handleChange}
                          className="full-width-input"
                          placeholder="Average annual rainfall"
                          required
                        />
                      </div>
                    </div>
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