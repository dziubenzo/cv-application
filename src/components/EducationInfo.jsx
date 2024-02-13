import { useState } from 'react';
import ExtraEducationInfo from './ExtraEducationInfo';

export default function EducationInfo({
  defaultCV,
  showHide,
  onPreviousClick,
  onNextClick,
  showInputData,
  updateInputData,
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
        value={showInputData.institution || ''}
        onChange={updateInputData}
        placeholder={defaultCV.institution}
      />
      <label htmlFor="programme">Programme and Degree:</label>
      <input
        type="text"
        id="programme"
        name="programme"
        value={showInputData.programme || ''}
        onChange={updateInputData}
        placeholder={defaultCV.programme}
      />
      <label htmlFor="start-date">Start Date:</label>
      <input
        type="tel"
        id="start-date"
        name="startDate"
        value={showInputData.startDate || ''}
        onChange={updateInputData}
        pattern="(0[1-9]|1[0-2])/(1\d{3}|2\d{3})"
        placeholder={defaultCV.startDate}
      />
      <label htmlFor="end-date">End Date:</label>
      <input
        type="tel"
        id="end-date"
        name="endDate"
        value={showInputData.endDate || ''}
        onChange={updateInputData}
        pattern="(0[1-9]|1[0-2])/(1\d{3}|2\d{3})"
        placeholder={defaultCV.endDate}
      />
      <button
        className="extra-work-info-button"
        type="button"
        onClick={handleShowExtraEduInfo1}
      >
        {showExtraEduInfo1 ? 'Hide' : 'Show'} Extra Education Info 1
      </button>
      <ExtraEducationInfo
        defaultCV={defaultCV}
        counter="1"
        show={showExtraEduInfo1}
        showInputData={showInputData}
        updateInputData={updateInputData}
      />
      <button
        className="extra-work-info-button"
        type="button"
        onClick={handleShowExtraEduInfo2}
      >
        {showExtraEduInfo1 ? 'Hide' : 'Show'} Extra Education Info 2
      </button>
      <ExtraEducationInfo
        defaultCV={defaultCV}
        counter="2"
        show={showExtraEduInfo2}
        showInputData={showInputData}
        updateInputData={updateInputData}
      />
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
