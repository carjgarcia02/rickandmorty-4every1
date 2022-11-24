// Components
import CharacterCard from "./CharacterCard";

const Characters = () => {
  
  return (
    <>
      <div className="pagination">
        <div>
          <input type="search" />
        </div>
        <div>
          <span>PAGE</span>
          <select name="pages" id="pages" >
            <option value="1">1</option>
          </select>
        </div>
      </div>
      <div className="char_container">
        <div className="char">
          
        </div>
      </div>
    </>
  )
}

export default Characters