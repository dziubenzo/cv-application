import { useState } from 'react';
import '../styles/MainPage.css';
import Skill from './Skill';

export default function SkillsInfo({
  defaultCV,
  showHide,
  onPreviousClick,
  showInputData,
  updateInputData,
  deleteSkillState,
}) {
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [skills, setSkills] = useState(3);

  function handleSkills() {
    if (skills === 10) {
      return;
    }
    setSkills(skills + 1);
    setButtonDisabled(skills === 9 && true);
  }

  function renderSkills() {
    let skillsArray = [];
    for (let i = 0; i < skills; i++) {
      skillsArray.push(
        <Skill
          key={i}
          defaultCV={defaultCV}
          count={i}
          showDeleteButton={i + 1 === skills ? true : false}
          deleteSkill={handleSkillDeletion}
          showInputData={showInputData}
          updateInputData={updateInputData}
        />,
      );
    }
    return skillsArray;
  }

  function handleSkillDeletion() {
    setSkills(skills - 1);
    deleteSkillState(skills - 1);
    setButtonDisabled(false);
  }

  return (
    <div className={'skills-info ' + showHide}>
      <h2>4 / 4</h2>
      <h2 className="skills-info-header">Skills Info</h2>
      <label htmlFor="profile">Profile Information:</label>
      <textarea
        id="profile"
        name="profile"
        rows={10}
        value={showInputData.profile}
        onChange={updateInputData}
        placeholder={defaultCV.profile}
      />
      {renderSkills()}
      <button
        className="add-skill-button"
        type="button"
        onClick={handleSkills}
        disabled={buttonDisabled}
      >
        Add Skill
      </button>
      <div className="navigation-buttons">
        <button
          type="button"
          onClick={() => {
            onPreviousClick();
          }}
        >
          <img src="/previous.svg" alt="Go To Education Info Section" />
        </button>
      </div>
    </div>
  );
}
