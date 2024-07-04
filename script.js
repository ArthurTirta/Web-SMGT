function validateForm() {
    let first_username=document.getElementById("firstname").value
    let last_username=document.getElementById("lastname").value
   console.log(first_username,last_username)

   if(first_username == null||first_username==""&& last_username == null||last_username=="" ){
    alert("mohon diisi secara lengkapa di bagian Message Us")
   }
}
