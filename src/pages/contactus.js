import "../pages/btnpag.css";
import Contactusi from "../components/Images/Contactus.jpg";
import Enquiryform from "../components/EnquiryForm/EnquiryForm";

const containerStyles = {
  display: "flex",
  width: "800px",
  height: "500",
  marginTop: "13.2rem",
  alignItems: "center",
  margin: "0 auto",
};

function Contactus() {
  return(
    <div className='hhsfl'>
      <div style={containerStyles} >
      <img src={Contactusi} alt="Logo" href="/app"/>
      </div>
      <div className='ptxh'>
        <p>Connect your senses for mindfulness<br/>
        and wellbeing with various programs of health education,<br/>
        fitness training, and meditation.</p>
        <Enquiryform/>
      </div>
    </div>
  )
}

export default Contactus;