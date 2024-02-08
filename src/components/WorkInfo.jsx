import '../styles/MainPage.css';

export default function WorkInfo({ showHide, onPreviousClick }) {
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
      <label htmlFor="working">Still working there?</label>
      <input type="checkbox" id="working" checked={''} />
      <div className="navigation-buttons">
        <button type="button" onClick={onPreviousClick}>
          <img src="/previous.svg" alt="Go To Education Info Section" />
        </button>
        <button type="button">
          <img src="/next.svg" alt="Go To Next Section" />
        </button>
      </div>
    </div>
  );
}
