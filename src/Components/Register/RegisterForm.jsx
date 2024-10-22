import { useNavigate } from "react-router-dom";
import { useSession } from "../../Stores/useSession";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import Input from "../ui/input/input";
import { postRegisterFn } from "../../api/auth";

const RegisterForm = () => {
  const { login } = useSession(); //zustand
  const navigate = useNavigate(); //hook de rrd para navegar

  const {
    register,
    handleSubmit: onSubmitRHF,
    formState: { errors },
    reset,
  } = useForm();

  const { mutate: postRegister } = useMutation({
    mutationFn: postRegisterFn,
    // mutationFn: () => {},

    onSuccess: (userData) => {
      toast.dismiss();
      toast.success(`Registro exitoso, Bienvenido ${userData.username}`);

      setTimeout(() => {
        navigate("/");
      }, 2000);
      toast.dismiss();

      login(userData); //////////////////////
    },

    onError: (e) => {
      toast.dismiss();
      toast.warning(e.message);
    },
  });

  const handleSubmit = (data) => {
    toast.loading();
    postRegister(data);
    // reset();
  };

  return (
    <form className="row" onSubmit={onSubmitRHF(handleSubmit)}>
      <div className="col-12 col-md-6">
        <Input
          className="mb-2 "
          error={errors.firstName}
          label="Nombre"
          name="firstName"
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
              value: 30,
              message: "Debe contener 20 caracteres como maximo",
            },
          }}
          register={register}
        />
      </div>
      <div className="col-12 col-md-6">
        <Input
          className="mb-2 "
          error={errors.lastName}
          label="Apellido"
          name="lastName"
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
              value: 30,
              message: "Debe contener 20 caracteres como maximo",
            },
          }}
          register={register}
        />
      </div>
      <div className="col-12 col-md-6">
        <Input
          className="mb-2 "
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
      </div>
      <div className="col-12 col-md-6">
        <Input
          className="mb-2 "
          type="password"
          error={errors.password}
          label="Contraseña"
          name="password"
          options={{
            required: {
              value: true,
              message: "Campo requerido",
            },
            minLength: 3,
            maxLength: 15,
            pattern: {
              value:
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).{8,}$/,
              message:
                "La contraseña debe tener al menos una mayuscula, una minuscula, 2 digitos y un caracter especial entre 3 y 15 caracteres",
            },
          }}
          register={register}
        />
      </div>

      <div className="col-12 col-md-6">
        <Input
          className="mb-2 "
          type="password"
          error={errors.password}
          label="Repetir contraseña"
          name="repeatPassword"
          options={{
            required: {
              value: true,
              message: "Campo requerido",
            },
            minLength: 3,
            maxLength: 15,
            pattern: {
              value:
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).{8,}$/,
              message:
                "La contraseña debe tener al menos una mayuscula, una minuscula, 2 digitos y un caracter especial entre 3 y 15 caracteres",
            },
          }}
          register={register}
        />
      </div>

      <div className="text-end mt-3 mb-2">
        <button type="submit" className="btn btn-danger">
          Registrar
        </button>
      </div>
    </form>
  );
};

export default RegisterForm;
