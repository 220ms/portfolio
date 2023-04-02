import '../css/style.css';

export default function About() {
  return (
    <div className="about-me-container" id="about">
      <img src={require("../images/about-me.png")} alt="Menu" />
      <div className="about-me-content">
        <h1>Get to Know Me</h1>
        <p>Hi, my name is Matt Hicks and I'm a graduating IT student from Monash University. I have a passion for building different types of applications ranging from hobby scripts all the way through to full web applications. In my spare time, you'll often find me hitting the pavement for a run, as I'm currently training towards running a 10km race in under an hour. With each passing day, I'm excited to continue learning and growing as a developer, while also exploring new avenues in health and fitness.</p>
      </div>
    </div>
  );
}