import CreatorDetails from './CreatorDetails';
import Header from './Header';
import MainPage from './MainPage';

const defaultCV = {
  // Basic Info
  firstName: 'Ron',
  lastName: 'Weasley',
  city: 'London',
  country: 'United Kingdom',
  email: 'ron.weasley@hogwarts.edu.uk',
  phone: 789654123,
  // Education Info
  institution: 'Hogwarts School of Witchcraft and Wizardry',
  programme: 'PhD in General Wizardry',
  startDate: '09/2010',
  endDate: '06/2015',
  institutionExtra1: 'London College for Wizards',
  programmeExtra1: 'BA in Muggles Comprehension',
  startDateExtra1: '09/2006',
  endDateExtra1: '06/2010',
  institutionExtra2: 'Yale Wizardry Institution',
  programmeExtra2: 'MSc in Applied Wand Design',
  startDateExtra2: '01/2006',
  endDateExtra2: '06/2006',
  // Work Info
  company: 'Ministry of Defence Against the Dark Arts',
  position: 'Snacks Conjurer',
  startDateCompany: '03/2022',
  endDateCompany: 'present',
  companyExtra1: 'London Central Post Office',
  positionExtra1: 'Package Handler',
  startDateCompanyExtra1: '01/2018',
  endDateCompanyExtra1: '12/2021',
  companyExtra2: "Weasleys' Wizard Wheezes",
  positionExtra2: 'Demon Dung Supervisor',
  startDateCompanyExtra2: '08/2015',
  endDateCompanyExtra2: '12/2017',
  // Skills Info
  profile:
    'I love keeping muggles in check with my shiny, little wand! Also, I try my best to stay in touch with Harry, my friend.',
  skill0: 'Can take Crucio with ease',
  skill1: 'Certified wand',
  skill2: 'Can do Wingardium Leviosa',
};

function App() {
  return (
    <>
      <Header />
      <CreatorDetails />
      <MainPage defaultCV={defaultCV} />
    </>
  );
}

export default App;
