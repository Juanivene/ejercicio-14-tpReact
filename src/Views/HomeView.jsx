import { useQuery } from "@tanstack/react-query";
import { getBlogsFn } from "../api/blog";
import BlogCard from "../Components/Home/BlogCard";

const HomeView = () => {
  const {
    data: blogs,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["blogs"],
    queryFn: getBlogsFn,
  });
  if (isLoading) {
    return <p className="mt-3 text-center">Cargando..</p>;
  }
  if (isError) {
    return <div className="alert-danger">Error al leer las entradas</div>;
  }
  if (blogs && blogs.length === 0) {
    return <div className="alert-danger">no hay entradas</div>;
  }
  return (
    <section className="row">
      {blogs.map((blog) => {
        return (
          <article className="col-12 col-md-4 col-lg-3 " key={blog.id}>
            <BlogCard blog={blog} />
          </article>
        );
      })}
    </section>
  );
};

export default HomeView;
