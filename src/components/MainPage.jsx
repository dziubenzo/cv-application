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
  const [hideButtons, setHideButtons] = useState(false);

  function handleHideEducation() {
    setShowEducation('hide-right');
    setShowBasic('show-left');
    handleHideButtons();
  }
  function handleShowEducation() {
    setShowBasic('hide-left');
    setShowEducation('show-right');
    handleHideButtons();
  }
  function handleHideWork() {
    setShowWork('hide-right');
    setShowEducation('show-left');
    handleHideButtons();
  }
  function handleShowWork() {
    setShowEducation('hide-left');
    setShowWork('show-right');
    handleHideButtons();
  }
  function handleHideSkills() {
    setShowSkills('hide-right');
    setShowWork('show-left');
    handleHideButtons();
  }
  function handleShowSkills() {
    setShowWork('hide-left');
    setShowSkills('show-right');
    handleHideButtons();
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
  function handleHideButtons() {
    setHideButtons(true);
    setTimeout(() => {
      setHideButtons(false);
    }, 500);
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
        <DefaultCVButton hide={hideButtons} showDefaultCV={showDefaultCV} />
        <PreviewButton
          hide={hideButtons}
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
