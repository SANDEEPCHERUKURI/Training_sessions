/**
 * Created by semanticbits-sandeep on 5/5/17.
 */
interface Product{
    name: string;
    cat: string;
    price: number;
}
let arr = [];
class Product implements Product{
    constructor(public name:string,public cat:string,public price:number) {
        this.name = name;
        this.cat = cat;
        this.price = price;
    }

}
var n,n2,n3;
//var txt;
function sort(pro: Product) {
    let obj = {};
    obj = {
        "name": pro.name,
        "cat": pro.cat,
        "price":pro.price
    }
    arr.push(obj);
    arr=arr.sort(function(a, b) {
        var nameA = a.name.toUpperCase(); // ignore upper and lowercase
        var nameB = b.name.toUpperCase(); // ignore upper and lowercase
        if (nameA < nameB) {
            return -1;
        }
        if (nameA > nameB) {
            return 1;
        }

        // names must be equal
        return 0;
    });
    //arr.sort();
    //arr.reverse();
    console.log(arr);
    if (arr.length== 3)
    {
        var tr;

        n2=  document.createElement('li');
        n3=  document.createElement('li');
        for (var i = 0; i < arr.length; i++){
            //tr=document.createElement('tr');

            n=  document.createElement('td');
            var txt = document.createTextNode(arr[i].name+"    :      ");
            var txt1=document.createTextNode(arr[i].cat+"    :       ");
            var txt2=document.createTextNode(arr[i].price+"    :      ");
            n.appendChild(txt);
            document.getElementById("example").appendChild(n);
            n.appendChild(txt1);
            document.getElementById("example").appendChild(n);
            n.appendChild(txt2);
            document.getElementById("example").appendChild(n);
           // document.body.appendChild(n);


            /*document.body.appendChild(n2);
            document.body.appendChild(n3);*/
        }

    }


}
let getdata=()=>{
    alert('sandeep');
    var name1 = (<HTMLInputElement>document.getElementById("name")).value;
    alert(name1);
    var cat1 = (<HTMLInputElement>document.getElementById("cat")).value;
    var price1 = parseInt((<HTMLInputElement>document.getElementById("price")).value);

    var result = new Product(name1, cat1,price1);
    sort(result);
    var dirtyFormID = 'form_id';
    var resetForm = <HTMLFormElement>document.getElementById(dirtyFormID);
    resetForm.reset();
}

