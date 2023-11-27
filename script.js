function age(){
let day = document.getElementById('day').value;
let month = document.getElementById('month').value;
let year = document.getElementById('year').value;
let data = new Date();
let get_day = data.getDate();
let get_month = 1+data.getMonth();
let get_year = data.getFullYear();

let all_month = [31 , 28 , 31 , 30 , 31 , 30 ,31 , 31 ,30 , 31 , 30 , 31];
if (day > get_day){
    get_day = get_day+all_month[get_month-1];
    get_day = get_day-1;
}
if(month> get_month){
    get_month = get_month+12;
    get_year = get_year-1;
}
let d = get_day-day;
let m = get_month- month;
let y = get_year - year;
document.getElementById('age').innerHTML="Your age is "+y+" years and "+m+" months and "+d+" days."

}

