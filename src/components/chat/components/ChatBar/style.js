import {makeStyles} from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({

    ListItemSecondaryAction: {
        '& > *': {
            margin: theme.spacing(1),
        }
    }
}));

export {useStyles};