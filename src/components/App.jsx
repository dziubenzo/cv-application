import BasicInfo from './BasicInfo';
import CreatorDetails from './CreatorDetails';
import EducationInfo from './EducationInfo';
import Header from './Header';

function App() {
  return (
    <>
      <Header />
      <main>
        {/* <BasicInfo /> */}
        <EducationInfo />
      </main>
      <CreatorDetails />
    </>
  );
}

export default App;
