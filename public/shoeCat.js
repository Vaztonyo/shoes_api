var display = document.getElementById("display");

var dropDownDisplay = document.querySelector("#drpdwn");
var dis = document.querySelector("#dis");

// var brandropDowns = document.getElementById("newBrandOption").innerHTML;
// var brandDrops = Handlebars.compile(brandropDowns);
// var colordropDowns = document.getElementById("newColorOption").innerHTML;
// var colorDrops = Handlebars.compile(colordropDowns);
var template = document.getElementById("output").innerHTML;
var theTemplate = Handlebars.compile(template);

//display all shoes when show all button is clicked
function displayAllShoes() {
    $.ajax({
        type: "GET",
        url: 'https://vaztonyo-shoe-api.herokuapp.com/api/shoes',
        dataType: "json",

    }).done(function(results) {
        var template = document.getElementById("output").innerHTML;
        var theTemplate = Handlebars.compile(template);

        result = theTemplate({
            stock: results.shoes
        });
        document.getElementById('results').innerHTML = result;
    });
};


//
$(function() {
    //add s
    $('#show').on('click', function() {
        var brand = document.getElementById('brand').value;
        var color = document.getElementById('color').value;
        var size = document.getElementById('size').value;
        var inStock = document.getElementById('InStock').value;
        var price = document.getElementById('Price').value;
        var Id = document.getElementById('Id').value;

        var display = document.getElementById("display");

        var table = document.getElementById("output").innerHTML;
        var theTemplate = Handlebars.compile(table);

        var shoes = {
            id: Id,
            brand: brand,
            color: color,
            size: size,
            in_stock: inStock,
            price: price
        }
        console.log(shoes);
        if (!brand || !color || !Id || !size) {
            return;
        }
        $.ajax({
            type: "POST",
            url: 'https://vaztonyo-shoe-api.herokuapp.com/api/shoes',
            dataType: "json",
            data: shoes,
            success: function(data) {

                display.innerHTML = theTemplate({
                    stock: data.shoes
                })
            },
            error: function(error) {

            }
        })
    })

    $('#search').on('keyup', function() {
        var input, filter, table, tr, td, i;
        input = document.getElementById("search");
        filter = input.value;
        table = document.getElementById("table");
        tr = table.getElementsByTagName("tr");

        for (i = 0; i < tr.length; i++) {
            td = tr[i].getElementsByTagName("td")[2];

            if (td) {
                if (td.innerHTML.indexOf(filter) > -1) {
                    tr[i].style.display = "";
                } else {
                    tr[i].style.display = "none";
                }
            }
        }
    });
    //
    //
    //
    //
    $('#filter').on('keyup', function() {
        var input, filter, table, tr, tdB, i;
        input = document.getElementById("filter");
        filter = input.value;
        table = document.getElementById("table");
        tr = table.getElementsByTagName("tr");

        for (i = 0; i < tr.length; i++) {
            tdB = tr[i].getElementsByTagName("td")[0];

            if (tdB) {
                if (tdB.innerHTML.indexOf(filter) > -1) {
                    tr[i].style.display = "";
                } else {
                    tr[i].style.display = "none";
                }
            }
        }
    });


    $('#results').on('click', function(e) {
            var id = e.target.value;
            // var table = document.getElementById("output").innerHTML;
            // var theTemplate = Handlebars.compile(table);
            console.log(id);
            $.ajax({
                type: "POST",
                url: 'https://vaztonyo-shoe-api.herokuapp.com/api/shoes/sold/' + id,
                dataType: "json",

                success: function(data) {},
                error: function(error) {

                }
            })
        });
});
