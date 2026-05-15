//your JS code here. If required.
let codes=document.querySelectorAll(".code")
codes[0].focus()
codes.forEach((code,i) => {
    code.addEventListener("input" , (e) =>{
	    if(code.value!="" && i< codes.length){
	        codes[i+1].focus()
	    }
    })
    code.addEventListener("keydown" , (e)=>{
        if(e.key=="Backspace" && code.value==""){
            codes[i-1].focus()
        }
    })
})