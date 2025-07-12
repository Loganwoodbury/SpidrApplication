export default {

    sendForm(formData){
        console.log("Json object: ", formData);
        console.log("First name: ", formData.firstName);
        console.log("Last name: ", formData.lastName);
        console.log("Phone number: ", formData.phoneNumber);
        console.log("Email: ", formData.emailAddress);
        console.log("Guess: ", formData.guess);
        console.log("Pin: ", formData.pin)
    }

}