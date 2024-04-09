
import { makeStyles } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        height: "100vh",
        width: "85.5vw",
        flexDirection: 'column',
        alignItems: 'flex-start',
        paddingTop: '5vh',
        marginLeft: '12.5vw',
        overflowY: 'scroll',
        backgroundColor: '#f5f5f5',
        padding: '10px',
    },

    table: {
        minWidth: 650,
        maxWidth: "82.5vw",
    },
    TableHeader: {
        backgroundColor: '#f5f5f5',
        color: '#000000',
        fontSize: '18px',
        fontWeight: 'bold',
        padding: '10px',
    },
    page: {
        margin: '20px',
    },
    gridContainer: {
      display: "flex",
      height: "25vh",
      overflowY: "scroll", 
    },
    row: {
        display: "flex",
        width: "97%",
        justifyContent: "flex-end",
        marginBottom: theme.spacing(2),
        '& > *': {
            margin: theme.spacing(2),
        },
    },
    form: {
        display: "flex",
        width: "80vw", 
        borderRadius: "5px",
        marginBottom: "20px",
        flexDirection: "column",
        justifyContent: "center",
        textAlign: "left",
        alignItems: "center",
        padding: "20px",
        marginTop: "20px",
        '& > *': {
            margin: theme.spacing(1),
            width: '60vw',
        },
    },
    card: { 
        margin: 'auto', 
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        border:'1px solid #ffffffff',
        alignItems: 'center', 
    },
    selectedCard: { 
        margin: 'auto', 
        display: 'flex',
        flexDirection: 'row',
        border:'1px solid black',
        justifyContent: 'center',
        alignItems: 'center', 
        backgroundColor: '#f5f5f5', 
    },
    ownedCard: {  
        margin: 'auto', 
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center', 
        backgroundColor: '##FEA3A4',
    },
    cardContent: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        width: '100%',
    },
    stallIdContainer: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%', 
        border: '1px solid #e0e0e0',
        borderRadius: '5px',
        padding: '10px',
        margin: '10px',
    },
    list : {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        border: '1px solid #e0e0e0',
        backgroundColor: '#f5f5f5',
        borderRadius: '5px',
        padding: '10px',
        margin: '10px',
    },
    listItem: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        width: '100%',
        border: '1px solid #1c1c1c',
        borderRadius: '5px',  
        marginBottom: '5px',

    },
    listItemButton: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%', 
        justifyContent:'space-between',
        '& > *': { 
            width: '80vw',
        },
    }
}));

export default useStyles;