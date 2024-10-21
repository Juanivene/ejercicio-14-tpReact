import { useForm } from "react-hook-form";
import Input from "../ui/input/input";
import { Link } from "react-router-dom";

const LoginForm = () => {
  const {
    register,
    handleSubmit: onSubmitRHF,
    formState: { errors },
  } = useForm();

  const handleSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={onSubmitRHF(handleSubmit)}>
      <Input
        className="mb-2"
        error={errors.username}
        label="Nombre de usuario"
        name="username"
        options={{
          required: {
            value: true,
            message: "Campo requerido",
          },
          minLength: {
            value: 3,
            message: "Debe contener al menos 3 caracteres",
          },
          maxLength: {
            value: 20,
            message: "Debe contener 20 caracteres como maximo",
          },
        }}
        register={register}
      />

      <Input
        type="password"
        error={errors.password}
        label="Contraseña"
        name="password"
        options={{
          required: {
            value: true,
            message: "Campo requerido",
          },
          minLength: {
            value: 3,
            message: "Debe contener al menos 3 caracteres",
          },
          maxLength: {
            value: 20,
            message: "Debe contener 20 caracteres como maximo",
          },
        }}
        register={register}
      />
      <div className="text-end mt-3 mb-2">
        <button type="submit" className="btn btn-danger">
          Ingresar
        </button>
      </div>
      <p className="text-center text-md-start mt-2 mt-lg-0">
        ¿Primera vez? <Link to="/register">¡Create un usuario!</Link>
      </p>
    </form>
  );
};

export default LoginForm;
