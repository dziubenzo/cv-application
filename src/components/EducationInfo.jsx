import '../styles/MainPage.css';

export default function EducationInfo({ showHide, onPreviousClick, onNextClick }) {
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
      <div className="navigation-buttons">
        <button type="button" onClick={onPreviousClick}>
          <img src="/previous.svg" alt="Go To Basic Info Section" />
        </button>
        <button type="button" onClick={onNextClick}>
          <img src="/next.svg" alt="Go To Work Info Section" />
        </button>
      </div>
    </div>
  );
}
