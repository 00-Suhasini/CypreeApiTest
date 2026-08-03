
import headers from "../utils/headers";

class BaseService{
    get(url){
          cy.log("Request URL = " + url);
        return cy.request({
            method : "GET",
            url: url,
            headers: headers
        })
    }



    post(url,body){
        return cy.request({
            method:"POST",
            url: url,
            headers: headers,
            body: body
        })
    }
    put(url,body){
     return cy.request({
            method:"PUT",
            url: url,
            headers: headers,
            body: body
        })   
    }
    delete(url){
        return cy.request({
            method:"DELETE",
            url: url,
            headers: headers
        })  
    }
}

export default new BaseService();