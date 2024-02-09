import '../styles/MainPage.css';

export default function ExtraEducationInfo({ counter, show }) {
  return (
    <div
      className={
        show
          ? `extra-education-info${counter} show`
          : `extra-education-info${counter} hide`
      }
    >
      <h2 className={`education-info-header${counter}`}>
        Extra Education Info {counter}
      </h2>
      <label htmlFor={`institution-extra${counter}`}>Institution:</label>
      <input
        type="text"
        id={`institution-extra${counter}`}
        name={`institution-extra${counter}`}
        value={''}
      />
      <label htmlFor={`programme-extra${counter}`}>Programme and Degree:</label>
      <input
        type="text"
        id={`programme-extra${counter}`}
        name={`programme-extra${counter}`}
        value={''}
      />
      <label htmlFor={`start-date-extra${counter}`}>Start Date:</label>
      <input
        type="tel"
        id={`start-date-extra${counter}`}
        name={`start-date-extra${counter}`}
        value={''}
        pattern="(0[1-9]|1[0-2])/(1\d{3}|2\d{3})"
        placeholder="MM/YYYY"
      />
      <label htmlFor={`end-date-extra${counter}`}>End Date:</label>
      <input
        type="tel"
        id={`end-date-extra${counter}`}
        name={`end-date-extra${counter}`}
        value={''}
        pattern="(0[1-9]|1[0-2])/(1\d{3}|2\d{3})"
        placeholder="MM/YYYY"
      />
    </div>
  );
}
