import {useState} from "react";
import Column from "./Column";
const Board = () => {
    const initialBoard = []
    for (let i = 0; i < 6; i++) initialBoard.push([1, 2, 3, 4, 5, 6, 7])
    const [board, setBoard] = useState(initialBoard)
    return (
       <div className="grid grid-rows-6 border-separate border border-gray-400 mt-4 w-1/3 h-27rm">
           {
               board.map((col, i) => {
                    return <Column col={col} key={i} idx={i}/>
               })
           }
       </div>
    );
};

export default Board;
