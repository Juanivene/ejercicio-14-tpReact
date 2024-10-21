import { useForm } from "react-hook-form";
import Input from "../ui/input/input";
import { Link, useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { postLoginFn } from "../../api/auth";
import { useSession } from "../../Stores/useSession";

const LoginForm = () => {
  const { login } = useSession(); //zustand
  const navigate = useNavigate(); //hook de rrd para navegar

  const {
    register,
    handleSubmit: onSubmitRHF,
    formState: { errors },
  } = useForm();

  const { mutate: postLogin } = useMutation({
    mutationFn: postLoginFn,

    onSuccess: (userData) => {
      toast.dismiss();
      toast.success(`Bienvenido ${userData.firstName}`);

      setTimeout(() => {
        navigate("/");
      }, 1200);
      toast.dismiss();

      login(userData);
    },

    onError: (e) => {
      toast.dismiss();
      toast.warning(e.message);
    },
  });

  const handleSubmit = (data) => {
    toast.loading();
    postLogin(data);
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
