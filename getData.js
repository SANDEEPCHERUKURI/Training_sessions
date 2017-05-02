/**
 * Created by Rajeev on 5/2/2017.
 */
var arr=[];
function add() {
    //  alert("<--------");

    var obj={};
    $(document).ready(function() {

        var name=$('#name').val();
        var gender=$('#gender').val();
        var des=$('#Designation').val();
        alert(des);
        obj={
            "name" : name,
            "gender" : gender,
            "designation" : des
        }
        arr.push(obj);
        console.log(arr);
        var p;
        p=new person();
        p.sname = name;
        p.sgender=gender;
        p.sdes=des;
        console.log(p.gname);
    });
}
