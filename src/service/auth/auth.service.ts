import { IAuthService, ILoginPost } from './IAuth.interface';
//Aqui va la regla de negocio, las consultas en tus bases de datos y tus querys.
//Trata de que cada accion distinta se implemente en metodos separados
export class AuthService implements IAuthService{
    constructor(){}
    public async greeting():Promise<string>{
        const accion = 'Hola mundo';
    
        return accion;
    }

    public async validateInfoUser( data:ILoginPost):Promise<string>{
        
            // const resp = false; 

        //tambien aqui puedes generar tur errores personalizaados
        if(!resp){
            const error = new Error('Este es un error personalisado');
            error.name = 'Error 404';
            error.message = 'Comunicate con el de soporte porfas!!!';

            throw error;
        }
        return resp;
    }
}