import { useState ,useEffect} from "react"
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
    const [text,setText]=useState('ADD')
    const onCliked = () => {
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
    const onDelHandel = (e,index) => {
        const filter = calender.splice(index,1)
        setCalenders(filter)
    }
    return (
        <>
        <div className="container">
            <Header text={text} onCliked={onCliked} />
            {drop ? <Form onValue={onAddValue} />: null}
            {calender.length != 0 ? <Items value={calender} onDel={onDelHandel} /> : `EMPTY  AT   CALENDER`}
       </div>
        </>
    )
}
export default App