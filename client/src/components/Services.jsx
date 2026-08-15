import { Link } from "react-router-dom";
import services from "../data/services";
import "./Services.css";

export default function Services() {
  return (
    <ul className="services">
      {services.map((s, i) => (
        <li key={s.id} className="services__row" data-reveal>
          <span className="services__index">{String(i + 1).padStart(2, "0")}</span>
          <div className="services__media">
            <img src={s.image} alt="" loading="lazy" />
          </div>
          <div className="services__copy">
            <h3 className="services__name">{s.name}</h3>
            <p className="services__desc">{s.description}</p>
            <div className="services__foot">
              <span className="services__price">{s.startingPrice}</span>
              <Link to="/contact" className="btn">
                Enquire →
              </Link>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
