const Column = ({col, idx}) => {
    return (
        <div className={`grid grid-cols-7 justify-items-center px-4 col-${idx} gap-4`} key={`col-${idx}`}>
            {col.map((cell, i) => {
                return <div className={`row-${i} rounded-full bg-red-800  w-full flex justify-center items-center select-none`} key={`row-${i}`}>{cell}</div>
            })}
        </div>
    );
};

export default Column;
