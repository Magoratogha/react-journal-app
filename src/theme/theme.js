import { createTheme } from "@mui/material";
import { blueGrey, red } from "@mui/material/colors";

export const theme = createTheme({
    palette: {
        primary: {
            main: blueGrey[900],
        },
        secondary: {
            main: '#f50057'
        },
        error: {
            main: red.A400
        }
    }
});