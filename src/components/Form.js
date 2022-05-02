import { useState } from "react"
import "./Form.css"
const Form = ({onValue}) => {
    const [work,setWork] = useState('')
    const [time, setTime] = useState('') 
    const onSubmitHandel = (e) => {
        e.preventDefault()
        const newCalender={work:work,time:time}
    }
    const onsuspend = () => {
        const id=Math.floor(Math.random()*1000)
         const newCalender={id:id ,work:work,time:time}
          onValue(newCalender)
    }
    return(
            <div className="form"onSubmit={onSubmitHandel} >
                <input type="text" value={work} placeholder="inter a work" onChange={e=>{setWork(e.target.value);}}></input>
                <input type="text" value={time} placeholder="inter a time" onChange={e=>{setTime(e.target.value)}}></input>
                <input type="checkbox" placeholder="inter a work" ></input>
                <input type="submit" value="SAVE" className="save" onClick={onsuspend} ></input>
        </div>
    )
}
export default Form