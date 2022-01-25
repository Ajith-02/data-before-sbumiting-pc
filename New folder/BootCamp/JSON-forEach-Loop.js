var empDetails = [{
    id : "717",
    fname : "Ajith",
    msg : "Welcome to Office",
    gmail : "ajith551@gmail.com"
}
    ];

empDetails.forEach(function(details) {
    console.log("ID:" + details.id)
    console.log("Name:" + details.fname)
    console.log("Msg:" + details.msg)
    console.log("gmail:" + details.gmail)
})
