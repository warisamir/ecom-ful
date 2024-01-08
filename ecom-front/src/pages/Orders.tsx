import { ReactElement } from "react";
import TableHOC from "../components/admin/TableHOC"
import { useState } from "react";
import { Link } from "react-router-dom";
type DataType={
 _id:string;
 amount:number;
 quantity:number;
 discount:number;
 status:ReactElement;
 action:ReactElement;
};
const column: Column<DataType>[]=[{
    header:"ID",
    accessor:"_id",
},
{
    Header:"Quantity",
    accessor:"quantity",
},
{
    Header:"Discount",
    accessor:"discount",
},
{
    Header:"Amount",
    accessor:"amount",
},
{
    Header:"Status",
    accessor:"status",
}
,  {
    Header:"Action",
    accessor:"action",
}

]
const Orders = () => {
    const [rows, setrows] = useState<DataType[]>([
        {
           _id:"as1232434vjsdksd",
           amount:354566,
           quantity:32,
           discount:12345,
           status:<span className="red">Processing</span>,
           action:<Link to={`/order/as1232434vjsdksd`}>View</Link>
        }
    ])
     const Table= TableHOC<DataType>(column,
        rows,
        "dashboard-product-box",
     "Orders",true)()
  return (
   
    <div className="container">
      <h1>My Orders</h1>  
      {Table}
    </div>
  )
}

export default Orders