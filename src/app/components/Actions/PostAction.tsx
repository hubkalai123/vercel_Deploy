"use server";
import axios from "axios";

export const postData = async (data:any) => {
    try {
        const response = await axios.post(
            "https://jsonplaceholder.typicode.com/posts",
            data
        );
        return response.data; 
    } catch (error) {
        console.error("Error posting data:", error);
        throw error; 
    }
};

export const EditData = async (data:any,Id:any) => {
    try {
        const response = await axios.put(
            `https://jsonplaceholder.typicode.com/posts/${Id}`,
            data
        );
        return response.data; 
    } catch (error) {
        console.error("Error posting data:", error);
        throw error; 
    }
}
export const contactList = async () => {
    try {
      console.log("display_server");
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      const dataIsArray = Array.isArray(res.data);
      const contacts = dataIsArray ? res.data : [res.data];
      
      return { contacts };
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error; // rethrow the error to be caught by the caller
    }
  };


export const DeleteList =  async (id:any) => {
    try {
        const res = await axios.delete(`https://jsonplaceholder.typicode.com/posts/1/${id}`);
        return res;
    } catch (error:any) {
        console.error("Error posting data:", error);
    }
}