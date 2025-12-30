import { useState } from "react"

const App = () => {

  const [quote, setQuote] = useState("")

  let quotesData = JSON.parse(localStorage.getItem("all-quotes")) ?? []
  // console.log(quotesData)
  const [allQuotes, setAllQuotes] = useState(quotesData)
 
 
  let submitHandler = (e) => {
    e.preventDefault()
    console.log("form submitted ")
    console.log(quote)
    let newAllQuotes = [...allQuotes, quote];
    localStorage.setItem("all-quotes", JSON.stringify(newAllQuotes));
    setAllQuotes(newAllQuotes);
    setQuote("")
  }

  let deleteQuote = (idx) => {
    console.log("quote deleted with idx: ", idx)
    let newAllQuotes = [...allQuotes];
    newAllQuotes.splice(idx, 1);
    localStorage.setItem("all-quotes", JSON.stringify(newAllQuotes));
    setAllQuotes(newAllQuotes)
  }

  return (
    <div className='w-screen h-screen bg-[#1c1c1c] p-10 text-white flex flex-col items-center gap-6'>
      <form onSubmit={submitHandler} className="w-full flex items-center justify-center gap-5 mb-5">
        <input
          type="text"
          placeholder='Enter Quotes of the day'
          className='text-white text-2xl rounded-sm px-4 py-2 w-1/2  border-1 border-white'
          value={quote}
          required
          onChange={(e) => {
            setQuote(e.target.value)
          }}
        />

        <button className='bg-emerald-500 hover:bg-emerald-600 cursor-pointer text-white text-2xl rounded-lg px-4 py-2 border-1 border-white font-bold active:scale-95'>Save</button>
      </form>

      <div className="w-1/2 font-semibold text-white flex flex-col gap-4">
        {
          allQuotes.map((elem, index) => {
            return <div key={index} className=" flex items-center justify-between gap-4">
              <h1 className="text-2xl">{elem}</h1>
              <button onClick={() => {deleteQuote(index)}} className='bg-red-500 hover:bg-red-600 cursor-pointer text-white text-lg rounded-lg px-2 py-1 border-1 border-white font-bold active:scale-95'>Delete</button>
            </div>
          })
        }
      </div>
    </div>
  )
}

export default App