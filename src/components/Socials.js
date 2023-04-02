import { FaLinkedin, FaGithub } from 'react-icons/fa';

export default function Socials() {
  const handleLinkedInClick = () => {
    window.open('https://www.linkedin.com/in/matthew-hicks-b85877217/', '_blank');
  };

  const handleGithubClick = () => {
    window.open('https://github.com/220ms', '_blank');
  };

  return (
    <div className="socials-container">
      <button className="social-button" onClick={handleLinkedInClick}>
        <FaLinkedin className="button-icon" />
      </button>
      <button className="social-button" onClick={handleGithubClick}>
        <FaGithub className="button-icon" />
      </button>
    </div>
  );
}