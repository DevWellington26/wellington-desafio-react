import styled from '@emotion/styled';
import { Search } from '@mui/icons-material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

export default function SearchButton(props){
    const SearchButton = styled(Button)({
        background: "#63666A",
        "&:hover":{
          background: "#63666A",
        },
        color: "white",
        padding: "1em"
    })

    return (
        <SearchButton onClick={props.handler} startIcon={<Search></Search>}>Buscar</SearchButton>
    )
}