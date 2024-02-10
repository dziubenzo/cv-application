import '../styles/MainPage.css';

export default function Skill({
  count,
  showDeleteButton,
  deleteSkill,
  showInputData,
  updateInputData,
}) {
  const spells = [
    'Alohomora',
    'Avada Kedavra',
    'Cruciatus',
    'Protego',
    'Petrificus Totalus',
    'Reparo',
    'Wingardium Leviosa',
    'Petrificus Totalus',
    'Expelliarmus',
    'Lumos',
  ];
  return (
    <>
      <label htmlFor={`skill${count}`}>Skill {count + 1}</label>
      <div className="skill-line">
        <input
          type="text"
          id={`skill${count}`}
          name={`skill${count}`}
          value={showInputData[`skill${count}`]}
          onChange={updateInputData}
          placeholder={spells[count]}
        />
        {showDeleteButton && (
          <button
            className="delete-skill-button"
            type="button"
            onClick={deleteSkill}
          >
            X
          </button>
        )}
      </div>
    </>
  );
}
