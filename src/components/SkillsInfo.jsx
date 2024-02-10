import { useState } from 'react';
import '../styles/MainPage.css';
import Skill from './Skill';

export default function SkillsInfo({ showHide, onPreviousClick }) {
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
          count={i}
          showDeleteButton={i + 1 === skills ? true : false}
          deleteSkill={handleSkillDeletion}
        />,
      );
    }
    return skillsArray;
  }

  function handleSkillDeletion() {
    setSkills(skills - 1);
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
        rows={8}
        value={''}
        placeholder="I love keeping muggles in check with my shiny, little wand! Also, I try my best to stay in touch with Harry, my friend."
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
