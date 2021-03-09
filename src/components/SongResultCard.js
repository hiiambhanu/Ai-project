function SongResultCard(props) {
    return (
      <div className="songCard">
        <a target="_blank" href={`https://www.youtube.com/results?search_query=${props.name}`}>
          <li onClick={props.onClick}>{props.name}</li>
        </a>
      </div>
    );
  }
  
  export default SongResultCard;
  