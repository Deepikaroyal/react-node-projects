import setting from "./setting"

export default(()=>{
    return{
        Food_list_url :setting.api.url+'/get_data/' ,
        Food_search :setting.api.url ,
    }
})()