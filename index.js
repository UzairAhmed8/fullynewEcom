function submit (){
    let fullName = document.getElementById("userName").value;
    let userEmail = document.getElementById("email").value;
    let subject = document.getElementById("subject").value;
    let message = document.getElementById("message").value;
 
    let parans = {
             full_name: fullName,
             subject: subject,
             email: userEmail,
             message: message,
     }
     emailjs.send("service_i42yo9a" , "template_pw2s627" , parans).then((res) => {
         alert("Email Sent Succesfully");
         console.log(res);
     }).catch((err) => {
         alert("Query not Sent");
         console.log(err);})
 }