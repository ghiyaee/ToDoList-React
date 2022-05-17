import { useState , useEffect} from "react";
import "./Form.css";
const Form = ({ onValue, drop, editValue ,onEdit ,text}) => {
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
    const onEditValue = () => {
          const newCalender = {
              id,
              work,
              time,
          }
          onEdit(newCalender)
          setWork('')
          setTime('') 
  }
    useEffect(() => {
        setWork(editWork ||'')
        setTime(editTimes || '')
    },[editValue])
    return (
        < div className={`form ${drop ? 'active' : 'hiden'}`}  >
            <input
                type="text"
                value={work}
                placeholder="INTER A WORKS DAILY"
                onChange={e => { setWork(e.target.value) }}
            >
            </input>
            <input
                type="text"
                value={time}
                placeholder="INTER A CLOCK "
                onChange={e => { setTime(e.target.value) }}
            >
            </input >
            < div className = "hand__update__save" >
                  < i className = "hand point right icon" > </i>
                    <input
                        type="submit"
                        value="SAVE"
                        className={`save ${text ==='CLOSE' ?'show':'hedin'}`}
                        onClick={onValidtion}
                    >
                    </input>
                    <input
                        type="submit"
                        value="UPDATA"
                        className={`edit ${text ==='CLOSE' ? 'hedin':'show'}`}
                        onClick={onEditValue}
                    > 
                    </input>
                </div>
        </div>
    );
}
export default Form