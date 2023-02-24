declare class JobDetailServices {
    private jobDetailRepository;
    constructor();
    getAll: () => Promise<any>;
    save: (jobDetail: any) => Promise<any>;
    remove: (id: any) => Promise<any>;
}
declare const _default: JobDetailServices;
export default _default;
