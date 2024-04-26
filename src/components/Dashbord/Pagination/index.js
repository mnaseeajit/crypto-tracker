import React from "react";

import { Pagination } from "@mui/material";
import "./style.css";

const PaginationComponet = ({page , HandlePageChange, isDarkMode}) => {
    
    return (
        <div className="pagination-componet">
            <Pagination count={10} page={page} 
                        onChange={HandlePageChange} 
                        sx={{
                            "& .MuiPaginationItem-root": {
                                color: isDarkMode ? "var(--black)" : "var(--white)",
                                border: isDarkMode ? "1px solid var(--gray)" : "1px solid var(--white)"
                              },
                              "& .Mui-selected": {
                                backgroundColor: isDarkMode ? "var(--blue)" : "var(--blue)",
                                color: "#fff",
                                borderColor: "var(--blue)"
                              }
                        }}
            />
        </div>
    )
}

export default PaginationComponet;