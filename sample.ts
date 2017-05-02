/**
 * Created by Rajeev on 5/2/2017.
 */
class person{
    name:string; gender:string; des:string;
    set sname(name:string){
        this.name= name;
    }
    set sgender(gender:string){
        this.gender=gender;
    }
    set sdes(des:string){
        this.des=des;
    }
    get gname():string{
        return this.name;
    }
    get ggender():string{
        return this.gender;
    }
    get gdes():string{
        return this.des;
    }
}
