import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {Button} from "@/components/ui/button.tsx";
import {Input} from "@/components/ui/input.tsx";
import {Greet} from "../wailsjs/go/main/App";

function App() {
  const [count, setCount] = useState(0)
    const [name,setName] = useState("")
    const [content,setContent] = useState("Edit src/App.tsx and save to test HMR")
    const updateName = (result:string) => {
        setContent(result);
    }
    function great(name:string) {
        Greet(name).then(updateName);
    }
  return (
    <>
      <div className={"grid grid-cols-2 items-center justify-items-center h-52 mt-10"}>
        <a href="https://vite.dev" target="_blank" >
          <img src={viteLogo} className="size-40" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="size-40 hover:drop-shadow-[0px_15px_15px_rgba(12,205,219,0.25)] transition animate-spin"  alt="React logo" />
        </a>
      </div>
      <h1 className="text-4xl text-center h-20" >Vite + React</h1>
      <div className="justify-items-center pt-1 mt-3">
        <Button variant="outline" onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </Button>
        <p className="mt-3">
            {content}
        </p>
      <div className="flex w-full max-w-sm items-center space-x-2">
          <Input type="text" placeholder="Say Hi" onChange={(event) =>{setName(event.target.value)}} />
          <Button onClick={()=>great(name)}>
              OK
          </Button>
      </div>
      </div>
      <p className="flex-wrap-revers text-center">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
