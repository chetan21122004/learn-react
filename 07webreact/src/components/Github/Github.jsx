import { useEffect, React, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
    const data = useLoaderData()
//   const [data, setdata] = useState([]);
//   useEffect(() => {
//     fetch("https://api.github.com/users/hiteshchoudhary")
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data);
//         setdata(data);
//       }, []);
//   });

  return (
    <>
      <h1 className=" text-3xl p-4 text-center m-4 bg-gray-500 text-green-200">
        Github followers: {data.followers}
      <img src={data.avatar_url} alt="git" width={300} />
      </h1>
    </>
  );
}

export default Github;


export const githubloader = async()=>{
    const res = await fetch("https://api.github.com/users/hiteshchoudhary")
     
    return res.json()

}