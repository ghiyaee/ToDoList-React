import { useState , useEffect} from "react";
import "./Form.css";
const Form = ({ onValue, drop, editValue ,onEdit }) => {
    const { work: editWork, time: editTimes, id } = editValue
    const [work, setWork] = useState('')
    const [time, setTime] = useState('') 
    const onValidtion = (e) => {
         if (work === '' || time === ''  ) {
             return;
          }
          const id = Math.floor(Math.random() * 1000)
          const newCalender = {
            id, work,time
          }
          onValue(newCalender)
          setWork('')
          setTime('')
          e.preventDefault()       
    }
    const onEditValue = (e) => {
          const newCalender = {
              id,
              work,
              time
          }
          onEdit(newCalender)
          setWork('')
          setTime('')
          e.preventDefault()
        
  }
    useEffect(() => {
        setWork(editWork)
        setTime(editTimes)
    },[editValue])
    return (
        < div className={`form ${drop ? 'active' : 'hiden'}`}  >
            <input type="text"
                value={work}
                placeholder="INTER A WORKS DAILY"
                onChange={e => { setWork(e.target.value) }}>
            </input>
            <input type="text"
                value={time}
                placeholder="INTER A CLOCK "
                onChange={e => { setTime(e.target.value) }}>
            </input>
            <input type="checkbox"
                placeholder="inter a work" >
            </input>
            <input type="submit "
                value="SAVE"
                className={`save ${!drop ?'show':''}`}
                onClick={onValidtion} >
            </input>
             <input type="submit"
                value="EIDT"
                className={`edit ${drop ?'show':''}`}
                onClick={onEditValue} >
            </input>
        </div>
    );
}
export default Form