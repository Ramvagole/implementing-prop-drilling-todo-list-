export function Button({fetchData,id}){
    function clear(i){
        fetch(`http://localhost:3000/posts/${i}`,{
            method:"DELETE"
        }).finally(()=>{
            fetchData()
        })
    }
    return(
        <button onClick={()=>{clear(id)}}>Delete</button>
    )
}