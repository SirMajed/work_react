import { Alert } from '@material-ui/lab';
 
const MyAlert = (props) => {
    return (
        <Alert severity={props.type} color="info">
        {props.message}
      </Alert>  
    );
}
 
export default MyAlert;