import './Items.css'
const Items = ({ value ,onDeletItem}) => {
    const renderItems = value.map((el,index)=> {
        return ( 
          <div className='items' key={el.id}>
              <div className='works'>
                 <h3>{el.work}</h3>
                  <p>{ el.time}</p>
              </div>
              <i className="trash icon" onClick={(e)=>onDeletItem(el.id,index)}></i>
              </div>
        )
 })
    return (<>{renderItems}</>)
}
export default Items