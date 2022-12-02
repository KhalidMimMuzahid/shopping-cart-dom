// get input value by id 
function getInnerValueById(id){
    const innerElement=document.getElementById(id);
    const innerString = innerElement.value;
    // const innerValue = parseInt(innerString);
    // return innerValue
    return innerString

}
// get inner text of element by id 
function getInnerTextById(id){
    const innerElement=document.getElementById(id);
    const innerString = innerElement.innerText;
    const innerValue = parseInt(innerString);
    return innerValue ;
}
// set input value by id and input value 
function setInnerValueById(id, text){
    const innerElement=document.getElementById(id);
    innerElement.value= text;
    updateCost();
}
// set element inner text by id and text 
function setInnerTextById(id, text){
    const innerElement=document.getElementById(id);
    innerElement.innerText= text;
}
//  increasing input value 
function increaseValue(id){
    let prev = getInnerValueById(id);
    prev++ ;
    setInnerValueById(id, prev);
}
//  decreasing input value 
function decreaseValue(id){
    let prev = getInnerValueById(id);
    prev-- ;
    if(prev<0){
        return;
    }
    setInnerValueById(id, prev);
}

// update total cost 
function updateCost(){
    const firstItemCount = getInnerValueById('input-field-1');
    const secondItemCount = getInnerValueById('input-field-2');
    const firstItemRate = getInnerTextById("item-1-rate")
    const secontItemRate = getInnerTextById("item-2-rate")
    const subTotal = firstItemCount*firstItemRate + secondItemCount*secontItemRate ;
    const tax = Math.round(subTotal / 100 * 10 );
    const total = subTotal+ tax;
    setInnerTextById("sub-total", subTotal);
    setInnerTextById("tax", tax);
    setInnerTextById("total", total);

}
function removeInput(id){
    setInnerValueById(id, 0);
}







// item 1 plus button activity
document.getElementById("item-1-plus").addEventListener('click', function(){
    increaseValue('input-field-1');
})

// item 1 plus button activity
document.getElementById("item-1-minus").addEventListener('click', function(){
    decreaseValue('input-field-1');
})

// item 2 plus button activity
document.getElementById("item-2-plus").addEventListener('click', function(){
    increaseValue('input-field-2');
})

// item 2 plus button activity
document.getElementById("item-2-minus").addEventListener('click', function(){
    decreaseValue('input-field-2');
})
document.getElementById('remove-1').addEventListener('click', function(){
    removeInput('input-field-1');
});
document.getElementById('remove-2').addEventListener('click', function(){
    removeInput('input-field-2');
});