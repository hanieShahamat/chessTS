import  { useState } from 'react'


export default function Square() {
  const initialBoard = Array.from({ length: 10 }, (_, row) =>
  Array.from({ length: 10 }, (_, col) => ` hover:bg-green-300 hover:scale-125 transition-transform duration-500 hover:rounded-lg ${(row + col) % 2 === 0 ? 'bg-white' : 'bg-black '}`
      
  )
);
const [board] = useState(initialBoard);
const handleclick = (row:number,col:number)=>{
  console.log(` Row: ${row}, Col: ${col}`)

}

  return (
    <div className="flex flex-col w-screen h-screen">
            {board.map((row, rowIndex) => (
                <div key={rowIndex} className="flex flex-auto">
                    {row.map((color, colIndex) => (
                        <div key={colIndex} className={`flex-auto ${color}`} onMouseEnter={()=>handleclick(rowIndex,colIndex)}></div>
                    ))}
                </div>
            ))}
    </div>

  );
}