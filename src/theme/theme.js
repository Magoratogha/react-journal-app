import { createTheme } from "@mui/material";
import { blueGrey, red, yellow } from "@mui/material/colors";

export const theme = createTheme({
    palette: {
        primary: {
            main: blueGrey[900],
        },
        secondary: {
            main: yellow[700],
            dark: yellow[800],
        },
        error: {
            main: red.A400
        }
    }
});