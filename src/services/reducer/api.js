import axios from "axios";

export const fetchData =()=>{
axios.get('https://jsonplaceholder.typicode.com/users');
}