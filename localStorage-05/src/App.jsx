import { useState } from "react"

const App = () => {

  const [quote, setQuote] = useState("")

  let quotesData = JSON.parse(localStorage.getItem("all-quotes")) ?? []
  // console.log(quotesData)
  const [allQuotes, setAllQuotes] = useState(quotesData)
  const [editIdx, setEditIdx] = useState(null)


  let submitHandler = (e) => {
    e.preventDefault()
    console.log("form submitted ")

    if (editIdx === null) { //means we are adding new quote not updating any existing
      let newAllQuotes = [...allQuotes, quote];
      localStorage.setItem("all-quotes", JSON.stringify(newAllQuotes));
      setAllQuotes(newAllQuotes);
    }
    else {
      let newAllQuotes = [...allQuotes];
      newAllQuotes[editIdx] = quote;
      localStorage.setItem("all-quotes", JSON.stringify(newAllQuotes));
      setAllQuotes(newAllQuotes);
      setEditIdx(null)
    }
    console.log(quote)

    setQuote("")
  }

  let deleteQuote = (idx) => {
    console.log("quote deleted with idx: ", idx)
    let newAllQuotes = [...allQuotes];
    newAllQuotes.splice(idx, 1);
    localStorage.setItem("all-quotes", JSON.stringify(newAllQuotes));
    setAllQuotes(newAllQuotes)
  }

  let editQuote = (idx) => {
    setQuote(allQuotes[idx]);
    setEditIdx(idx);
  }

  return (
    <div className="w-screen h-screen relative overflow-hidden bg-gradient-to-br from-sky-200 via-blue-200 to-sky-300 flex flex-col items-center gap-6 p-10">
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-blue-400/40 rounded-full blur-3xl"></div>
      <div className="absolute top-40 right-0 w-96 h-96 bg-cyan-300/40 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-40 w-96 h-96 bg-sky-400/40 rounded-full blur-3xl"></div>

      <form onSubmit={submitHandler} className="w-full flex items-center justify-center gap-5 mb-5">
        <input
          type="text"
          placeholder='Enter Quotes of the day'
          className=' text-2xl rounded-sm px-4 py-2 w-1/2  border-1 border-black'
          value={quote}
          required
          onChange={(e) => {
            setQuote(e.target.value)
          }}
        />

        <button className='bg-emerald-400/50 backdrop-blur-lg border-2 border-white/20 shadow-xl cursor-pointer  text-2xl rounded-lg px-4 py-2 text-[#202020] font-semibold active:scale-95'>{editIdx === null ? "Save" : "Update"}</button>
      </form>

      <div className="w-full font-semibold flex flex-wrap items-center justify-center gap-8">
        {
          allQuotes.map((elem, index) => {
            return <div key={index} className=" w-50 h-40 px-4 pt-4 pb-2 flex flex-col items-center justify-between  rounded-4xl bg-gradient-to-br from-white/30 to-white/20 backdrop-blur-2xl border border-white/30 shadow-[0_25px_50px_rgba(0,0,0,0.3)] ">

              <h1 className="text-lg text-center text-[#2b2b2b] leading-6.5">{elem}</h1>

              <div className="w-full flex justify-end gap-2 mt-2 ">
                <button onClick={() => { editQuote(index) }} className='bg-emerald-400/50 cursor-pointer text-[#2c2c2c] text-lg  rounded-lg px-2 py-1 font-bold active:scale-95'><img className="w-5" src="./editing.png" alt="edit" /></button>

                <button onClick={() => { deleteQuote(index) }} className='bg-red-500/50 cursor-pointer text-[#2c2c2c] text-lg rounded-lg px-2 py-1 font-bold active:scale-95'><img className="w-5" src="./trash.png" alt="" /></button>
              </div>
            </div>
          })
        }
      </div>
    </div>
  )
}

export default App