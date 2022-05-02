import "./App.css"
import Header from "./Header"
import Form from "./Form"
import Items from "./Items"
const calender = [
    {
        id: 1,
        work: 'codeing',
        time: '7:30 to 90:30'
    },
    {
        id: 2,
        work: 'codeing',
        time: '7:30 to 90:30'
    },
    {
        id: 3,
        work: 'codeing',
        time: '7:30 to 90:30'
    },
]
const App = () => {
    return(
    <div className="container">
            <Header/>
            <Form />
            <Items value={calender} />
        </div>
    )
}
export default App