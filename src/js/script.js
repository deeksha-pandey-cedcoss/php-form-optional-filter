let new_string = "";
let str = "";
let products = [{
    "id": "100",
    "name": "iPhone 4S",
    "brand": "Apple",
    "os": "iOS"
},
{
    "id": "101",
    "name": "Moto X",
    "brand": "Motorola",
    "os": "Android"
},
{
    "id": "102",
    "name": "iPhone 6",
    "brand": "Apple",
    "os": "iOS"
},
{
    "id": "103",
    "name": "Samsung Galaxy S",
    "brand": "Samsung",
    "os": "Android"
},
{
    "id": "104",
    "name": "Google Nexus",
    "brand": "ASUS",
    "os": "Android"
},
{
    "id": "105",
    "name": "Surface",
    "brand": "Microsoft",
    "os": "Windows"
}];
let os = ['iOS', 'Android', 'Windows'];
let brand = ["Apple", "Samsung", "ASUS", "Microsoft", "Motorola"];
// jquery ready section
$(document).ready(function () {

    $("#os-sorting").on('load', dropdown_os());
    $("#brand-sorting").on('load', dropdown_brand());
    $("#search_detail").on('keyup', function () {
        new_string = "";
        let details = document.getElementById("search_detail").value;
        products.forEach(element => {

            if ((element.id == details) || (element.name == details)) {
                new_string += `<tr><td> ${element.id} </td><td> ${element.name} </td><td> ${element.brand}
            </td><td> ${element.os}  </td><td> <button class=btn onclick="remove(this)"> X </button></td></tr>`;
            }
            else if(details==0){
                $("#product_list").show();
            }

        });
        $("#product_list").html(new_string);
    })

    // Display of products
});
function display() {
    let i = 0;
    let list = "";
    products.forEach(element => {

        list += `<tr><td> ${element.id} </td><td> ${element.name} </td><td> ${element.brand}
         </td><td> ${element.os} </td><td> <button class=btn onclick="remove(this)"> X </button></td></tr>`
        i++;
    });

    document.getElementById("product_list").innerHTML = list;
    dropdown_brand();
    dropdown_os();
}
display();
// searching through buttons
function search_details() {
    new_string = "";
    let details = document.getElementById("search_detail").value;
    products.forEach(element => {

        if ((element.id == details) || (element.name == details)) {
            new_string += `<tr><td> ${element.id} </td><td> ${element.name} </td><td> ${element.brand}
            </td><td> ${element.os}  </td><td> <button class=btn onclick="remove(this)"> X </button></td></tr>`;
        }
    });
    document.getElementById("product_list").innerHTML = new_string;

}
// Dropdown for Operating System
function dropdown_os() {
    str = "";
    str += `<option value="">operating-system</option>`
    os.forEach(element => {

        str += `<option> ${element} </option>`;
    })

    document.getElementById("os-sorting").innerHTML = str;
}
// Dropdown for brands
function dropdown_brand() {
    str = "";
    str += `<option value="brand-sorting">brand-sorting</option>`
    brand.forEach(element => {

        str += `<option> ${element} </option>`;
    })
    document.getElementById("brand-sorting").innerHTML = str;
}
// filter details according to os and brands
function filter_details() {
    str = "";
    let filter_os = document.getElementById("os-sorting").value;
    let filter_brand = document.getElementById("brand-sorting").value;
    products.forEach(element => {


        if (filter_os == element.os && filter_brand == "brand-sorting") {
            str += `<tr><td> ${element.id} </td><td> ${element.name} </td><td> ${element.brand} </td><td>
        ${element.os} </td><td> <button class=btn onclick="remove(this)"> X </button></td></tr>`

        }
        else if (filter_os == "os-sorting" && filter_brand == element.brand) {

            str += `<tr><td> ${element.id} </td><td> ${element.name} </td><td> ${element.brand} </td><td>
        ${element.os} </td><td> <button class=btn onclick="remove(this)"> X </button></td></tr>`
        }
        else if (filter_os == element.os && filter_brand == element.brand) {
            str += `<tr><td> ${element.id} </td><td> ${element.name} </td><td> ${element.brand} </td><td>
        ${element.os} </td><td> <button class=btn onclick="remove(this)"> X </button></td></tr>`
        }
        
    })
    document.getElementById("product_list").innerHTML = str;
}
// function to rhide the details
function remove(i) {
    console.log(i);
    $(i).parent().parent().hide();
}
