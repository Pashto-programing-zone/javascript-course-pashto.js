const buttons=document.querySelectorAll('.buttons')
 console.log(buttons);
  const body=document.querySelector("body")
 buttons.forEach(function (button) {
    console.log(button);
    button.addEventListener('click',function(e){
        console.log(e);
        console.log(e.target);
        if(e.target.id=='gray'){
            body.style.backgroundColor='gray'
        }
        if(e.target.id=='blue'){
            body.style.backgroundColor='blue'
        }
        if(e.target.id=='pink'){
            body.style.backgroundColor='pink'
        }
        if(e.target.id=='green'){
            body.style.backgroundColor='green'
        }
        if(e.target.id=='red'){
            body.style.backgroundColor='red'
        }
        
        else(!e.target.id) 
            console.log("please click the botton")
        }

    })
    
});

