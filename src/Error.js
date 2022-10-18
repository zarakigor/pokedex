import error_image from "./assets/404.gif";

function Error() {
  return (
    <div className="errorpage">
      <h1>404</h1>
      <p>Oops page not found!</p>
      <img src={error_image} alt="confused Psyduck"></img>
    </div>
  );
}

export default Error;
