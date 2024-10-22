import { NavLink } from "react-router-dom";
import { useSession } from "../../Stores/useSession";
import Swal from "sweetalert2";

const Header = () => {
  const { user, isLoggedIn, logout } = useSession();
  const handleLogOut = async () => {
    const action = await Swal.fire({
      title: "ATENCION",
      icon: "info",
      text: "¿Seguro que quieres cerrar sesion?",
      confirmButtonText: "Si, salir",
      cancelButtonText: "No, cancelar",
      showCancelButton: true,
    });
    if (action.isConfirmed) {
      logout();
    }
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          Mi cocina
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink
                className={({ isActive }) => {
                  return isActive ? `nav-link activate` : `nav-link`;
                }}
                aria-current="page"
                to="/"
              >
                Inicio
              </NavLink>
            </li>
            {/* {!isLoggedIn && ( */}
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) => {
                    return isActive ? `nav-link activate` : `nav-link`;
                  }}
                  to="/login"
                >
                  Iniciar sesion
                </NavLink>
              </li>
            {/* )} */}
            {/* {isLoggedIn && user.isAdmin && ( */}
              <li>
                <NavLink
                  className={({ isActive }) => {
                    return isActive ? `nav-link activate` : `nav-link`;
                  }}
                  to="/admin"
                >
                  Admin
                </NavLink>
              </li>
            {/* )} */}
            {isLoggedIn && (
              <button className="ms-auto btn btn-danger" onClick={handleLogOut}>
                Cerrar sesión
              </button>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
