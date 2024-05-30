import { Button } from "./ListOfButton"
export function Display({data,fetchData}){
    return(
        <>
        {
            data.map((v,i)=>{
                return(
                    <div key={i}>
                        <h1>Title:{v.title}</h1>
                        <h2>Author:{v.author}</h2>
                        <Button fetchData={fetchData} id={v.id}/>
                    </div>
                )
            })
        }
        </>
    )
}