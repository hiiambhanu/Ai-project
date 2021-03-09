function SongCard(props) {
  return (
    <div className="songCard">
      <li onClick={props.onClick}>{props.name}</li>
    </div>
  );
}

export default SongCard;
