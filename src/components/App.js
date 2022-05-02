import { useState ,useEffect} from "react"
import "./App.css"
import Header from "./Header"
import Form from "./Form"
import Items from "./Items"

const calender = [
    {
        id: 1,
        work: 'CONEDING',
        time: '7:30 to 90:30'
    },
    {
        id: 2,
        work: 'RUNING',
        time: '10:00 to 11:30'
    },
    {
        id: 3,
        work: 'codeing',
        time: '16:30 to 18:30'
    },
]
const App = () => {
    const [drop, setDrop] = useState(false)
    const [addcal, setAddcal] = useState(calender)
    const onCliked = () => {
        if (!drop) {
            setDrop(true)
   
        } else {
            setDrop(false)
       }
    }
    const onAddValue = (obj) => {
       const newCal=  calender.push(obj)
       setAddcal(newCal);
    }
    const onDelHandel = (e,index) => {
        const filter = calender.splice(index,1)
        setAddcal(filter)
    }
    return(
        <div className="container">
            <Header onCliked={onCliked} />
            {drop ? <Form onValue={onAddValue} />: null}
            <Items value={calender} onDel={onDelHandel }/>
        </div>
    )
}
export default App