import { development } from "./env";
export default(()=>{
console.log('{{{{{{{{{{{{{{{}}}}}}}}}}}}}}}}}',process.env.projectEnvironment);
switch(process.env.projectEnvironment){
    case 'dev':
    case 'development':
        return development;
        case 'stag':
        case 'staging':
        return staging;
        default :
        return development
}
 })()