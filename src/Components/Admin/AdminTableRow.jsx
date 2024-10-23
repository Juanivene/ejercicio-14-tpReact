import { useMutation, useQueryClient } from "@tanstack/react-query";
import PropTypes from "prop-types";
import { toast } from "sonner";
import Swal from "sweetalert2";
import { deleteBlogFn } from "../../api/blog";
import { useBlog } from "../../Stores/useBlog";

const AdminTableRow = (props) => {
  const { blog, i } = props;

  const { setBlogToEdit } = useBlog();

  const queryClient = useQueryClient();
  //
  const { mutate: deleteBlog } = useMutation({
    mutationFn: deleteBlogFn,
    onSuccess: () => {
      toast.dismiss();
      toast.success("Entrada eliminada");

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

  const handleDelete = () => {
    Swal.fire({
      title: "Atencion",
      icon: "info",
      html: "Seguro que quires eliminar?",
      showCancelButton: true,
      showConfirmButton: true,
    }).then((res) => {
      if (res.isConfirmed) {
        toast.loading("Eliminando");
        deleteBlog(blog.id);
      }
    });
  };
  const handleEdit = () => {
    setBlogToEdit(blog)
  };
  return (
    <tr>
      <td>{i + 1}</td>
      <td>
        <img
          style={{ width: `400px` }}
          className="admin-table-image"
          src={blog.imageUrl}
          alt={blog.title}
        ></img>
      </td>
      <td>{blog.title}</td>
      <td className="text-end">
        <button className="btn btn-warning" onClick={handleEdit}>
          Editar
        </button>{" "}
        <button className="btn btn-danger" onClick={handleDelete}>
          Eliminar
        </button>
      </td>
    </tr>
  );
};

export default AdminTableRow;
AdminTableRow.propTypes = {
  blog: PropTypes.shape({
    id: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  }),
  i: PropTypes.number.isRequired,
};
