const SideSearch = ({ onClick, handleChange, handleSubmit }) => {


  return (

    <div className="main-box">
      <div className="side-search">
        <div className="content-sidebar">
          <h3>Show Coasters By Rating:</h3>


          <form id="form" onSubmit={handleSubmit}>
            <select onChange={handleChange} id="score">
              <option value="1">1 star</option>
              <option value="2">2 stars</option>
              <option value="3">3 stars</option>
              <option value="4">4 stars</option>
              <option value="5">5 stars</option>
            </select>
          </form>
          <div className="links">
            <h3 className="inner-text">Show Coasters By Park:</h3>
            <ul>
              <li onClick={onClick} id="Cedar Point">
                Cedar Point
              </li>
              <li onClick={onClick} id="Islands of Adventure">
                Islands of Adventure
              </li>
              <li onClick={onClick} id="Carowinds">
                Carowinds
              </li>
              <li onClick={onClick} id="Busch Gardens Tampa">
                Busch Gardens Tampa
              </li>
              <li onClick={onClick} id="Six Flags Great Adventure">
                Six Flags Great Adventure
              </li>
              <li onClick={onClick} id="Dollywood">
                Dollywood
              </li>
              <li onClick={onClick} id="Holiday World">
                Holiday World
              </li>
              <li onClick={onClick} id="Six Flags Fiesta Texas">
                Six Flags Fiesta Texas
              </li>
              <li onClick={onClick} id="Six Flags Magic Mountain">
                Six Flags Magic Mountain
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideSearch;
