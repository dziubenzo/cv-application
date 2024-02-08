import BasicInfo from './BasicInfo';
import EducationInfo from './EducationInfo';
import { useState } from 'react';
import '../styles/MainPage.css';
import WorkInfo from './WorkInfo';

export default function MainPage() {
  const [showBasic, setShowBasic] = useState('');
  const [showEducation, setShowEducation] = useState('hidden');
  const [showWork, setShowWork] = useState('hidden');
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
  return (
    <main>
      <BasicInfo showHide={showBasic} onNextClick={handleShowEducation} />
      <EducationInfo
        showHide={showEducation}
        onPreviousClick={handleHideEducation}
        onNextClick={handleShowWork}
      />
      <WorkInfo showHide={showWork} onPreviousClick={handleHideWork} />
    </main>
  );
}
