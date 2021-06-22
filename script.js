/* Compute */
const d = new Date();
d.getFullYear() =document.getElementById("demo").innerHTML ;
function compute()
{
    p = document.getElementById("amount").value;
    n = document.getElementById("years").value;
    r = document.getElementById("myRange").value;
      
    if(p!=null){
        a_a.innerHTML="If you deposit"+" ";
    }
    a.innerHTML = p;    
    if(r!=null){
        b_b.innerHTML="at a rate of interest"+" ";
    }
    b.innerHTML = r;
    i = (p*n*r/100);
    amt = parseInt(i)+parseInt(p);
    if(amt!=null){
        amt_a.innerHTML="You will receive an amount of "+" " ;
    }
    tamt.innerHTML = amt;
    totalyear = parseInt(n) + d.getFullYear();
    if(totalyear!=null){
        totalyear_a.innerHTML="in the year"+" ";
    }
    c.innerHTML = totalyear;
    a = document.getElementById("p");
    b = document.getElementById("r");
    tamt = document.getElementById("amt");
    totalyear = document.getElementById("totalyear");
}
// slider value
function updateTextValue(val) {
    document.getElementById('demo').value = val;
  }