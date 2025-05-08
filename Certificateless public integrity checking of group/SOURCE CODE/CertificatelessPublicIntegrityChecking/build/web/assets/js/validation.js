function checkForm(form)
{
    
    if (form.pwd1.value == form.pwd2.value) {
        alert("Hash value Matches.. \n File is Safe And Unchanged ");
        form.pwd1.focus();
        return false;
    } else {
        alert("Incorrect Hash Values...\nFile is Modified By others ");
        form.pwd1.focus();
        return false;
    }

}