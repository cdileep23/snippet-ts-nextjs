"use server";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";

export const saveSnippet = async ( id:number, code:string, title:string ) => {

    await prisma.snippets.update({
      where: { id },
      data: { code, title },
    });
    console.log(`Snippet with ID ${id} updated successfully.`);
  
redirect(`/snippet/${id}`)

};


export const deleteSnippet=async(id:number)=>{
    await prisma.snippets.delete({
        where:{
            id
        }
    })

    redirect("/")


}