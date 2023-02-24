declare class JobService {
    private jobRepository;
    constructor();
    getAll: () => Promise<any>;
    save: (job: any) => Promise<any>;
    removeJob: (idJob: any) => Promise<any>;
}
declare const _default: JobService;
export default _default;
