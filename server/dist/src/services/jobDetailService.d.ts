declare class JobDetailService {
    private jobDetailRepository;
    constructor();
    getAll: () => Promise<any>;
    save: (jobDetail: any) => Promise<any>;
    removeJobDetail: (idJobDetails: any) => Promise<any>;
}
declare const _default: JobDetailService;
export default _default;
