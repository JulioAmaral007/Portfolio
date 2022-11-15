import cfConectar from "../../utils/imgs/certificado-conectar.jpeg";
import cfFundamentar from "../../utils/imgs/certificado-fundamentar.jpeg";
import cfEspecializar from "../../utils/imgs/certificado-especializar.jpeg";

import { Slide } from "react-awesome-reveal";

import "./certificate.css";

const Certificate = () => {
  return (
    <section id="certificate" className="certificate">
      <div className="container">
        <Slide>
          {" "}
          <h1>CERTIFICADOS</h1>
        </Slide>
        <Slide>
          <div className="grid-3">
            <div className="card-certificate">
              <img src={cfConectar} alt="" />
            </div>
            <div className="card-certificate">
              <img src={cfFundamentar} alt="" />
            </div>
            <div className="card-certificate">
              <img src={cfEspecializar} alt="" />
            </div>
          </div>
        </Slide>
      </div>
    </section>
  );
};

export default Certificate;
