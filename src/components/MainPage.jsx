import BasicInfo from './BasicInfo';
import EducationInfo from './EducationInfo';
import { useState } from 'react';
import '../styles/MainPage.css';

export default function MainPage() {
  const [showBasic, setShowBasic] = useState('');
  const [showEducation, setShowEducation] = useState('hidden');
  function handleShowBasic() {
    setShowEducation('hide-right');
    setShowBasic('show-left');
  }
  function handleShowEducation() {
    setShowBasic('hide-left');
    setShowEducation('show-right');
  }
  return (
    <main>
      <BasicInfo showHide={showBasic} onNextClick={handleShowEducation} />
      <EducationInfo
        showHide={showEducation}
        onPreviousClick={handleShowBasic}
      />
    </main>
  );
}
