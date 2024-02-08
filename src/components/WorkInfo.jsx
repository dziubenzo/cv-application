import '../styles/MainPage.css';
import { useState } from 'react';

export default function WorkInfo({ showHide, onPreviousClick }) {
  const [showExtraWorkInfo, setShowExtraWorkInfo] = useState(false);

  function handleShowExtraWorkInfo() {
    setShowExtraWorkInfo(showExtraWorkInfo ? false : true);
  }
  return (
    <div className={'work-info ' + showHide}>
      <h2>3 / 4</h2>
      <h2 className="work-info-header">Work Info</h2>
      <label htmlFor="company">Company:</label>
      <input
        type="text"
        id="company"
        name="company"
        value={''}
        placeholder="Ministry of Defence Against the Dark Arts"
      />
      <label htmlFor="position">Position:</label>
      <input
        type="text"
        id="position"
        name="position"
        value={''}
        placeholder="Snacks Conjurer"
      />
      <label htmlFor="start-date-company">Start Date:</label>
      <input
        type="tel"
        id="start-date-company"
        name="start-date-company"
        value={''}
        pattern="(0[1-9]|1[0-2])/(1\d{3}|2\d{3})"
        placeholder="MM/YYYY"
      />
      <label htmlFor="end-date-company">End Date:</label>
      <input
        type="tel"
        id="end-date-company"
        name="end-date-company"
        value={''}
        pattern="(0[1-9]|1[0-2])/(1\d{3}|2\d{3})"
        placeholder="MM/YYYY"
      />
      <label htmlFor="still-employed">Are you still working there?</label>
      <input type="checkbox" id="still-employed" checked={''} />
      <button
        className="extra-work-info-button"
        type="button"
        onClick={handleShowExtraWorkInfo}
      >
        {showExtraWorkInfo ? 'Hide' : 'Show'} Extra Work Info
      </button>
      <div
        className="extra-work-info"
        style={showExtraWorkInfo ? { display: 'grid' } : { display: 'none' }}
      >
        <h2 className="extra-work-info-header">Extra Work Info</h2>
        <label htmlFor="company-extra">Company:</label>
        <input type="text" id="company-extra" name="company-extra" value={''} />
        <label htmlFor="position-extra">Position:</label>
        <input
          type="text"
          id="position-extra"
          name="position-extra"
          value={''}
        />
        <label htmlFor="start-date-company-extra">Start Date:</label>
        <input
          type="tel"
          id="start-date-company-extra"
          name="start-date-company-extra"
          value={''}
          pattern="(0[1-9]|1[0-2])/(1\d{3}|2\d{3})"
        />
        <label htmlFor="end-date-company-extra">End Date:</label>
        <input
          type="tel"
          id="end-date-company-extra"
          name="end-date-company-extra"
          value={''}
          pattern="(0[1-9]|1[0-2])/(1\d{3}|2\d{3})"
        />
      </div>
      <div className="navigation-buttons">
        <button
          type="button"
          onClick={() => {
            onPreviousClick();
            setShowExtraWorkInfo(false);
          }}
        >
          <img src="/previous.svg" alt="Go To Education Info Section" />
        </button>
        <button type="button">
          <img src="/next.svg" alt="Go To Next Section" />
        </button>
      </div>
    </div>
  );
}
