import '../styles/MainPage.css';
import { useState } from 'react';
import ExtraWorkInfo from './ExtraWorkInfo';

export default function WorkInfo({ showHide, onPreviousClick }) {
  const [showExtraWorkInfo1, setShowExtraWorkInfo1] = useState(false);
  const [showExtraWorkInfo2, setShowExtraWorkInfo2] = useState(false);

  function handleShowExtraWorkInfo1() {
    setShowExtraWorkInfo1(showExtraWorkInfo1 ? false : true);
  }

  function handleShowExtraWorkInfo2() {
    setShowExtraWorkInfo2(showExtraWorkInfo2 ? false : true);
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
        onClick={handleShowExtraWorkInfo1}
      >
        {showExtraWorkInfo1 ? 'Hide' : 'Show'} Extra Work Info 1
      </button>
      <ExtraWorkInfo counter="1" show={showExtraWorkInfo1} />
      <button
        className="extra-work-info-button"
        type="button"
        onClick={handleShowExtraWorkInfo2}
      >
        {showExtraWorkInfo2 ? 'Hide' : 'Show'} Extra Work Info 2
      </button>
      <ExtraWorkInfo counter="2" show={showExtraWorkInfo2} />
      <div className="navigation-buttons">
        <button
          type="button"
          onClick={() => {
            onPreviousClick();
            setShowExtraWorkInfo1(false);
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
