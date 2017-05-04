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
var n;
//var txt;
function sort(pro: Product) {
   let obj = {};
   obj = {
       "name": pro.name,
       "cat": pro.cat,
       "price":pro.price
   }
   arr.push(obj);
   arr.sort();
   arr.reverse();
   console.log(arr);
   if (arr.length == 10)
   {
        n=  document.createElement('li');
       for (var i = 0; i < arr.length; i++){
         
      var txt = document.createTextNode('\n' + arr[i].name + "---->" + arr[i].cat + "---->" + arr[i].price);
      n.appendChild(txt);
       document.body.appendChild(n);
   }
   
   }
   

}
//sort(name:'sandeep',cat: 'book',price: 1555);
var result = new Product('Anandh', 'book', 55);
var r2 = new Product('Bharath', 'book', 155);
var r3 = new Product('Chandu', 'book', 255);
var r4 = new Product('Dilip', 'book', 355);
var r5 = new Product('Eshwar', 'book', 455);
var r6 = new Product('Fayaz', 'book', 555);
var r7 = new Product('Ganesh', 'book', 655);
var r8 = new Product('Harsha', 'book', 755);
var r9 = new Product('Irfan', 'book', 855);
var r10= new Product('Jaggu', 'book', 955);
sort(result);
sort(r2);
sort(r3);
sort(r4);
sort(r5);
sort(r6);
sort(r7);
sort(r8);
sort(r9);
sort(r10);
