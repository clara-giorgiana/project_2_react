function TestComponentMap(){


    //1) repetitive rendering map()
    //map() function - obtain one vector from another 

    const vector = [1,2,3,4];

        //Option 1
    // return <>
    // {
    //     //input is the initial vector
    //     //index - current index
    //     vector.map((currentNumber, index, input) => 
    //     {
    //         if(currentNumber % 2 === 0){
    //             return <div>{currentNumber} - Even</div>;
    //         }else{
    //             return <h1>{currentNumber}</h1>;
    //         }
            
    //     })
    // }
    // </>

        //Option 2
        return <>
            {vector.map(c => <TestItem currentNumber = {c} />)}
        </>


}

function TestItem({currentNumber}){
    if(currentNumber % 2 === 0){
        return <div>{currentNumber} - Even</div>;
    }
    return <h1>{currentNumber}</h1>;
}

export default TestComponentMap;