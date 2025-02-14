import React from 'react'
interface tableHolds {
pVal: any;
h3Val: string;
}
const TableHolderPg3 = ({pVal, h3Val} : tableHolds) => {
  return (
    <div className="p-4 border  border-gray-300">
    <h3 className="text-sm opacity-[75%]">{h3Val}</h3>
    <p className="whitespace-normal break-words">{pVal}</p>
</div>
  )
}

export default TableHolderPg3;
