import "./ErrorNotFound.scss";

const ErrorNotFound = () => {
  return (
    <div className="error">
      <h1>You have found this page in error. </h1>
      <h2>But since you're here...</h2>
      <h3>Consider joining the band today!</h3>
      <iframe
        width="760"
        height="515"
        src="https://www.youtube.com/embed/SAKaR-RCgeQ"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="error__video"
      ></iframe>
    </div>
  );
};

export default ErrorNotFound;
