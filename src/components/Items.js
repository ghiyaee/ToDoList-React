import './Items.css'
const Items = ({ value, onDeletItem,item,drop }) => {
    const renderItems = value.map((el,index)=> {
      return ( 
           <div className='items' key={el.id} >
              <div className='works'>
                 <h3>{el.work}</h3>
                  <p>{ el.time}</p>
                </div>
                <div>
                <i className= "edit icon" onClick={e=>item(el,index)}></i>
                <i className= "trash icon" onClick={(e)=>onDeletItem(el.id,index)}></i>
                </div>   
          </div>
         
        )
 })
  return (
    <div className={`drop ${drop ? 'down':''}`}>
      {renderItems}
    </div>
  )
}
export default Items