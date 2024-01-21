$(document).ready(function () {
    var apiKey = "rzp_test_ion2ntxzdA2QWP"; 

    $('.button').on('click', function (e) {
        e.preventDefault();

        var userEnteredAmount = prompt("Enter the donation amount in INR:");
        var dynamicAmount = parseFloat(userEnteredAmount);
        if (isNaN(dynamicAmount) || dynamicAmount <= 0) {
            alert("Please enter a valid donation amount ");
            return;
        }

        var options = {
            key: apiKey,
            amount: dynamicAmount * 100, 
            currency: "INR",
            name: "Sai Suthirth",
            description: "Charitable Trust",
            image: "",
            prefill: {
                name: "Ram sundar",
                email: "ramsun@gmail.com",
            },
            theme: {
                color: "#F37254"
            },
            handler: function (response) {
                console.log(response);
                var paymentSuccessPage = window.open('last.html', '_blank');
            }
        };

        var rzp = new Razorpay(options);
        rzp.open();
    });
});
