"use client"

interface ErrorPageProps{
    error:Error,
    reset:()=>void,
}

export default function error({error,reset}:ErrorPageProps) {
  return (
    <div>
      <h1>this is a eroor</h1>
      <button>reset</button>
    </div>
  )
}
