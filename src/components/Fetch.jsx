export function Fetching(props) {
  return (
    <div className="maping">
      <div className="thumbnail">
        <img></img>
      </div>
      <div className="text_contents">
        <p>{props.title}</p>
        <p>{props.body}</p>
        <p>{props.id}</p>
      </div>
    </div>
  );
}
