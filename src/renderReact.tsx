import * as React from 'react';
import ReactDOM from 'react-dom/client';
import { StyledEngineProvider } from '@mui/material/styles';
import PersonRow from './Componets/PersonDay';
import Calander from './Componets/Calander/Calander'

// import './demo'
const Today = new Date()


const root = ReactDOM.createRoot(document.querySelector("#root"))
root.render(<Calander date = {Today}/>)
// const numbers = [1, 2, 3, 4, 5];
// const listItems = numbers.map((numbers) =>
//   <PersonRow start = {numbers}/>
// );
// root.render(listItems)


