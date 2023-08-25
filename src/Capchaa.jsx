import React, { useEffect, useState } from 'react'
import './capchaa.css'

function Capchaa() {

 const[ captcha ,setCaptch ] = useState("")
const [input , setInput] = useState("")
 const [ result , setResult]= useState("")
//  const [score , setScore]= useState(0)
 useEffect(() => {
    generateCaptcha();
  }, []);
 function generateCaptcha(){
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
//    const captchaLength = 6;
   let cpachaString = " "
for( let i = 0 ; i< 6 ; i++){
     const randomIndex = Math.floor(Math.random()*characters.length)
     cpachaString += characters[randomIndex]
     console.log(cpachaString);
     setCaptch(cpachaString)
   }
}


function handleSubmit(){
  {input === captcha  ? setResult("Captcha validated successfully") :  setResult("Invalid captcha")} 
 console.log(input)
 console.log(captcha)
 setInput("")
}


    return (
        <>
            <div className="box">
                <h2> Captcha filling game</h2>
                <h3>{captcha}</h3>

                <input type="text" value={input} onChange={(e)=> setInput(e.target.value)} />
                <div className="flex">
                    <button onClick={handleSubmit}>Submit</button>
                    <button onClick={generateCaptcha}>Refresh</button>
                </div>
                <h4>{result}</h4>

            </div>

        </>
    )
}

export default Capchaa