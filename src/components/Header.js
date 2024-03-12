import {
    AppBar,
    Container,
    MenuItem,
    Select,
    Toolbar,
    Typography,
} from "@material-ui/core";
import {
    createTheme,
    makeStyles,
    ThemeProvider,
} from "@material-ui/core/styles";
import { useNavigate } from "react-router-dom";
import { CryptoState } from "../CryptoContext";
import AuthModal from "./Authentication/AuthModal";
import UserSidebar from "./Authentication/UserSidebar";

const useStyles = makeStyles((theme) => ({
    title: {
        flex: 1,
        color: "gold",
        fontFamily: "Montserrat",
        fontWeight: "bold",
        cursor: "pointer",
    },
}));


function Header() {
    const classes = useStyles();
    const { currency, setCurrency, user } = CryptoState();

    const navigate = useNavigate();

    const darkTheme = createTheme({
        palette: {
            primary: {
                main: "#fff",
            },
            type: "dark",
        },
    });

    return (
        <ThemeProvider theme={darkTheme}>
            <AppBar color="transparent" position="static">
                <Container>
                    <Toolbar>
                        <Typography
                            onClick={() => navigate(`/`)}
                            variant="h6"
                            className={classes.title}
                        >
                            CryptoInsight Hub
                        </Typography>
                        <Select
                            variant="outlined"
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={currency}
                            style={{ width: 100, height: 40, marginLeft: 15 }}
                            onChange={(e) => setCurrency(e.target.value)}
                        >
                            <MenuItem value={"USD"}>USD</MenuItem>
                            <MenuItem value={"INR"}>INR</MenuItem>
                        </Select>
                        {user ? <UserSidebar /> : <AuthModal />}
                    </Toolbar>
                </Container>
            </AppBar>
        </ThemeProvider>
    );
}

export default Header;