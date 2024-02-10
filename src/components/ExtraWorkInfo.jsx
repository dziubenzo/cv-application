import '../styles/MainPage.css';

export default function ExtraWorkInfo({
  defaultCV,
  counter,
  show,
  showInputData,
  updateInputData,
}) {
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
        name={`companyExtra${counter}`}
        value={showInputData[`companyExtra${counter}`]}
        onChange={updateInputData}
        placeholder={defaultCV[`companyExtra${counter}`]}
      />
      <label htmlFor={`position-extra${counter}`}>Position:</label>
      <input
        type="text"
        id={`position-extra${counter}`}
        name={`positionExtra${counter}`}
        value={showInputData[`positionExtra${counter}`]}
        onChange={updateInputData}
        placeholder={defaultCV[`positionExtra${counter}`]}
      />
      <label htmlFor={`start-date-company-extra${counter}`}>Start Date:</label>
      <input
        type="tel"
        id={`start-date-company-extra${counter}`}
        name={`startDateCompanyExtra${counter}`}
        value={showInputData[`startDateCompanyExtra${counter}`]}
        onChange={updateInputData}
        pattern="(0[1-9]|1[0-2])/(1\d{3}|2\d{3})"
        placeholder={defaultCV[`startDateCompanyExtra${counter}`]}
      />
      <label htmlFor={`end-date-company-extra${counter}`}>End Date:</label>
      <input
        type="tel"
        id={`end-date-company-extra${counter}`}
        name={`endDateCompanyExtra${counter}`}
        value={showInputData[`endDateCompanyExtra${counter}`]}
        onChange={updateInputData}
        pattern="(0[1-9]|1[0-2])/(1\d{3}|2\d{3})"
        placeholder={defaultCV[`endDateCompanyExtra${counter}`]}
      />
    </div>
  );
}
