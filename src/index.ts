
import * as fs from "fs";

enum Gender
{
   MALE='MALE',
   FEMALE='FEMALE',
}
interface User{
    name:string;
    age:number;
    email:string;
    Gender:Gender;
}


const FILE_PATH="./dist/userDetail.json";
const initialValue: User[]=[
    {
      name:"Jasleen",
      age:25,
      email:"abc@gmail.com",
      Gender:Gender.MALE,
    }
];

enum FILE_MODE{
    READ="r",
    WRITE="w",
    APPEND="a",
}

const checkFileExist=async(file: string):Promise<boolean>=>{
    try {
        await fs.promises.access(file,fs.constants.F_OK);
        return true;
    } catch (error) {
        return false;
    }
}
async function fillInitialDataIfFileNotExist():Promise<void>{
    fs.appendFile(FILE_PATH,JSON.stringify(initialValue),(err)=>{
        if(err){
            console.log("Error in creating file");
            return;
        }
        else{
            console.log("File and data inserted successfully");
            return;
        }
        
    })
}
async function createNewUser(newUser: User):Promise<void>{
    await fs.readFile(FILE_PATH,"utf-8",(err,data: string|Buffer)=>{
         if(err){
             console.log(err);
             return;
         }
        const parsedData=JSON.parse(data as string);
        const isEmailExist: boolean=parsedData.some((obj: any)=>{
          return obj.email===newUser.email;
        })
       
       if(isEmailExist){
         console.log(`User with this ${newUser.email} already exist`);
       }
       else{
         const appendedData: User[]=[...parsedData,newUser];
         fs.writeFile(FILE_PATH,JSON.stringify(appendedData),(err)=>{
          if(err)
          {
              console.log(err);
              return;
          }
          else{
              console.log("New user added successfully");
              return;
          }
         })
       }
     })
}
async function getAllUserDetails():Promise<void>{
    await fs.readFile(FILE_PATH,"utf-8",(err,data:string|Buffer)=>{
        if(err){
            console.log(err);
            return;
        }
       const parsedData=JSON.parse(data as string);
      console.log(parsedData);
    });
    return;
}

async function getUserDetailByEmail(email: string):Promise<void>{
    await fs.readFile(FILE_PATH,"utf-8",(err,data: string| Buffer)=>{
        if(err){
            console.log(err);
            return;
        }
       const parsedData=JSON.parse(data as string);
       const indexToBeSearched: number=parsedData.findIndex((obj: any)=>{
         return obj.email===email;
       })
       if(indexToBeSearched===-1)
       {
        console.log("email not exist");
       }
       else{
        console.log(parsedData[indexToBeSearched]);
       }       
    });
    return;
}

async function deleteUserByEmail(email: string)
{
    await fs.readFile(FILE_PATH,"utf-8",(err,data: string|Buffer)=>{
        if(err){
            console.log(err);
            return;
        }
       const parsedData=JSON.parse(data as string);
       const indexToBeSearched: number=parsedData.findIndex((obj: any)=>{
         return obj.email===email;
       })
       if(indexToBeSearched===-1)
       {
        console.log("email not exist");
       }
       else{ 
       console.log(parsedData.splice(indexToBeSearched,1));
       console.log(JSON.stringify(parsedData));
       fs.writeFile(FILE_PATH,JSON.stringify(parsedData),(err)=>{
        if(err)
        {
            console.log(err);
            return;
        }
        else{
            console.log("User deleted  successfully");
            return;
        }
    })
} 
    });
    return; 
}

async function updateUserByEmail(email: string, name?: string, Gender?: Gender,age?: number):Promise<void>{
    await fs.readFile(FILE_PATH,"utf-8",(err,data: string|Buffer)=>{
        if(err){
            console.log(err);
            return;
        }
        const parsedData=JSON.parse(data as string);
        const indexToBeSearched: number=parsedData.findIndex((obj: any)=>{
          return obj.email===email;
       })
       if(indexToBeSearched===-1)
       {
        console.log("email not exist");
       }
       else
       {
        if(name)
        {
            parsedData[indexToBeSearched].name=name;
        }
        if(age)
        {
            parsedData[indexToBeSearched].age=age;
        }
        if(Gender)
        {
            parsedData[indexToBeSearched].Gender=Gender;
        }
        console.log(parsedData);
        fs.writeFile(FILE_PATH, JSON.stringify(parsedData),(err)=>{
            if(err)
            {
                console.log(err);
                return;
            }
            else{
                console.log("User Updated  successfully");
                return;
            }
           })
       }
    })
    return;
}
async function main()
{
    const isFileExist=await checkFileExist(FILE_PATH);
    if(isFileExist)
    {
        const newUser: User={
            name:"john",
            age:23,
            email:"abc3@gmail.com",
            Gender:Gender.FEMALE, 
        }
        const emailToBeSearched: string="abc3@gmail.com";
       await createNewUser(newUser);
       await getAllUserDetails();
       await getUserDetailByEmail(emailToBeSearched);
       await deleteUserByEmail("abc4@gmail.com");
       await  updateUserByEmail(emailToBeSearched,"john marshal",Gender.MALE,26);
        
    }
    else{
     fillInitialDataIfFileNotExist();
    }
}
main();