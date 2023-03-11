import type {NextPage} from 'next';
import axios from 'axios';
import {Video} from '../types';

interface IProps {
  videos: Video[]
}

export default function Home({videos}:IProps) {
  console.log(videos);

  return (
    <h1>Hi</h1>
  
       
      )
    
   
  
}

export const getServerSideProps = async () => {
  const {data} = await axios.get(`http://localhost:3000/api/post`);


  

  return {
    props: {
      videos: data
    }
  }

}
