import "./Header.css"
const Header = ({onShowInPut,text}) => {
    return(
       <div className="header">
            <h3 className="content">Calendar Daily</h3>
            <button onClick={onShowInPut}>{text}</button>
        </div>
    )
}
 export default Header