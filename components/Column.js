import {useState} from "react";

const Column = ({col, idx}) => {
    const [cellColor, setCellColor] = useState('bg-white')
    return (
        <div className={`grid grid-cols-7 justify-items-center px-4 col-${idx}`} key={`col-${idx}`}>

            <style jsx>{`
                  .cell {
                    height: 48px;
                    width: 48px;
                  }
                `}</style>
            {col.map((cell, i) => {
                return <div className={`row-${i} rounded-full transition hover:duration-150 ${cell === 0 ? 'bg-yellow-coins' : cell === 1 ? 'bg-red-coins' : 'bg-white'}  cell flex justify-center items-center select-none`} key={`row-${i}`}>{cell}</div>

            })}
        </div>
    );
};

export default Column;
