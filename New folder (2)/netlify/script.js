console.log("start");

setTimeout(()=>{
    console.log("Ajith");
    
}, 1000 * document.querySelector(".time").value);



console.log("start");

setTimeout(()=>{
    console.log("Ajith");
    setTimeout(()=> {
     console.log("Welcome")
    }, 1000 * 2)
    
}, 1000 * document.querySelector(".time").value);



let countdown = 11;
document.querySelector(".msg").innerText = 10;

setTimeout(()=>{
    document.querySelector(".msg").innerText = --countdown;
    setTimeout(()=>{
        document.querySelector(".msg").innerText = --countdown;
        setTimeout(()=>{
            document.querySelector(".msg").innerText = --countdown;
            setTimeout(()=>{
                document.querySelector(".msg").innerText = --countdown;
                setTimeout(()=>{
                    document.querySelector(".msg").innerText = --countdown;
                    setTimeout(()=>{
                        document.querySelector(".msg").innerText = --countdown;
                        setTimeout(()=>{
                            document.querySelector(".msg").innerText = --countdown;
                            setTimeout(()=>{
                                document.querySelector(".msg").innerText = --countdown;
                                setTimeout(()=>{
                                    document.querySelector(".msg").innerText = --countdown;
                                    setTimeout(()=>{
                                        document.querySelector(".msg").innerText = --countdown;
                                    
                                    setTimeout(()=>{
                                        document.querySelector(".msg").innerText = "Happy Independence Day";
                                    }, 1000)
                                        
                                    }, 1000)
                                    
                                }, 1000)
                                
                            }, 1000)
                            
                        }, 1000)
                        
                    }, 1000)
                    
                }, 1000)
                
            }, 1000)
            
        }, 1000)
        
    }, 1000)
    
}, 1000)



