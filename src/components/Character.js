import { Link } from "react-router-dom";

const Character = ({id, name, images}) => {
  
    return ( 
      <div className="col">
        <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img src={images} className="img-fluid rounded-start" alt={name}/>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title"><Link to={`characters/${id}`}>{name}</Link></h5>
              </div>
          </div>
        </div>
      </div>
      </div>    
    );
}

export default Character;