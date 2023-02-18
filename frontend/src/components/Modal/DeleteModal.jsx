import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { AiFillDelete } from "react-icons/ai";

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 300,
    bgcolor: "background.paper",
    border: "1px solid #000",
    boxShadow: 24,
    p: 4,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
};

export default function BasicModal({ deleteTodo }) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <AiFillDelete className="icon deleteIcon" onClick={handleOpen} />
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography
                        id="modal-modal-title"
                        variant="h6"
                        component="h2"
                    >
                        Are you sure you want to delete?
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        <button className="confirm" onClick={deleteTodo}>
                            yes
                        </button>
                        <button className="confirm" onClick={handleClose}>
                            no
                        </button>
                    </Typography>
                </Box>
            </Modal>
        </div>
    );
}
