import { useState } from "react"
import "./Form.css"
const Form = ({onValue}) => {
    const [work,setWork] = useState('')
    const [time, setTime] = useState('') 
    const onValidtion = (e) => {
         if (!work&&!time) {
             return;
         }
        const id=Math.floor(Math.random()*1000)
         const newCalender={id ,work,time}
        onValue(newCalender)
        setWork('')
        setTime('')
          e.preventDefault()
    }
    return(
            <div className="form" >
                <input type="text" value={work} placeholder="INTER A WORKS DAILY" onChange={e=>{setWork(e.target.value);}}></input>
                <input type="text" value={time} placeholder="INTER A CLOCK " onChange={e=>{setTime(e.target.value)}}></input>
                <input type="checkbox" placeholder="inter a work" ></input>
                <input type="submit" value="SAVE" className="save" onClick={onValidtion} ></input>
        </div>
    )
}
export default Form