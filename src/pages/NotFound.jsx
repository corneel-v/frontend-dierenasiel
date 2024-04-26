import { useLocation } from "react-router";

export default function NotFound() {
  const { pathname } = useLocation();
  return (
    <>
      <h1>Pagina niet gevonden!</h1>
      <p>Er bestaat geen pagina met als url {pathname}, probeer iets anders.</p>
    </>
  );
}
