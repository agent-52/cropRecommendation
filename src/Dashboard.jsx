import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  BarChart, Bar, XAxis, YAxis, Tooltip,
  CartesianGrid, ResponsiveContainer
} from 'recharts';
import "./Dashboard.css";

export default function Dashboard() {
  const location = useLocation();
  const navigate = useNavigate();
  const farmData = location.state?.farmData;

  useEffect(() => {
    if (!farmData) {
      navigate('/');
    }
  }, [farmData, navigate]);

  if (!farmData) return null;

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <div className="leaves-decoration left"></div>
        <h1 className="main-title">Farm Dashboard</h1>
        <div className="leaves-decoration right"></div>
      </div>

      <div className="recommendation-panel">
        <h2 className="recommendation-title">
          The most suitable crop for you would be <span className="highlighted-crop">{farmData.crop}</span>
        </h2>
      </div>

      <div className="dashboard-content">
        <div className="left-panel">
          <div className="data-card field-info">
            <h3>Field Information</h3>
            <div className="info-grid">
              <div className="info-item">
                <span className="info-label">Field Size:</span>
                <span className="info-value">{farmData.fieldSize} {farmData.sizeUnit}</span>
              </div>
              <div className="info-item">
                <span className="info-label">Terrain Type:</span>
                <span className="info-value">{farmData.terrainType}</span>
              </div>
              <div className="info-item">
                <span className="info-label">Irrigation Method:</span>
                <span className="info-value">{farmData.irrigationMethod}</span>
              </div>
              <div className="info-item">
                <span className="info-label">Location:</span>
                <span className="info-value">{farmData.location}</span>
              </div>
            </div>
          </div>

          <div className="data-card crop-info">
            <h3>Crop Information</h3>
            <div className="info-grid">
              <div className="info-item">
                <span className="info-label">Crop Type:</span>
                <span className="info-value">{farmData.cropType}</span>
              </div>
              <div className="info-item">
                <span className="info-label">Planting Date:</span>
                <span className="info-value">{farmData.plantingDate}</span>
              </div>
              <div className="info-item">
                <span className="info-label">Growth Stage:</span>
                <span className="info-value">{farmData.growthStage}</span>
              </div>
              {farmData.pestProblems && (
                <div className="info-item">
                  <span className="info-label">Pest Problems:</span>
                  <span className="info-value">{farmData.pestProblems}</span>
                </div>
              )}
              {farmData.pesticideType && (
                <div className="info-item">
                  <span className="info-label">Pesticide Used:</span>
                  <span className="info-value">{farmData.pesticideType} ({farmData.pesticideDate})</span>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="right-panel">
          <div className="data-card weather-panel">
            <h3>Weather Information</h3>
            <div className="weather-data">
              <div className="weather-primary">
                <div className="temp-display">
                  <span className="temp-value">{farmData.temperature}</span>
                </div>
                <div className="humidity-display">
                  <span className="weather-label">Humidity:</span>
                  <span className="weather-value">{farmData.humidity}</span>
                </div>
              </div>
              <div className="weather-secondary">
                <div className="rainfall">
                  <span className="weather-label">Rainfall:</span>
                  <span className="weather-value">{farmData.rainfall}</span>
                </div>
                <div className="forecast">
                  <span className="weather-label">Forecast:</span>
                  <span className="weather-value">{farmData.forecast || 'N/A'}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="data-card crop-calendar">
            <h3>Crop Calendar</h3>
            <div className="calendar-container">
              <div className="calendar-stage current">
                <div className="stage-marker"></div>
                <div className="stage-label">Current Stage: {farmData.growthStage}</div>
              </div>
              <div className="timeline">
                {["Planting", "Vegetative", "Reproductive", "Ripening", "Harvest"].map((stage, i) => (
                  <div
                    className={`timeline-marker ${stage.toLowerCase()} ${farmData.growthStage.toLowerCase() === stage.toLowerCase() ? 'current-stage' : ''}`}
                    key={i}
                  >
                    <span className="marker-dot"></span>
                    <span className="marker-label">{stage}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* NPK Chart */}
      {(farmData.n || farmData.p || farmData.k) && (
        <div className="data-card chart-card" style={{ marginTop: "2rem" }}>
          <h3 className="chart-title">Soil Nutrients (NPK)</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={[
              { name: 'Nitrogen (N)', value: Number(farmData.n) },
              { name: 'Phosphorus (P)', value: Number(farmData.p) },
              { name: 'Potassium (K)', value: Number(farmData.k) }
            ]}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" fill="#4caf50" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      )}

      {/* pH Display */}
      {farmData.ph && (
        <div className="data-card chart-card" style={{ marginTop: "2rem" }}>
          <h3 className="chart-title">Soil pH</h3>
          <div style={{ padding: '0 1rem' }}>
            <p>
              Current pH: <strong>{farmData.ph}</strong>{' '}
              {farmData.ph < 5.5 ? '(Acidic)' :
              farmData.ph > 7.5 ? '(Alkaline)' : '(Neutral)'}
            </p>
            <div style={{
              background: 'linear-gradient(to right, #f44336, #ffeb3b, #4caf50, #03a9f4)',
              height: '20px',
              borderRadius: '10px',
              position: 'relative',
              marginTop: '8px'
            }}>
              <div style={{
                position: 'absolute',
                left: `${(farmData.ph / 14) * 100}%`,
                top: '-8px',
                transform: 'translateX(-50%)',
                background: '#000',
                color: '#fff',
                padding: '2px 6px',
                borderRadius: '4px',
                fontSize: '12px'
              }}>
                {farmData.ph}
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="dashboard-footer">
        <p>Last updated: April 18, 2025 | Farm Management System</p>
      </div>
    </div>
  );
}
