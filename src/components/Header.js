import "./Header.css"
const Header = ({onCliked,text}) => {
    return(
       <div className="header">
            <h3>Calendar Daily</h3>
            <button onClick={onCliked}>{text}</button>
        </div>
    )
}
 export default Header