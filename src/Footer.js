import { useNavigate } from "react-router-dom";

function Footer() {
  const navigate = useNavigate();
  return (
    <div className="footer">
      <button onClick={() => navigate(-1)} className="btn">
        GO BACK
      </button>
      <p>her hakkı saklıdır</p>
    </div>
  );
}

export default Footer;

// footer ı en altta tut container ,relative, 100vh,root bi şeyler ayarla
