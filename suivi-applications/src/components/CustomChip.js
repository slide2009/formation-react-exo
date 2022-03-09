import { Chip } from "@mui/material";

const CustomChip = ({ label, onDelete }) => {
    return (
        <Chip
            variant="outlined"
            color="secondary"
            label={label}
            onDelete={onDelete}
        />
    );
};

export default CustomChip