try{
        
       
}catch(err){
    console.log(error)
}


const h = document.getElementById('hf');
if(data.data.length !== 0){
h.innerText = data.data.length +  '  found on This Catagories';
}else{
    h.innerText = 'No News Data Available No'
}