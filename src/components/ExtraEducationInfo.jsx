export default function ExtraEducationInfo({
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
        name={`institutionExtra${counter}`}
        value={showInputData[`institutionExtra${counter}`] || ''}
        onChange={updateInputData}
        placeholder={defaultCV[`institutionExtra${counter}`]}
      />
      <label htmlFor={`programme-extra${counter}`}>Programme and Degree:</label>
      <input
        type="text"
        id={`programme-extra${counter}`}
        name={`programmeExtra${counter}`}
        value={showInputData[`programmeExtra${counter}`] || ''}
        onChange={updateInputData}
        placeholder={defaultCV[`programmeExtra${counter}`]}
      />
      <label htmlFor={`start-date-extra${counter}`}>Start Date:</label>
      <input
        type="tel"
        id={`start-date-extra${counter}`}
        name={`startDateExtra${counter}`}
        value={showInputData[`startDateExtra${counter}`] || ''}
        onChange={updateInputData}
        pattern="(0[1-9]|1[0-2])/(1\d{3}|2\d{3})"
        placeholder={defaultCV[`startDateExtra${counter}`]}
      />
      <label htmlFor={`end-date-extra${counter}`}>End Date:</label>
      <input
        type="tel"
        id={`end-date-extra${counter}`}
        name={`endDateExtra${counter}`}
        value={showInputData[`endDateExtra${counter}`] || ''}
        onChange={updateInputData}
        pattern="(0[1-9]|1[0-2])/(1\d{3}|2\d{3})"
        placeholder={defaultCV[`endDateExtra${counter}`]}
      />
    </div>
  );
}
