import { useState } from "react"
import "./Form.css"
const Form = ({onValue}) => {
    const [work,setWork] = useState('')
    const [time, setTime] = useState('') 
    const onSubmitHandel = (e) => {
        e.preventDefault()
        const obj={work:work,time:time}
        // onValue(obj)
        // console.log(obj);
        // console.log('ggg');
    }
    const onsuspend = () => {
        const id=Math.floor(Math.random()*1000)
         const obj={id:id ,work:work,time:time}
        console.log(obj);
        onValue(obj)
    }
    return(
            <div className="form"onSubmit={onSubmitHandel} >
                <input type="text" value={work} placeholder="inter a work" onChange={e=>{setWork(e.target.value);}}></input>
                <input type="text" value={time} placeholder="inter a time" onChange={e=>{setTime(e.target.value)}}></input>
                <input type="checkbox" placeholder="inter a work" ></input>
                <button type="submit" value="SAVE" className="save" onClick={onsuspend} ></button>
        </div>
    )
}
export default Form