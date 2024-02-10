import '../styles/MainPage.css';

export default function BasicInfo({
  showHide,
  onNextClick,
  showInputData,
  updateInputData,
}) {
  return (
    <div className={'basic-info ' + showHide}>
      <h2>1 / 4</h2>
      <h2 className="basic-info-header">Basic Info</h2>
      <label htmlFor="first-name">First Name:</label>
      <input
        type="text"
        id="first-name"
        name="firstName"
        value={showInputData.firstName}
        onChange={updateInputData}
        placeholder="Ron"
      />
      <label htmlFor="last-name">Last Name:</label>
      <input
        type="text"
        id="last-name"
        name="lastName"
        value={showInputData.lastName}
        onChange={updateInputData}
        placeholder="Weasley"
      />
      <label htmlFor="city">Town/City:</label>
      <input
        type="text"
        id="city"
        name="city"
        value={showInputData.city}
        onChange={updateInputData}
        placeholder="London"
      />
      <label htmlFor="country">Country:</label>
      <input
        type="text"
        id="country"
        name="country"
        value={showInputData.country}
        onChange={updateInputData}
        placeholder="United Kingdom"
      />
      <label htmlFor="email">Email Address:</label>
      <input
        type="email"
        id="email"
        name="email"
        value={showInputData.email}
        onChange={updateInputData}
        placeholder="ron.weasley@hogwarts.edu.uk"
      />
      <label htmlFor="phone">Phone Number:</label>
      <input
        type="number"
        id="phone"
        name="phone"
        value={showInputData.phone}
        onChange={updateInputData}
        placeholder="789 654 123"
      />
      <div className="navigation-buttons">
        <button type="button" onClick={onNextClick}>
          <img src="/next.svg" alt="Go To Education Info Section" />
        </button>
      </div>
    </div>
  );
}
