"use client";
import Button from "@/components/layout/button/page";
import React from "react";
interface typesData {
  userId: number;
  id: number;
  title: string;
  body: string;
}
const BaseUrl = "https://jsonplaceholder.typicode.com/posts";
// eslint-disable-next-line @next/next/no-async-client-component
const ListData = async () => {
  const response = await fetch(BaseUrl);
  const posts = await response.json();
  return (
    <div className=" mx-16 my-16">
      {posts.map((post: typesData) => {
        return (
          <>
            <h1 className=" font-bold"> data data psk</h1>
            <p>id 1 : {post.id}</p>
            <Button />
            <p>id 2 :</p>
            <Button />
            <p>id 3 :</p>
            <Button />
          </>
        );
      })}
    </div>
  );
};
export default ListData;
