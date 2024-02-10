import BasicInfo from './BasicInfo';
import EducationInfo from './EducationInfo';
import { useState } from 'react';
import '../styles/MainPage.css';
import WorkInfo from './WorkInfo';
import SkillsInfo from './SkillsInfo';

export default function MainPage() {
  const [showBasic, setShowBasic] = useState('');
  const [showEducation, setShowEducation] = useState('hide');
  const [showWork, setShowWork] = useState('hide');
  const [showSkills, setShowSkills] = useState('hide');
  const [inputData, setInputData] = useState({});
  const [stillEmployed, setStillEmployed] = useState(false);

  function handleHideEducation() {
    setShowEducation('hide-right');
    setShowBasic('show-left');
  }
  function handleShowEducation() {
    setShowBasic('hide-left');
    setShowEducation('show-right');
  }
  function handleHideWork() {
    setShowWork('hide-right');
    setShowEducation('show-left');
  }
  function handleShowWork() {
    setShowEducation('hide-left');
    setShowWork('show-right');
  }
  function handleHideSkills() {
    setShowSkills('hide-right');
    setShowWork('show-left');
  }
  function handleShowSkills() {
    setShowWork('hide-left');
    setShowSkills('show-right');
  }
  function handleInputData(event) {
    setInputData({
      ...inputData,
      [event.target.name]: event.target.value,
    });
  }
  function handleStillEmployed() {
    if (stillEmployed) {
      setInputData({
        ...inputData,
        endDateCompany: '',
      });
    } else {
      setInputData({
        ...inputData,
        endDateCompany: 'present',
      });
    }
    setStillEmployed(stillEmployed ? false : true);
  }
  function handleDeleteSkill(skills) {
    setInputData({
      ...inputData,
      [`skill${skills}`]: '',
    });
  }
  return (
    <main>
      <BasicInfo
        showHide={showBasic}
        onNextClick={handleShowEducation}
        showInputData={inputData}
        updateInputData={handleInputData}
      />
      <EducationInfo
        showHide={showEducation}
        onPreviousClick={handleHideEducation}
        onNextClick={handleShowWork}
        showInputData={inputData}
        updateInputData={handleInputData}
      />
      <WorkInfo
        showHide={showWork}
        onPreviousClick={handleHideWork}
        onNextClick={handleShowSkills}
        showInputData={inputData}
        updateInputData={handleInputData}
        stillEmployed={stillEmployed}
        updateStillEmployed={handleStillEmployed}
      />
      <SkillsInfo
        showHide={showSkills}
        onPreviousClick={handleHideSkills}
        showInputData={inputData}
        updateInputData={handleInputData}
        deleteSkillState={handleDeleteSkill}
      />
    </main>
  );
}
