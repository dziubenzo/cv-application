import '../styles/MainPage.css';

export default function Skill({ count }) {
  const spells = [
    'Alohomora',
    'Avada Kedavra',
    'Cruciatus',
    'Protego',
    'Petrificus Totalus',
    'Reparo',
    'Wingardium Leviosa',
    'Petrificus Totalus',
    'Expelliarmus',
    'Lumos',
  ];
  return (
    <>
      <label htmlFor={`skill${count}`}>Skill {count}</label>
      <input
        type="text"
        id={`skill${count}`}
        name={`skill${count}`}
        value={''}
        placeholder={spells[count - 1]}
      />
    </>
  );
}
