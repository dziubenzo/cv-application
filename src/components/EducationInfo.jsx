import '../styles/MainPage.css';
import { useState } from 'react';
import ExtraEducationInfo from './ExtraEducationInfo';

export default function EducationInfo({
  showHide,
  onPreviousClick,
  onNextClick,
}) {
  const [showExtraEduInfo1, setShowExtraEduInfo1] = useState(false);
  const [showExtraEduInfo2, setShowExtraEduInfo2] = useState(false);

  function handleShowExtraEduInfo1() {
    setShowExtraEduInfo1(showExtraEduInfo1 ? false : true);
  }

  function handleShowExtraEduInfo2() {
    setShowExtraEduInfo2(showExtraEduInfo2 ? false : true);
  }
  return (
    <div className={'education-info ' + showHide}>
      <h2>2 / 4</h2>
      <h2 className="education-info-header">Education Info</h2>
      <label htmlFor="institution">Institution:</label>
      <input
        type="text"
        id="institution"
        name="institution"
        value={''}
        placeholder="Hogwarts School of Witchcraft and Wizardry"
      />
      <label htmlFor="programme">Programme and Degree:</label>
      <input
        type="text"
        id="programme"
        name="programme"
        value={''}
        placeholder="PhD in General Wizardry"
      />
      <label htmlFor="start-date">Start Date:</label>
      <input
        type="tel"
        id="start-date"
        name="start-date"
        value={''}
        pattern="(0[1-9]|1[0-2])/(1\d{3}|2\d{3})"
        placeholder="MM/YYYY"
      />
      <label htmlFor="end-date">End Date:</label>
      <input
        type="tel"
        id="end-date"
        name="end-date"
        value={''}
        pattern="(0[1-9]|1[0-2])/(1\d{3}|2\d{3})"
        placeholder="MM/YYYY"
      />
      <button
        className="extra-work-info-button"
        type="button"
        onClick={handleShowExtraEduInfo1}
      >
        {showExtraEduInfo1 ? 'Hide' : 'Show'} Extra Education Info 1
      </button>
      <ExtraEducationInfo counter="1" show={showExtraEduInfo1} />
      <button
        className="extra-work-info-button"
        type="button"
        onClick={handleShowExtraEduInfo2}
      >
        {showExtraEduInfo1 ? 'Hide' : 'Show'} Extra Education Info 2
      </button>
      <ExtraEducationInfo counter="2" show={showExtraEduInfo2} />
      <div className="navigation-buttons">
        <button
          type="button"
          onClick={() => {
            onPreviousClick();
            setShowExtraEduInfo1(false);
            setShowExtraEduInfo2(false);
          }}
        >
          <img src="/previous.svg" alt="Go To Basic Info Section" />
        </button>
        <button
          type="button"
          onClick={() => {
            onNextClick();
            setShowExtraEduInfo1(false);
            setShowExtraEduInfo2(false);
          }}
        >
          <img src="/next.svg" alt="Go To Work Info Section" />
        </button>
      </div>
    </div>
  );
}
