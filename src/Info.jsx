import resumePhoto from '../src/assets/resume-photo.png'
export default function Info() {
  return(
    <div className="info">
      <img src={resumePhoto} className="info--photo"/>
      <h1 className="info--title">Alyssa.</h1>
      <h3 className="info--title_role">Technology Graduate</h3>
      <a href="https://alyssa-pineda-assignment2-ver2.netlify.app/" className="info--link">My Website</a>
      <button className="info--button"><span class="material-symbols-outlined">
      mail
      </span>Email</button>
    </div>
  )
}