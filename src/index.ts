
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
async function updateUserByEmail(email: string,name?: string, Gender?:Gender,age?: number):Promise<void>{
    await fs.readFile(FILE_PATH,"utf-8",(err,data)=>{
        if(err){
            console.log(err);
            return;
        }
        const parsedData: User[]=JSON.parse(data);
        const indexToBeSearched: number=parsedData.findIndex((obj: any)=>{
          return obj.email===email;
       })
       console.log(indexToBeSearched);
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
            
    })
    return;
}
async function createNewUser(newUser: User):Promise<void>{
       await fs.readFile(FILE_PATH,"utf-8",(err,data)=>{
            if(err){
                console.log(err);
                return;
            }
           const parsedData: User[]=JSON.parse(data);
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
async function deleteUserByEmail(email: string)
{
    await fs.readFile(FILE_PATH,"utf-8",(err,data)=>{
        if(err){
            console.log(err);
            return;
        }
       const parsedData: User[]=JSON.parse(data);
       const indexToBeSearched: number=parsedData.findIndex((obj: any)=>{
         return obj.email===email;
       })
       parsedData.splice(indexToBeSearched,1);
       console.log(parsedData);
       fs.writeFile(FILE_PATH,JSON.stringify(parsedData),(err)=>{
        if(err)
        {
            console.log(err);
            return;
        }
        else{
            console.log("User deleted added successfully");
            return;
        }
    })
    });
    return; 
}
async function getAllUserDetails():Promise<void>{
    await fs.readFile(FILE_PATH,"utf-8",(err,data)=>{
        if(err){
            console.log(err);
            return;
        }
       const parsedData: User[]=JSON.parse(data);
      console.log(parsedData);
    });
    return;
}
async function getUserDetailByEmail(email: string):Promise<void>{
    await fs.readFile(FILE_PATH,"utf-8",(err,data)=>{
        if(err){
            console.log(err);
            return;
        }
       const parsedData: User[]=JSON.parse(data);
       const indexToBeSearched: number=parsedData.findIndex((obj: any)=>{
         return obj.email===email;
       })
       console.log(parsedData[indexToBeSearched]);
    });
    return;
}
console.log(initialValue);
async function main()
{
    const isFileExist=await checkFileExist(FILE_PATH);
    if(isFileExist)
    {
        const newUser: User={
            name:"John",
            age:24,
            email:"abc2@gmail.com",
            Gender:Gender.MALE, 
        }
        const emailToBeSearched: string="abc@gmail.com";
        createNewUser(newUser);
        getUserDetailByEmail(emailToBeSearched);
        getAllUserDetails();
        
        getAllUserDetails();
    }
    else{
        fillInitialDataIfFileNotExist();
    }
}
main();