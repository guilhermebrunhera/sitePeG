import { Link } from 'react-router-dom';
import '../alerta.css';


function Alerta() {
  return (
    <div className="App">
      <div>
        <span>Antes de acessar este site, Você <strong>Paula Thays Juliani</strong> aceita <strong>Guilherme Cintra Brunhera</strong> como seu namorado e futuro <strong>Esposo</strong>?</span>
        <Link to="/Inicio">
            <button>Eu Aceito!</button>
        </Link>
      </div>
    </div>
  );
}

export default Alerta;