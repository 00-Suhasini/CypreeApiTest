
import BaseService from "./BaseService";
import endpoints from "../utils/endpoints";

class petService{
    createPet(payload){
        return BaseService.post(endpoints.CREATE_PET,payload);
    }
    getPet(id){
        return BaseService.get(endpoints.GET_PET+ id);
    }
    updatePet(payload){


        return BaseService.put(endpoints.UPDATE_PET,payload);
    }
    deletePet(id){
        return BaseService.delete(endpoints.DELETE_PET+id);
    }
    }
    export default new petService();