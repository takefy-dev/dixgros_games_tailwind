const Column = ({col, idx}) => {
    return (
        <div className={`grid grid-cols-7 border border-gray-600 justify-items-center col-${idx}`} key={`col-${idx}`}>
            {col.map((cell, i) => {
                return <div className={`row-${i} mx-auto h-full select-none`}>{cell}</div>
            })}
        </div>
    );
};

export default Column;
