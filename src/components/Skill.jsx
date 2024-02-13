export default function Skill({
  defaultCV,
  count,
  showDeleteButton,
  deleteSkill,
  showInputData,
  updateInputData,
}) {
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
          placeholder={defaultCV[`skill${count}`]}
        />
        {showDeleteButton && (
          <button
            className="delete-skill-button"
            type="button"
            aria-label={`Delete Skill ${count + 1}`}
            onClick={deleteSkill}
          >
            X
          </button>
        )}
      </div>
    </>
  );
}
