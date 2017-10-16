// $(function() {


    var display = document.getElementById("display");

    var dropDownDisplay = document.querySelector("#drpdwn");
    var dis = document.querySelector("#dis");

    var brandropDowns = document.getElementById("newBrandOption").innerHTML;
    var brandDrops = Handlebars.compile(brandropDowns);
    var colordropDowns = document.getElementById("newColorOption").innerHTML;
    var colorDrops = Handlebars.compile(colordropDowns);



    function displayAllShoes() {
        $.ajax({
            type: "GET",
            url: 'https://vaztonyo-shoe-api.herokuapp.com/api/shoes',
            // dataType: "json",

        }).done(function(results) {
          var template = document.getElementById("output").innerHTML;
          var theTemplate = Handlebars.compile(template);

                result = theTemplate({
                    stock: results.shoes
                });
                document.getElementById('results').innerHTML = result;
            });
        };

        //     display.innerHTML = theTemplate({
        //         stock: data
        //     })
        //
        //     dis.innerHTML = brandDrops({
        //         stock: data
        //     })
        //
        //     dropDownDisplay.innerHTML = colorDrops({
        //         stock: data
        //     })
        // },
        // error: function(error) {
        //     // alert('failed while adding stock');
        // }
    // })
// });







//
//     $('#show').on('click', function() {
//         var brand = document.getElementById('brand').value;
//         var color = document.getElementById('color').value;
//         var size = document.getElementById('size').value;
//         var inStock = document.getElementById('InStock').value;
//         var price = document.getElementById('Price').value;
//
//         var display = document.getElementById("display");
//
//         // var table = document.getElementById("output").innerHTML;
//         // var theTemplate = Handlebars.compile(table);
//
//         var shoes = {
//             brand: brand,
//             color: color,
//             size: size,
//             in_stock: inStock,
//             price: price
//         }
//         console.log(shoes);
//
//         $.ajax({
//             type: "POST",
//             url: 'localhost:8080/api/shoes',
//             dataType: "json",
//             data: shoes,
//             success: function(data) {
//
//                 display.innerHTML = theTemplate({
//                     stock: data.shoes
//                 })
//             },
//             error: function(error) {
//
//             }
//         })
//     })
//
//     $('#dis').on('click', function(e) {
//
//         var brandOption = e.target.value;
//
//         $.ajax({
//             type: "GET",
//             url: 'localhost:8080/api/shoe/brand/' + brand,
//             success: function(data) {
//                 console.log(data);
//                 display.innerHTML = theTemplate({
//                     stock: data
//                 })
//             },
//             error: function(error) {
//
//             }
//         })
//     })
//
//
//
//
//     $('#drpdwn').on('click', function(e) {
//
//         var color = e.target.value;
//
//         $.ajax({
//             type: "GET",
//             url: 'localhost:8080/api/shoe/color/' + color,
//             success: function(data) {
//                 display.innerHTML = theTemplate({
//                     stock: data
//                 })
//             },
//             error: function(error) {
//
//             }
//         })
//     })
//
//
//     $('#display').on('click', function(e) {
//         var id = e.target.value;
//
//         $.ajax({
//             type: "POST",
//             url: 'localhost:8080/api/shoes/sold/' + id,
//             dataType: "json",
//
//             success: function(data) {
//                 display.innerHTML = theTemplate({
//                     stock: data
//                 })
//             },
//             error: function(error) {
//
//             }
//         })
//     })
//
//
// })
