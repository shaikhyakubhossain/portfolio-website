import './globals.css'
import ComponentsWrapper from './component/ComponentsWrapper/components-wrapper.component';
import type { data } from '../app/constants/Types/api-data'

export default async function Home(): Promise<JSX.Element> {

    const url = "https://portfolio-website-backend-in-nodejs.vercel.app/userSkillsData"
    // const url = "http://localhost:4000/userSkillsData"

    const response = await fetch(url, { 
        method: "GET",
        headers: {
          "code": `${process.env.ACCESS_CODE}`
        },
        cache: "no-cache"
     });
    const data: data = await response.json();
    
    return data.error ? (
      <div className='bg-black text-center items-center text-2xl flex justify-center font-semibold text-red-400 h-dvh py-8'>{data.error}</div>
    ) : (
      <ComponentsWrapper data={data} />
    );
};