import { useState} from "react"
import "./App.css"
import Header from "./Header"
import Form from "./Form"
import Items from "./Items"
const calender = [
    {
        id: 1,
        work: 'CODEING',
        time: '7:30 to 90:30'
    },
    {
        id: 2,
        work: 'RUNING',
        time: '10:00 to 11:30'
    },
    {
        id: 3,
        work: 'READING',
        time: '16:30 to 18:30'
    },
]
const App = () => {
    const [drop, setDrop] = useState(false)
    const [calenders, setCalenders] = useState(calender)
    const [input,setInput]=useState('')
    const [text, setText] = useState('ADD')
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
       const newCal = calender.push(newCalender)
        setCalenders(newCal);  
    }
    const onDeletItemHandel = (e,index) => {
        const filter = calender.splice(index,1)
        setCalenders(filter)
    }
    const onMove = (e) => {
      setInput(e)
    }
    return (
        <>
        <div className="container">
            <Header text={text} onShowInPut={onShowInPut} />
            <Form onValue={onAddValue} drop={drop} onMoveHandel={input}  />
                {calender.length != 0 ? <Items value={calender} onDeletItem={onDeletItemHandel} item={onMove} drop={drop}/> : `EMPTY  AT   CALENDER`}
       </div>
        </>
    )
}
export default App