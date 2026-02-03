interface ILoginPost{
    email:string,
    password:string
}

interface IAuthService {
 validateInfoUser(data:ILoginPost):Promise<string>;
}

export{
    ILoginPost,
    IAuthService
}