declare class UserService {
    private userRepository;
    constructor();
    getAll: () => Promise<any>;
    checkUser: (user: any) => Promise<"Email is not exit" | "Password is wrong" | {
        idUser: any;
        email: any;
        token: string;
    }>;
    register: (user: any) => Promise<any>;
    checkChangePassword: (idUser: any, oldPassword: any, newPassword: any) => Promise<{
        check: boolean;
        userFind: any[];
    }>;
}
declare const _default: UserService;
export default _default;
