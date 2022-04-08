const App = () => {
    return(
        <div className="App">
            <h1>Memoria</h1>
            <Carta />
        </div>        
    )
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);

let contador = 0 
let mov3 = 0

function Carta(){
    const [mov2, setMov2] = React.useState(1)
   
    const [items, setItems] = React.useState([
        {id: 1, img: './images/image1.jpg', stat: "" },
        {id: 1, img: './images/image1.jpg', stat: "" },
        {id: 2, img: './images/image2.jpg', stat: "" },
        {id: 2, img: './images/image2.jpg', stat: "" },
        {id: 3, img: './images/image3.jpg', stat: "" },
        {id: 3, img: './images/image3.jpg', stat: "" },
        {id: 4, img: './images/image4.jpg', stat: "" },
        {id: 4, img: './images/image4.jpg', stat: "" },
        {id: 5, img: './images/image5.jpg', stat: "" },
        {id: 5, img: './images/image5.jpg', stat: "" },
        {id: 6, img: './images/image6.jpg', stat: "" },
        {id: 6, img: './images/image6.jpg', stat: "" },
        {id: 7, img: './images/image7.jpg', stat: "" },
        {id: 7, img: './images/image7.jpg', stat: "" },
        {id: 8, img: './images/image8.jpg', stat: "" },
        {id: 8, img: './images/image8.jpg', stat: "" }
        
    ].sort(() => Math.random() - 0.5))

    const [prev, setPrev] = React.useState(-1)

    function ver(actual){
        if(items[actual].id == items[prev].id){
            items[actual].stat = "correct"
            items[prev].stat = "correct"
            setItems([...items])
            setPrev(-1)
            contador++


        }else{
            items[actual].stat = "incorrect"
            items[prev].stat = "incorrect"
            setItems([...items])
            setTimeout(() => {
                items[actual].stat = ""
                items[prev].stat = ""
                setItems([...items])
                setPrev(-1)
            }, 1000)

        }

        if (contador == 8) {
            setTimeout(() => {
                
                items[actual].stat = ""
                items[prev].stat = ""
                setItems([...items])
                setPrev(-1)
            }, 1000)
            alert("Has encontrado a todos los personajes!")
        }
        
    }

    function OnClickF(id){
        if(prev === -1){
            mov3++
            if (items[id].stat != "correct") {
                items[id].stat = "active"
                setItems([...items]) 
                setPrev(id)
                setMov2(mov3)
                
            }
        }else{
            mov3++;
            ver(id)
            setMov2(mov3)
        }  
    }

    return (
        <>
        <Movimientos mov2={mov2}/>
        <div className="contenedor">
            { items.map((item, index) => (
                <Card key={index} item={item} id={index} OnClickF={OnClickF} />
            )) }
        </div>
        
        </>
    )
}

function Card({item, id, OnClickF}){
    const itemClass = item.stat ? " active " + item.stat : ""

    return (
        <div className={"card" + itemClass} onClick={() => OnClickF(id)}>
            <img src={item.img} alt="" />
        </div>
    )
}

function Movimientos({mov2}){
  
    return (
        <div>
          <h2 >Movimientos: {mov2} </h2>
        </div>
    )
}


