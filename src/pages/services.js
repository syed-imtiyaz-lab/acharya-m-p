import "../pages/btnpag.css";
import Servicesi from "../components/Images/Services.jpg"

const containerStyles = {
  display: "flex",
  marginTop: "13.2rem",
  alignItems: "center",
  margin: "0 auto",
};

function Services() {
  return(
    <div className='hhsfl'>
      <div style={containerStyles} >
      <img src={Servicesi} alt="Logo" href="/app"/>
      </div>
      <div className='ptxh'>
        <br/>
        <br/>
        <h5>Medical college Placement / Inspections
        </h5>
        <p>Good placement statistics are very important for the institutes as well,<br/>
        as Good statistics helps to enhance the reputation of an institution,<br/>
        thus producing efficient and skilled professionals that are satisfied of their course period,<br/>
        which in turn improves the attractiveness of an institution for prospective candidates.</p>
        <h5>Dr's Seeking Employment Management Seeking for Dr's
        </h5>
        <p>If you are a doctor seeking for employment,<br/>
        you can search for job postings on job boards such as Indeed,<br/>
        Monster, or Glassdoor. Additionally,<br/>
        you can reach out to healthcare facilities directly to inquire about openings. </p>
        <p>
        If you are a manager seeking to hire doctors,<br/>
        you can post job openings on job boards or contact healthcare facilities directly. Additionally,<br/>
        you can contact medical schools and universities to inquire about recent graduates<br/>
        who may be seeking employment.
        </p>
      </div>
    </div>
  )
}

export default Services;