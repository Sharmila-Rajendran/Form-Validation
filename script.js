function Validation(){
    var fname=document.formvalidation.fname.value;
    var lname=document.formvalidation.lname.value;
    var City=document.formvalidation.City.value;
    var mobile=document.formvalidation.mobile.value;
    var address=document.formvalidation.address.value;
    if(fname===null || fname===""){
        alert("Please enter your first name");
        return false;
    }
    else if(lname===null || lname===""){
        alert("Please enter your last name");
        return false;
    }
    else if(City===null || City===""){
        alert("Please enter your city");
        return false;
    }
    else if(mobile===null || mobile===""){
        alert("Please enter your mobile number");
        return false;
    }
    else if(address===null || address===""){
        alert("Please enter your mobile number");
        return false;
    }
    else{
        alert("Submission Successfull");
    }
}