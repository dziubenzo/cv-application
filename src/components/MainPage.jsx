import BasicInfo from './BasicInfo';
import EducationInfo from './EducationInfo';
import { useState } from 'react';
import WorkInfo from './WorkInfo';
import SkillsInfo from './SkillsInfo';
import DefaultCVButton from './DefaultCVButton';
import PreviewButton from './PreviewButton';
import Preview from './Preview';

export default function MainPage({ defaultCV }) {
  const [showBasic, setShowBasic] = useState('');
  const [showEducation, setShowEducation] = useState('hide');
  const [showWork, setShowWork] = useState('hide');
  const [showSkills, setShowSkills] = useState('hide');
  const [inputData, setInputData] = useState({});
  const [stillEmployed, setStillEmployed] = useState(false);
  const [showPreview, setShowPreview] = useState(false);

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
  function showDefaultCV() {
    setInputData(defaultCV);
    setStillEmployed(true);
  }
  function handleShowPreview() {
    setShowPreview(showPreview ? false : true);
  }
  return (
    <>
      <main>
        <BasicInfo
          defaultCV={defaultCV}
          showHide={showBasic}
          onNextClick={handleShowEducation}
          showInputData={inputData}
          updateInputData={handleInputData}
        />
        <EducationInfo
          defaultCV={defaultCV}
          showHide={showEducation}
          onPreviousClick={handleHideEducation}
          onNextClick={handleShowWork}
          showInputData={inputData}
          updateInputData={handleInputData}
        />
        <WorkInfo
          defaultCV={defaultCV}
          showHide={showWork}
          onPreviousClick={handleHideWork}
          onNextClick={handleShowSkills}
          showInputData={inputData}
          updateInputData={handleInputData}
          stillEmployed={stillEmployed}
          updateStillEmployed={handleStillEmployed}
        />
        <SkillsInfo
          defaultCV={defaultCV}
          showHide={showSkills}
          onPreviousClick={handleHideSkills}
          showInputData={inputData}
          updateInputData={handleInputData}
          deleteSkillState={handleDeleteSkill}
        />
        <DefaultCVButton showDefaultCV={showDefaultCV} />
        <PreviewButton
          showPreview={showPreview}
          handleShowPreview={handleShowPreview}
        />
      </main>
      <Preview
        handleShowPreview={handleShowPreview}
        showPreview={showPreview}
        data={inputData}
      />
    </>
  );
}
