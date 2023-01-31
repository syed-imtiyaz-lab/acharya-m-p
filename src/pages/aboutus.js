import "../pages/btnpag.css";
import Aboutusi from "../components/Images/Aboutus.jpg"

const containerStyles = {
  display: "flex",
  maxWidth: "800px",
  maxHeight: "500",
  marginTop: "13.2rem",
  alignItems: "center",
  margin: "0 auto",
};

function Aboutus() {
  return(
    <div className='hhsfl'>
      <div style={containerStyles} >
      <img src={Aboutusi} alt="Logo" href="/app"/>
      </div>
      <div className='ptxh'>
      <br/>
        <h5>Welcome to the Acharyaa Placement and Inspection Office!</h5>
        <p>Our mission is to provide quality placement and inspection services<br/>
        for medical students, faculty, and staff.<br/>
        We strive to ensure that our placements are beneficial to all involved<br/>
        and that our inspections are conducted in a professional and timely manner.<br/>
        <br></br>
        We offer a variety of services to help you find the<br/>
        ideal placement or inspection for your specific needs.<br/>
        Our placement services include job searches,<br/>
        career counseling, resume preparation, and more.<br/>
        We can also provide guidance on how to apply to medical schools<br/>
        and other health care programs.<br/>
        In addition, we offer inspections of clinical facilities and<br/>
        medical schools to ensure that they comply with all applicable regulations.<br/>
        <br/>
        If you have any questions or would like more information about our services,<br/>
        please do not hesitate to contact us.<br/>
        We look forward to helping you achieve your goals!</p>
      </div>
    </div>
  )
}

export default Aboutus;