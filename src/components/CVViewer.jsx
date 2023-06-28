import React from 'react';
import SocialMediaIcons from './SocialMediaIcons';
// coucou


function YourComponent() {
  const CVViewer = () => {
    const handleCVClick = () => {
      window.open('assets/DalinaLesourd-cv.pdf');
    };

    return (
      <div>
        <button className="hover:opacity-50 transition duration-500" onClick={handleCVClick}>Consulter mon CV</button>
      </div>
    );
  };

  return (
    <div>
      {/* ...autres éléments JSX... */}
      <CVViewer />
    </div>
  );
}


export default YourComponent;
