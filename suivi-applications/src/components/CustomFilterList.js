import { TableFilterList } from "mui-datatables";
import CustomChip from "./CustomChip";

const CustomFilterList = (props) => {
    return <TableFilterList {...props} ItemComponent={<CustomChip onDelete={props.onDelete}/>} />;
};

export default CustomFilterList