odoo.define("website_ecommerce_address.tour", function (require) {
    "use strict";

    var tour = require("web_tour.tour");

    var steps = [
        {
            trigger: "a:contains('Large Meeting Table')",
        },
        {
            trigger: "#add_to_cart",
        },
        {
            trigger: "a[href='/shop/cart']",
            extra_trigger: "sup.my_cart_quantity:contains('1')",
        },
        {
            trigger: ".btn-primary:contains('Process Checkout')",
        },
    ];
    tour.register(
        "website_ecommerce_address_tour",
        {
            url: "/shop",
            test: true,
        },
        steps
    );
    return {
        steps: steps,
    };
});
