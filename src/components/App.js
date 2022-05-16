import { useState,useEffect} from "react"
import "./App.css"
import Header from "./Header"
import Form from "./Form"
import Items from "./Items"
// for static
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
           const newCal =[...calenders,data]
           setCalenders(newCal);
       
    }
    const onDeletItemHandel = async (id, index) => {
        console.log(id);
        await fetch(`http://localhost:8000/calenders/${id}`, {
            method: 'DELETE',
        });
        // for static
        const filter = calenders.filter(f=> f.id !=id)
        setCalenders(filter)
    }
    const onMove = (value) => {
         setInput(value)
         setDrop(true)
         setText('EDIT')
    }
    const onEdit = async (newCalender) => {
        console.log(newCalender.id);
            const res = await fetch(`http://localhost:8000/calenders/${newCalender.id}`, {
                method: 'PUT',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(newCalender)
            })
            // window.location.reload()
           const data = await res.json()
        // for static
        console.log(data);
         const newcalender = calenders.map(el => {
             if (newCalender.id === el.id) {
                 return el.work = newCalender.work, el.time = newCalender.time
             }
               })
         setCalenders(newcalender)
        }
    return (
        <>
            <div className="container">
                <Header
                    text={text}
                    onShowInPut={onShowInPut}
                />
                <Form
                    onValue={onAddValue}
                    drop={drop}
                    editValue={input}
                    onEdit={onEdit}
                    text={text}
                />
                <Items
                    value={calenders}
                    onDeletItem={onDeletItemHandel}
                    item={onMove} drop={drop}
                />     
       </div>
        </>
    )
}
export default App