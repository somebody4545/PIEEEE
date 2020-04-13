$("#Notreal").hide();
$("#Notreal").show();

function yeet() {
    try {
        event.preventDefault();
         if (inputVal == false) {
        } else {
                alert('Your order for '.concat(inputVal).concat(' pie has been added to the waitlist'));
            }
    }
    catch (err) {
            alert("You have ordered a random pie! (Don't come whining to me, you should have told me what you want!)");
    }
});
function cool() {
    event.preventDefault();
    // Selecting the input element and get its value 
    inputVal = document.getElementById("noice").value;
    // Displaying the value
    if (inputVal == false) {
        alert('Please order something!!');
    }
    else {
        alert('You have successfully ordered a pie with these items: '.concat(inputVal));
    }
});
