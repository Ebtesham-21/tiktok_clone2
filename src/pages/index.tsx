import type {NextPage} from 'next';
import axios from 'axios';



export default function Home() {
  return (
    <h1>Hi</h1>
  
       
      )
    
   
  
}

export const getServerSideProps = async () => {
  const response = await axios.get(`http://localhost:3000/api/post`);

  console.log(response.data.name);

  return {
    props: {}
  }

}
