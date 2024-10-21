import LoginForm from "../Components/Login/LoginForm";

const LoginView = () => {
  return (
    <section className="card bg-white text-dark p-3 m-5">
      <div className="row  ">
        <article className="col-12 col-md-6">
          <h1>Bienvenido</h1>
          <hr />
          <LoginForm />
        </article>
        <article className="col-12 col-md-6">
          <img
            className="rounded w-100"
            src="https://www.tiempoar.com.ar/wp-content/uploads/2021/12/20220102-Gastronomia-2.jpg"
            alt="Humita"
          />
        </article>
      </div>
    </section>
  );
};

export default LoginView;
