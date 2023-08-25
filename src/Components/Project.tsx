export default function Project({
  name,
  link,
  demo,
  github,
  desc,
  image,
  tags,
  dates,
  title,
  reviews,
}: any) {
  const tagsArray = tags?.map((tag: any, index: number) => {
    let color = "black";
    let fontColor = "white";
    switch (tag) {
      case "React":
        color = "#169ECA";
        break;
      case "React Native":
        color = "#61DAFB";
        fontColor = "black";
        break;
      case "CSS":
        color = "#2D52E5";
        fontColor = "white";
        break;
      case "Typescript":
        color = "#397CC7";
        break;
      case "Javascript":
        color = "#F0DC56";
        fontColor = "black";
        break;
      case "GraphQL":
        color = "#DE34A6";
        break;
      case "MongoDB":
        color = "#026548";
        break;
      case "Firebase":
        color = "#F6A312";
        break;
      case "NodeJs":
        color = "#519942";
        break;
      case "SCSS":
        color = "#C76393";
        break;
      case "PHP":
        color = "#7477AE";
        break;
      case "Next.js":
        fontColor = "white";
        color = "black";
        break;
      case "TailwindCSS":
        color = "#37BDF8";
        break;
    }
    return (
      <p
        className="tag"
        key={index}
        style={{
          backgroundColor: color,
          color: fontColor,
          padding: ".1em .4em",
          borderRadius: "3px",
          marginTop: "0",
          marginBottom: ".25em",
        }}
      >
        {tag}
      </p>
    );
  });
  return (
    <div className="project">
      <div className="project-row">
        <a href={link} target="_blank" rel="noopener noreferrer">
          <img
            src={image}
            alt="project"
            width={100}
            height={100}
            style={{ border: "1px solid black" }}
          />
        </a>
        <div className="project-content">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="highlight"
          >
            {name}
          </a>
          {dates && <span className="h6">{dates}</span>}
          {title && (
            <span
              style={{ fontStyle: "italic", marginBottom: ".5em" }}
              className="h6"
            >
              {title}
            </span>
          )}
          {demo && (
            <>
              <a
                href={demo}
                target="_blank"
                rel="noopener noreferrer"
                className="second-link"
              >
                Demo Video
              </a>
            </>
          )}
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="second-link"
            >
              GitHub
            </a>
          )}
          <p className="top-desc">{desc}</p>
        </div>
        <div className="tag-container">{tagsArray}</div>
      </div>
      <div className="bottom-tags">{tagsArray}</div>
      {reviews && (
        <div className="reviews">
          {reviews?.map((review: any, index: number) => {
            return (
              <>
                <p>{`"${review?.body}"`}</p>

                <h6
                  style={{ fontStyle: "italic", color: "#F5F2B8" }}
                >{`- ${review?.title}`}</h6>
              </>
            );
          })}
        </div>
      )}
    </div>
  );
}
