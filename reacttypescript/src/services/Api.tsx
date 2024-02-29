import development from "./Development";
export default(()=>{
    return{
        USER:development.api.url+"user/list",
        USER_DETAIL:development.api.url+"admin/user/view"
      
    }

})();



