
function Child({onNotify}){
    
    
    // <button onClick={(a, b) => onNotify(a)}>Notify</button>

    //bootstrap examples:
    return <button type="button" class="btn btn-danger"onClick={(a, b) => onNotify(a)}>Notify</button>
}

export default Child;