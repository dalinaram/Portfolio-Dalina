import CVViewer from './CVViewer';

const SocialMediaIcons = () => {
  return (
    <div className="flex justify-center md:justify-start my-10 gap-7">
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.linkedin.com/in/dalina-lesourd"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="linkedin-link" src="/assets/linkedin.png" />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://github.com/dalinaram/Hexashop/settings/pages"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="github-link" src="/assets/github.png" />
      </a>  
      {/* <img alt="facebook-link" src="../assets/facebook.png" /> */}
        
      <CVViewer />  
    </div>
  );
};

export default SocialMediaIcons;
