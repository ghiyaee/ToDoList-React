import { useState , useEffect,useRef} from "react";
import "./Form.css";
const Form = ({ onValue, drop, editValue ,onEdit ,text}) => {
    const { work: editWork, time: editTimes, id } = editValue
    const [work, setWork] = useState('')
    const [time, setTime] = useState('')
    const [alert, setLert] = useState('')
    const onRef=useRef()
    const onValidtion = (e) => {
        if (work === '' || time === '') {
            setLert('please inter values')
            setTimeout(() => {
               setLert('') 
            },2200)
            return
           }
          const id = Math.floor(Math.random() * 1000)
          const newCalender = {
            id, work,time
          }
          onValue(newCalender)
          setWork('')
          setTime('')
          setLert('Save Done')
          setTimeout(() => {
                setLert('')
          }, 1900);
          e.preventDefault()       
    }
    const onEditValue = () => {
        if (work === '' && time === '') {
            return
        }
          const newCalender = {
              id,
              work,
              time,
          }
          onEdit(newCalender)
          setWork('')
          setTime('') 
         setLert('Update Done')
         setTimeout(() => {
             setLert('')
         }, 2000);
       
    //     if (onRef) {
    //         setTimeout(() => {
                
    //         //  onRef.current. className='hedin'
    //             onRef.current.style.transform = 'translateX(-2000px)'

    //         },1900)
    //    }
  }
    useEffect(() => {
        setWork(editWork ||'')
        setTime(editTimes || '')
    },[editValue])
    return (
        < div className={`form ${drop ? 'active' : 'hiden'}`} ref={onRef} >
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
            
    <div className={`alert ${alert === ''} ? 'hedin': 'show'`}>
            <span>{alert}</span>
           <i className={`hand  up icon hedin ${alert === ''? null:'point'}`} ></i>
     </div>
            < div className = "hand__update__save" >
                  <i className = "hand point right icon" ></i>
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