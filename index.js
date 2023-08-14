
let cardno=document.getElementById("card");
let result=document.getElementById("res");
let letter=document.getElementById("message");
let win=document.getElementById("price");
let money=0;
let sum;
function disp()
{
cardno.textContent="Cards: ";
let num1=prompt();
let num2=prompt();
cardno.textContent+=" "+num1+" "+num2;
sum=Number(num1)+Number(num2);
result.textContent+=" "+sum;
check();
win.textContent="Per: $"+money;
}

function check()
{
    letter.textContent=' ';
    if(sum<=20)
    {
        letter.textContent+="Do you want to draw one more card?";
    }
    else if(sum===21)
    {
        letter.textContent+="You've got Blackjack!";
        money+=200;
    }
    else
    {
        letter.textContent+="You are out!";
    }
}

function change()
{
    let num3=prompt();
    cardno.textContent+=" "+num3;
    sum+=Number(num3);
    result.textContent=" ";
    result.textContent+="Sum: "+sum;
    check();
    win.textContent="Per: $"+money;

}

function refresh()
{
    letter.textContent=' ';
    cardno.textContent='Cards: ';
    result.textContent='Sum: ';
}

function fresh()
{
    letter.textContent=' ';
    cardno.textContent='Cards: ';
    result.textContent='Sum: ';
    win.textContent='Per: ';
    money=0;
}