import "./Header.css"
const Header = ({onCliked}) => {
    return(
       <div className="header">
            <h3>Calendar Daily</h3>
            <button onClick={onCliked}>Add</button>
        </div>
    )
}
 export default Header