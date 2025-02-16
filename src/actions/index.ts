"use server";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const saveSnippet = async ( id:number, code:string, title:string ) => {

    await prisma.snippets.update({
      where: { id },
      data: { code, title },
    });
    console.log(`Snippet with ID ${id} updated successfully.`);
  revalidatePath(`/snippet/${id}`)
redirect(`/snippet/${id}`)

};
 

export const deleteSnippet=async(id:number)=>{
    await prisma.snippets.delete({
        where:{
            id
        }
    })
revalidatePath('/')
    redirect("/")


}
export async function createSnippet(prevState: { message: string }, formData: FormData) {

    try {
        const title = formData.get("title");
        const code = formData.get("code");

        if (typeof title !== "string" || title.length < 4) {
            return { message: "Title is required and must be longer" }
        }
        if (typeof code !== "string" || code.length < 8) {
            return { message: "Code is required and must be longer" }
        }

        await prisma.snippets.create({
            data: {
                title,
                code
            }
        });

        // throw new Error("Some Internal server error");
revalidatePath('/')
       
    } catch (error: unknown) {
        if(error instanceof Error){
            return { message: error.message}
        }else{
            return {message:"Some internal server error"}
        }
    }

    redirect("/");
}