import './Items.css'
const Items = ({value}) => {
    const renderItems = value.map(el=> {
        return ( 
          <div className='items' key={el.id}>
              <div className='works'>
                 <h3>{el.work}</h3>
                  <p>{ el.time}</p>
              </div>
              <i className="trash icon"></i>
              </div>
        )
 })
    return (<>{renderItems}</>)
}
export default Items