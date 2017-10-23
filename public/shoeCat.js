var display = document.getElementById("display");

// var dropDownDisplay = document.querySelector("#drpdwn");
var dis = document.querySelector("#dis");

var template = document.getElementById("output").innerHTML;
var theTemplate = Handlebars.compile(template);

//display all shoes when show all button is clicked
  $.ajax({
    type: "GET",
    url: '/api/shoes/',
    dataType: "json",

  }).done(function(results) {
    var template = document.getElementById("output").innerHTML;
    var theTemplate = Handlebars.compile(template);

    result = theTemplate({
      stock: results.shoes
    });
    document.getElementById('results').innerHTML = result;
  });

function displayAllShoes() {
    $.ajax({
        type: "GET",
        url: '/api/shoes/',
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

        var firstLetB = brand.substring(0, 1);
        var capLetB = brand.substring(0, 1).toUpperCase();
        var firstLetC = color.substring(0, 1);
        var capLetC = color.substring(0, 1).toUpperCase();

        var capBrand = brand.replace(firstLetB, capLetB);
        var capColor = color.replace(firstLetC, capLetC);

        var display = document.getElementById("display");

        var table = document.getElementById("output").innerHTML;
        var theTemplate = Handlebars.compile(table);

        var shoes = {
            id: Id,
            brand: capBrand,
            color: capColor,
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
            url: '/api/shoes/',
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

            console.log(id);
            $.ajax({
                type: "POST",
                url: '/api/shoes/sold/' + id,
                dataType: "json",

                success: function(data) {},
                error: function(error) {

                }
            })
        });
});
