function SongCard(props) {
  return (
    <div className="songCard">
        <img className="musicLogo"
        width="24"
        height="24"
        style={{
          marginRight:2
        }}
        src="https://iconsplace.com/wp-content/uploads/_icons/ffffff/256/png/music-icon-18-256.png"/>
        <li onClick={props.onClick}>{props.name}</li>
    </div>
  );
}

export default SongCard;
