import { useQuery } from "@tanstack/react-query";
import { getBlogsFn } from "../../api/blog";
import AdminTableRow from "./AdminTableRow";

const AdminTable = () => {
  const {
    data: blogs,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["blogs"],
    queryFn: getBlogsFn,
  });

  if (isLoading) {
    return <p>Cargando..</p>;
  }
  if (isError) {
    return <div className="mt-3 text-center">Ocurrio un error</div>;
  }
  return (
    <div className="table-responsive bg-red">
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Imagen</th>
            <th>Titulo</th>
            <th className="text-end">Aciones</th>
          </tr>
        </thead>
        <tbody>
          {blogs.map((blog, i) => {
            return <AdminTableRow key={blog.id} blog={blog} i={i} />;
          })}
        </tbody>
      </table>
    </div>
  );
};

export default AdminTable;
