declare class AuthService {
    private employerRepository;
    constructor();
    register: (employer: any) => Promise<any>;
    checkUser: (employer: any) => Promise<"Wrong User" | "Wrong Password" | {
        token: string;
        id_employer: any;
        employerName: any;
    }>;
}
declare const _default: AuthService;
export default _default;
