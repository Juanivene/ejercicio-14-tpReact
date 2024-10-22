import PropTypes from "prop-types";

const BlogCard = (props) => {
  const { blog } = props;
  return (
    <div className="card mb-4 shadow-sm">
      <img
        src={blog.imageUrl}
        className="card-img-top"
        alt={blog.title}
        style={{ height: "200px", objectFit: "cover" }}
      />
      <div className="card-body">
        <h5 className="card-title">{blog.title}</h5>
        <p className="card-text">{blog.description}</p>
        <p className="text-muted">Por: {blog.author}</p>
        <a href={`/blog/${blog.id}`} className="btn btn-primary">
          Leer más
        </a>
      </div>
    </div>
  );
};

export default BlogCard;
BlogCard.propTypes = {
  blog: PropTypes.object.isRequired,
};
