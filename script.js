const btnpdetails = document.getElementById('btnpdetails');

function validatepdetails(){
    let donername = document.getElementById('donername').value;
    let emailid = document.getElementById('email').value;
    let mobilenum = document.getElementById('mobile').value;

    let namechk = /^[A-Za-z ]{3,30}$/;
    let emailchk = /^[a-zA-z_0-9]{3,}@[A-Za-z]{3,}[.]{1}[A-Za-z.]{2,6}$/;
    let mobilechk = /^[6789]{1}[0-9]{9}$/;

    if(namechk.test(donername)){
        document.getElementById('errdonername').innerText = " ";
    }else{
        document.getElementById('errdonername').innerText = "Enter valid name";
        return false;
    }

    if(emailchk.test(emailid)){
        document.getElementById('erremail').innerText = " ";
    }else{
        document.getElementById('erremail').innerText = "Enter valid email";
        return false;
    }

    if(mobilechk.test(mobilenum)){
        document.getElementById('errmobile').innerText = " ";
    }else{
        document.getElementById('errmobile').innerText = "Enter valid mobile number";
        return false;
    }

    alert('Personal details successfully submitted')
}

function validateadetails(){
    let pincode = document.getElementById('pincode').value;

    let pincodechk = /^[0-9]{6}$/;

    if(pincodechk.test(pincode)){
        document.getElementById('errpincode').innerText = " ";
    }else{
        document.getElementById('errpincode').innerText = "Enter 6 digits pincode";
        return false;
    }

    alert('Address details successfully submitted')
}

function validateodetails(){
    let weight = document.getElementById('weight').value;

    let weightchk = /^[4-9]{1}[0-9]{1}$/;

    if(weightchk.test(weight)){
        document.getElementById('errweight').innerText = " ";
    }else{
        document.getElementById('errweight').innerText = "Only 40kg to 99kg accepted";
        return false;
    }

    alert('Other details successfully submitted')
}