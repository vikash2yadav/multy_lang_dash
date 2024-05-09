import TextField from '@mui/material/TextField';

const InputC = (props) => {
    return (
        <>
            <TextField label={props.label} 
            name={props.name}
            onChange={props.onChange}
            value={props.value}
            variant={props.variant}
            placeholder={props.placeholder} />
        </>
    )
}

export default InputC