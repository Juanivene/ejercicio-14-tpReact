import { useForm } from "react-hook-form";
import Input from "../ui/input/input";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { postBlogFn } from "../../api/blog";

const AdminForm = () => {
  const {
    register,
    handleSubmit: onSubmitRHF,
    reset,
    formState: { errors },
  } = useForm();

  const queryClient = useQueryClient();
  //
  const { mutate: postBlog } = useMutation({
    mutationFn: postBlogFn,
    onSuccess: () => {
      toast.dismiss();
      toast.success("Entrada guardada");
      reset();
      //actualiza la info perri
      queryClient.invalidateQueries({
        queryKey: ["blogs"],
      });
    },
    onError: (e) => {
      toast.dismiss();
      toast.warning(e.message);
    },
  });

  const handleSubmit = (data) => {
    toast.loading("Guardando..");
    postBlog(data);
  };

  return (
    <form
      className="card p-3 bg-secondary mt-2"
      onSubmit={onSubmitRHF(handleSubmit)}
    >
      <h1>Cear nueva entrada</h1>
      <hr />
      <Input
        className="mb-2"
        label="Titulo"
        name="title"
        register={register}
        error={errors.title}
        placeHolder="Pure de manzana"
        options={{
          required: "Este campo es requerido",
          minLength: {
            value: 5,
            message: "El titulo debe tener al menos 5 caracteres",
          },
          maxLength: {
            value: 30,
            message: "Debe tener como maximo 30 caracteres",
          },
        }}
      />
      <Input
        className="mb-2"
        label="Imagen"
        name="imageUrl"
        register={register}
        error={errors.imageUrl}
        placeHolder="http:.."
        options={{
          required: "Este campo es requerido",
        }}
      />
      <Input
        textArea
        label="Contenido"
        name="content"
        register={register}
        error={errors.content}
        placeHolder="Escribe el contenido"
        options={{
          required: "Este campo es requerido",
          minLength: {
            value: 15,
            message: "El contenido debe tener al menos 5 caracteres",
          },
          maxLength: {
            value: 100,
            message: "Debe tener como maximo 100 caracteres",
          },
        }}
      />
      <div className="mt-3 text-end">
        <button type="submit" className="btn btn-danger">
          Cargar
        </button>
      </div>
    </form>
  );
};

export default AdminForm;
