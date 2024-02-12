import PreviewButton from './PreviewButton';

export default function Preview({ handleShowPreview, showPreview, data }) {
  return (
    <div
      className="preview"
      style={showPreview ? { display: 'grid' } : { display: 'none' }}
    >
      <div className="top">
        <h1 className="name">
          {data.firstName} {data.lastName}
        </h1>
        <hr />
        <h2 className="location">
          {data.city}, {data.country}
        </h2>
      </div>
      <div className="contact">
        <p className="email">{data.email}</p>
        <hr />
        <p className="phone">{data.phone}</p>
      </div>
      <div className="education-and-work">
        <h2 className="education-header">Education</h2>
        <hr />
        <div className="education-1">
          <div className="education-line">
            <h3 className="institution">{data.institution}</h3>
            <p className="dates-education">
              {data.startDate} - {data.endDate}
            </p>
          </div>
          <p className="programme">{data.programme}</p>
          <hr />
        </div>
        <div className="education-2">
          <div className="education-line">
            <h3 className="institution">{data.institutionExtra1}</h3>
            <p className="dates-education">
              {data.startDateExtra1} - {data.endDateExtra1}
            </p>
          </div>
          <p className="programme">{data.programmeExtra1}</p>
          <hr />
        </div>
        <div className="education-3">
          <div className="education-line">
            <h3 className="institution">{data.institutionExtra2}</h3>
            <p className="dates-education">
              {data.startDateExtra2} - {data.endDateExtra2}
            </p>
          </div>
          <p className="programme">{data.programmeExtra2}</p>
        </div>
        <hr />
        <hr />
        <h2 className="work-header">Work Experience</h2>
        <hr />
        <div className="work-1">
          <div className="work-line">
            <h3 className="company">{data.company}</h3>
            <p className="dates-work">
              {data.startDateCompany} - {data.endDateCompany}
            </p>
          </div>
          <p className="position">{data.position}</p>
          <hr />
        </div>
        <div className="work-2">
          <div className="work-line">
            <h3 className="company">{data.companyExtra1}</h3>
            <p className="dates-work">
              {data.startDateCompanyExtra1} - {data.endDateCompanyExtra1}
            </p>
          </div>
          <p className="position">{data.positionExtra1}</p>
          <hr />
        </div>
        <div className="work-3">
          <div className="work-line">
            <h3 className="company">{data.companyExtra2}</h3>
            <p className="dates-work">
              {data.startDateCompanyExtra2} - {data.endDateCompanyExtra2}
            </p>
          </div>
          <p className="position">{data.positionExtra2}</p>
        </div>
      </div>
      <div className="skills">
        <h2 className="profile-header">Profile</h2>
        <hr />
        <p className="profile">{data.profile}</p>
        <hr />
        <hr />
        <h2 className="skills-header">Skills</h2>
        <hr />
        <ul className="skills-list">
          {data.skill0 && (
            <>
              <li className="skill">{data.skill0}</li>
              <hr />
            </>
          )}
          {data.skill1 && (
            <>
              <li className="skill">{data.skill1}</li>
              <hr />
            </>
          )}
          {data.skill2 && (
            <>
              <li className="skill">{data.skill2}</li>
              <hr />
            </>
          )}
          {data.skill3 && (
            <>
              <li className="skill">{data.skill3}</li>
              <hr />
            </>
          )}
          {data.skill4 && (
            <>
              <li className="skill">{data.skill4}</li>
              <hr />
            </>
          )}
          {data.skill5 && (
            <>
              <li className="skill">{data.skill5}</li>
              <hr />
            </>
          )}
          {data.skill6 && (
            <>
              <li className="skill">{data.skill6}</li>
              <hr />
            </>
          )}
          {data.skill7 && (
            <>
              <li className="skill">{data.skill7}</li>
              <hr />
            </>
          )}
          {data.skill8 && (
            <>
              <li className="skill">{data.skill8}</li>
              <hr />
            </>
          )}
          {data.skill9 && (
            <>
              <li className="skill">{data.skill9}</li>
              <hr />
            </>
          )}
        </ul>
      </div>
      <PreviewButton
        showPreview={showPreview}
        handleShowPreview={handleShowPreview}
      />
    </div>
  );
}
