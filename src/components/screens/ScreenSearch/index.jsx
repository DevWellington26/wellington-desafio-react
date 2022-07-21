import Box from '@mui/material/Box';
import SearchButton from "../../SearchButton";
import axios from 'axios';
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import './styles.css';
import Alert from '@mui/material/Alert';

export default function ScreenSearch(props){
    const [resultRequest, setResultRequest] = useState(null);
  
    async function handler(){
      const user = document.getElementById("search").value;
      if(user.length === 0){
        setResultRequest(<Alert severity="warning">informe um nome de usuário válido do github!</Alert>);
        return;
      }
      const resultProfile = await axios.get(`https://api.github.com/users/${user}`).catch( (result) => {
        if(result.message === "Not Found"){
            setResultRequest(<Alert severity="warning">Usuário não encontrado no github. Verifique se você digitou o nome corretamente!</Alert>)
        }else{
            setResultRequest(<Alert severity="error">Possivel problema de conexão, tente novamente!</Alert>)
        }
        }
      )
      const resultRepositories = await axios.get(`https://api.github.com/users/${user}/repos`).catch( () => { 
      })
      if(resultProfile && resultRepositories){
        props.setProfile(resultProfile.data)
        props.setRepository(resultRepositories.data)
        props.handler()
      }
      else{
        <Alert severity="error">Ocorreu um erro, verifique sua conexão com a internet e tente novamente!</Alert>
      }
      return;
    }

    return (
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            minHeight="100vh"
            flexDirection="column"
        >
            <div>
                <p className='marginLeft'>Buscar Repositório no Github</p>
                <Box flexDirection="row">
                    <TextField id="outlined-basic" id="search" label="digite o nome do usuário" variant="outlined" />
                    <SearchButton handler={handler}></SearchButton>
                </Box>
                {resultRequest && resultRequest}
            </div>
        </Box>
    )
}