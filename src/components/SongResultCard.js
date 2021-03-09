function SongResultCard(props) {
    return (
      <div className="songCard">
        <a target="_blank" href={`https://www.youtube.com/results?search_query=${props.name}`}>
          <div className="Row">
          <img className="musicLogo"
        width="24"
        height="24"
        style={{
          marginRight:12
        }}
        src="https://iconsplace.com/wp-content/uploads/_icons/ffffff/256/png/music-icon-18-256.png"/>
          <li onClick={props.onClick}>{props.name}</li>
          </div>
        </a>
      </div>
    );
  }
  
  export default SongResultCard;
  