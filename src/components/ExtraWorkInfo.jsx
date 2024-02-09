import '../styles/MainPage.css';

export default function ExtraWorkInfo({ counter, show }) {
  return (
    <div
      className={
        show
          ? `extra-work-info${counter} show`
          : `extra-work-info${counter} hide`
      }
    >
      <h2 className={`extra-work-info-header${counter}`}>
        Extra Work Info {counter}
      </h2>
      <label htmlFor={`company-extra${counter}`}>Company:</label>
      <input
        type="text"
        id={`company-extra${counter}`}
        name={`company-extra${counter}`}
        value={''}
      />
      <label htmlFor={`position-extra${counter}`}>Position:</label>
      <input
        type="text"
        id={`position-extra${counter}`}
        name={`position-extra${counter}`}
        value={''}
      />
      <label htmlFor={`start-date-company-extra${counter}`}>Start Date:</label>
      <input
        type="tel"
        id={`start-date-company-extra${counter}`}
        name={`start-date-company-extra${counter}`}
        value={''}
        pattern="(0[1-9]|1[0-2])/(1\d{3}|2\d{3})"
      />
      <label htmlFor={`end-date-company-extra${counter}`}>End Date:</label>
      <input
        type="tel"
        id={`end-date-company-extra${counter}`}
        name={`end-date-company-extra${counter}`}
        value={''}
        pattern="(0[1-9]|1[0-2])/(1\d{3}|2\d{3})"
      />
    </div>
  );
}
