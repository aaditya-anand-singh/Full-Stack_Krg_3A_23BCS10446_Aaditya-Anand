import{logs} from '../data/logs';
const Logs=()=>{
    const highimpactlogs=logs.filter(log=>(log.carbon>4))
    const lowimpactlogs=logs.filter(log=>(log.carbon<4))

    return(<>
    <div>
         <header style={{padding: "o.5 rem", backgroundColor: "#ff0000", color: "white", textAlign: "center"}}>
        <h2>high Carbon Activities {'>'}4 </h2>
        </header>
        <ul style={{padding: "o.5 rem", backgroundColor: "#f9fdfd", color: "Red", textAlign: "center"}}>
            {
                highimpactlogs.map(log=>(
                    <li key={log.id}>
                    {log.activity}= {log.carbon} kg CO2
                    </li>
                ))
            }
        </ul>
    </div>
    <div>
        <header style={{padding: "o.5 rem", color: "white",backgroundColor: "#135f04", textAlign: "center"}}>
        <h2>low carbon Activities {'<'}4 </h2>
        </header>
        <ul style={{padding: "o.5 rem", backgroundColor: "#ffffff", color: "green", textAlign: "center"}}>
            {
                lowimpactlogs.map(log=>(
                    // <li key={log.id} >
                    // {log.activity}= {log.carbon} kg CO2
                    // </li>
                    <li key={log.id} style={{ color: "green", fontWeight: "bold" }}>
                    {log.activity} = {log.carbon} kg CO2
                    </li>

                ))
            }
        </ul>
    </div>
    </>
)
}
export default Logs;