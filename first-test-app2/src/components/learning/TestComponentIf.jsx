function TestComponentIf(){

    const items = [1,2,3];

    //Option 1 - for conditional rendering

    // if (items.length ===0){
    //     return<h1>No items found</h1>
    // }else{
    //     return <h1>You have {items.length} items</h1>
    // }

    //Option 2 - for conditional rendering
    // return <>
    //     {items.length === 0 ? <h1>No items found</h1> : <h1>You have {items.length} items</h1>}
    // </>

    //Option 3 - conditional rendering - with empty space as a possiblity (null)
    // return <>
    // {items.length === 0 ? <h1>No items found</h1> : null}
    // </>

    //Option 4 - conditional rendering &&
    // return <>
    // {items.length === 0 && <h1>No items found</h1>}
    // </>

    //Option 5 - conditional rendering
    // let isLogin = true;
    // return <>
    //     <br/>
    //     <br/>
    //     <button>{isLogin ? 'Login' : 'Register'}</button>
    //     <h1>{isLogin ? 'Select your username and password' : 'Insert your credentioals'}</h1>
    // </>

    //Option 7 - conditional rendering &&, css
    // return <>
    // <h2 style={{color : items.length === 0 ? 'white' : 'blue'}}>See your items</h2>
    // </>

    //Option 8 - conditional rendering &&, css nad output component
    let output;
    if (items.length ===0){
        output = <h1>No items found</h1>
    }else{
        output = <h1>You have {items.length} items</h1>
    }

    return <>
    {output}
    <h2 style={{color : items.length === 0 ? 'white' : 'blue'}}>See your items</h2>
    </>
}

export default TestComponentIf;