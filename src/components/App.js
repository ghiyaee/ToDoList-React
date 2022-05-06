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
  const request = async () => {
      const respons = await (await fetch('http://localhost:8000/calenders')).json()
      return respons;
  }
    useEffect(() => {
        const respons = async () => {
            const calender = await request()
            setCalenders(calender)
        }
        respons()
    }, [])
  
    const onShowInPut = () => {
        if (!drop) {
            setDrop(true)
            setText('CLOSE')
        } else {
            setDrop(false)
            setText('ADD')
        }
    }
    const onAddValue = async (newCalender) => { 
        const resultAdd = await fetch('http://localhost:8000/calenders', {
            method: 'POST',
            headers: {
                'Content-type':'application/json'
            },
            body:JSON.stringify(newCalender)
        })
           const data = await resultAdd.json()
        
        // for static
        //    const newCal = calenders.push(data) 
        // setCalenders(newCal);
         window.location.reload()
       
    }
    const onDeletItemHandel = async (id, index) => {
        console.log(id);
        await fetch(`http://localhost:8000/calenders/${id}`, {
            method: 'DELETE',
        });
        // for static
        // const filter = calenders.splice(index,1)
        // setCalenders(filter)
        window.location.reload()
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