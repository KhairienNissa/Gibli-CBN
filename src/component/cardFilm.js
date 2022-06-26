
function CardFilm({item}) {
   
  return (
              <>
                <div className="title">{item.title}</div>
                <div className="date">{item.original_title} - {item.release_date}</div>
                <div className="desc">{item.description.slice(0,250)+'...'}</div>
                <div className="date">Directed by : {item.director}</div>
              </>       
         );
}

export default CardFilm;