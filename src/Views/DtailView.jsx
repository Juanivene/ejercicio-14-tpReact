import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getBlogFn } from "../api/blog";

const DtailView = () => {
  const { id } = useParams();
  const {
    data: blog,
    isLoading,
    isError,
  } = useQuery({
    queryKey: [`blog-${id}`],
    queryFn: () => getBlogFn(id),
  });
  if (isLoading) {
    return <p className="mt-3 text-center">Cargando..</p>;
  }
  if (isError) {
    return <div className="alert-danger">Error al leer la entrada</div>;
  }

  return <div>{JSON.stringify(blog)}</div>;
};

export default DtailView;
