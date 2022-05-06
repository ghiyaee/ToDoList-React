import { useState,useEffect} from "react"
import "./App.css"
import Header from "./Header"
import Form from "./Form"
import Items from "./Items"
// import axios from "axios"
import Request from '../api/Request'
// const calender = []
const App = () => {
    const [drop, setDrop] = useState(false)
    const [calenders, setCalenders] = useState([])
    const [input,setInput]=useState('')
    const [text, setText] = useState('ADD ')

    useEffect(() => {
        const respons = async () => {
            const calender = await request()
            setCalenders(calender)
        }
        respons()
    }, [])
    //  const request = async () => {
    //      const respons = await (await Request.get('/calenders')).json()
    //      return respons
    //  }
    const request = async () => {
        const respons = await (await fetch('http://localhost:8000/calenders')).json()
        return respons
    }
    const onShowInPut = () => {
        if (!drop) {
            setDrop(true)
            setText('CLOSE')
        } else {
            setDrop(false)
            setText('ADD')
        }
    }
    const onAddValue = (newCalender) => { 
           const newCal = calenders.push(newCalender)
            setCalenders(newCal);  
    }
    const onDeletItemHandel = (e,index) => {
        const filter = calenders.splice(index,1)
        setCalenders(filter)
    }
    const onMove = (e) => {
         setInput(e)
         setDrop(true)
         setText('EDIT')
    }
    const onEdit = ({id,work,time,text}) => {
        const newcalender = calenders.map(el => {
            if (id === el.id) {
               return  el.work=work,el.time=time
           }
        })
        setCalenders(newcalender)
    }
    return (
        <>
        <div className="container">
            <Header text={text} onShowInPut={onShowInPut} />
            <Form onValue={onAddValue} drop={drop} editValue={input} onEdit={onEdit} text={text} />
              
                    <Items value={calenders}
                        onDeletItem={onDeletItemHandel}
                        item={onMove} drop={drop} />
               
       </div>
        </>
    )
}
export default App