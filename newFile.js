bootstrap_alert = function () { };
bootstrap_alert.warning = function (message) {
    $('#alert_placeholder').html('<div class="alert"><a class="close" data-dismiss="alert">×</a><span>' + message + '</span></div>');
};
bootstrap_alert1 = function () { };
bootstrap_alert1.warning = function (message) {
    $('#alert_placeholder1').html('<div class="alert"><a class="close" data-dismiss="alert">×</a><span>' + message + '</span></div>');
};
function yeet() {
    try {
        event.preventDefault();
         if (inputVal == false) {
        } else {
            bootstrap_alert.warning('Your order for '.concat(inputVal).concat(' pie has been added to the waitlist'));
            }
    }
    catch (err) {
        bootstrap_alert.warning("You have ordered a random pie! (Don't come whining to me, you should have told me what you want!)");
    }
};



function cool() {
    event.preventDefault();
    // Selecting the input element and get its value 
    inputVal = document.getElementById("noice").value;
    // Displaying the value
    if (inputVal == false) {
        bootstrap_alert1.warning('Please order something!!');
    }
    else {
        bootstrap_alert1.warning('You have successfully ordered a pie with these items: '.concat(inputVal));
    }
};
