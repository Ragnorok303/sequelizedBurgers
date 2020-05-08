$(document).ready(function () {
    function userCheck() {
        if (window.sessionStorage.length === 0) {
            window.location = "/";
        }
    }



    $("#burger-btn").on("click", function (e) {
        //console.log('test');
        userCheck();
        e.preventDefault();

        var newBurger = {
            burger_name: window.sessionStorage.getItem("currentUserName") + "'s " + $("#burger-input").val().trim(),
            CustomerId: window.sessionStorage.getItem("currentUserId")
        }

        if (newBurger.burger_name != '') {
            $.ajax("/api/burgers", {
                type: "POST",
                data: newBurger
            })
                .then(function () {
                    location.reload();
                });
        }


    });

    $(".eat-btn").on("click", function (e) {
        userCheck();
        e.preventDefault();

        var id = $(this).data("id");
        console.log("Updating burger with id: " + id);
        $.ajax("api/burgers/" + id, {
            type: "PUT",
            data: true
        })
            .then(function () {
                location.reload();
            });
    });

    $("#signin-btn").on("click", function (e) {
        e.preventDefault();

        var newCustomer = {
            customer_name: $("#signin-input").val().trim(),
        }
        if (newCustomer.customer_name != '') {
            console.log("Creating new customer name: " + newCustomer.customer_name);
            $.ajax("api/customers", {
                type: "POST",
                data: newCustomer,
            })
                .then(function (data) {
                    var sessionStorage = window.sessionStorage;
                    sessionStorage.setItem("currentUserId", data);
                    sessionStorage.setItem("currentUserName", newCustomer.customer_name);

                    var url = window.location.href;
                    window.location = url + "home";
                });
        }
    });

});