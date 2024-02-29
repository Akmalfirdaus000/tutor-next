import { Metadata } from "next/dist/lib/metadata/types/metadata-interface";

import React, { Children, ReactNode } from "react";
interface ProfileData {
  id : number,
  body: string;
  title: string;
}

async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    next: {
      revalidate: 0,
    },
  });

  if (!res.ok) {
    // This will activate the closest error.js Error Boundary
    throw new Error("Failed to fetch data");
  }
  
  return await res.json();
} 

export async function generateMetadata(): Promise<Metadata> {
  const data: ProfileData = await getData();
 const idData = data.id === 99 ?99:'siswa'
  return{
    title:'akmal '+idData
  }
}
export default async function Layout({
  team,
  user,
  children
}: {
  team: ReactNode;
  user: ReactNode;
  children: ReactNode;
}) {
  getData()
  const data: ProfileData = await getData();
  console.log(data);
  
  return (
    <>
    {children}
    <h1 className="  flex justify-center">holla : {data.title}</h1>
      <div className=" grid grid-cols-2 gap-3">
       {/* {data.map((items: ProfileData, index : any)=>(
        <h1 key={index}>{items.title}</h1>
       ))} */}
        <div>{team}</div>
          <div >{user}</div>
      </div>
    </>
  );
}