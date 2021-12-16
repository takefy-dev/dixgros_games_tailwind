import {useState} from "react";
import Column from "./Column";
const Board = () => {
    const initialBoard = []
    for (let i = 0; i < 6; i++) initialBoard.push([null, null, null, null, null, null, null])

    const [board, setBoard] = useState(initialBoard)
    const reRenderBoard = () => {

        const newBoard = initialBoard.map((col, i) => {
            return <Column col={col} key={i} idx={i}/>
        })
         setBoard(newBoard)
        return newBoard
    }
    useState(() => {
        console.log(initialBoard)

        setBoard(reRenderBoard())
    }, [])
    const handleClick = () => {
        initialBoard[4][0] = 0
        initialBoard[4][1] = 1
        reRenderBoard()
    }
    return (
       <div onClick={handleClick} className="grid grid-rows-6  border-gray-400 py-4 rounded-30px bg-board mt-4 w-1/3 h-27rm">
           {board}
       </div>
    );
};

export default Board;
