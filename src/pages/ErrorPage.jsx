import { Header, Footer } from "../Components/Layout";
import { Link } from "react-router-dom";
import "../style/ErrorPage.scss";

// Error page
export function ErrorPage() {
  return (
    <div>
      <Header />
      <div className="mainError">
        <p className="mainError__numberError">404</p>
        <p className="mainError__noPage">
          Oups! La page que vous demandez n'existe pas.
        </p>
        <Link to="/" className="mainError__errorLink">
          Retourner sur la page d'accueil
        </Link>
      </div>
      <Footer />
    </div>
  );
}
