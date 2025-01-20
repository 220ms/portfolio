import "../css/style.css";

export default function About() {
  return (
    <div className="about-me-container" id="about">
      <img src={require("../images/about-me.png")} alt="Menu" />
      <div className="about-me-content">
        <h1>Get to Know Me</h1>
        <p>
          Hi, my name is Matt Hicks, and I am a Software Developer with a year
          of professional experience in building web applications and
          integrating innovative solutions. I enjoy crafting applications that
          range from personal passion projects to full-scale web platforms. In
          my spare time, you'll often find me running as I work towards new
          personal bests, including running a half marathon. I'm passionate
          about continuously improving as a developer while also embracing
          challenges in health and fitness.
        </p>
      </div>
    </div>
  );
}
