document.querySelector('.div1').style.display = "none";
document.querySelector('.div2').style.display = "block";
let flag=true;
let P1Score = 0;  
let P2Score = 0;                                                             
let player1
let player2
let arr = [0,1,0,1,0,1,1,0,1];
let winnerIndex = [ [0,1,2], 
                    [3,4,5],
                    [6,7,8],
                    [0,3,6],
                    [1,4,7],
                    [2,5,8],
                    [0,4,8],
                    [2,4,6] ];
let div= document.querySelectorAll('.fun');
document.querySelector('.tab').addEventListener('click', function(e){
    var index= e.target.id;
    if (arr[index] == 0 || arr[index]== 1)
    {
//     if(flag)
//     {
//     e.target.innerHTML = 'X';
//     arr[e.target.id] = 'X';
//     }
//     else
//     {
//     e.target.innerHTML = 'O';
//     arr[e.target.id] = 'O';
//     }
// }
        e.target.innerHTML = getval();
        arr[index] = getval();
        indexWinner();
        flag = !flag;
}
else
{
    alert("NOT ALLOWED");
}
});


function getval()
{
    return (flag) ? 'X' : 'O';
}

// function winner()
// {
//     if(arr[0]==arr[1] && arr[1]==arr[2] || arr[3]==arr[4] && arr[4]==arr[5] 
//         || arr[6]==arr[7] && arr[7]==arr[8])
//         {
//             console.log('ROW WINNER');
//         }
//         else if(arr[0]==arr[3] && arr[3]==arr[6] || arr[1]==arr[4] && arr[4]==arr[7] 
//         || arr[2]==arr[5] && arr[5]==arr[8])
//         {
//             console.log('COLUMN WINNER');
//         }
//         else
//         {
//             console.log('DIAGONAL WINNER');
//         }
// }
function indexWinner()
{
for( let i=0; i<winnerIndex.length; i++)
{
    let[a,b,c] = winnerIndex[i];
    if(arr[a]==arr[b] && arr[b]==arr[c])
    {
        getScore(a,b,c);
        console.log('winner')
        break;
    }
}
};

function getScore(x,y,z)
{
    if(flag)
    {
        P2Score++;
        document.querySelector('.f1').innerHTML = P2Score;
        alert(player1 +' is winner')
    }
    else
    {
        P1Score++;
        document.querySelector('.f2').innerHTML = P1Score;
        alert(player2 +' is winner')
    }
    document.getElementsByClassName('fun')[x].style.backgroundColor = '#009aee';
    document.getElementsByClassName('fun')[y].style.backgroundColor = '#009aee';
    document.getElementsByClassName('fun')[z].style.backgroundColor = '#009aee';
    arr=[];
    console.log(x,y,z)
}

//start function
document.querySelector('.btn1').addEventListener('click', function()
{
    player1=document.querySelector('.text').value;
    player2=document.querySelector('.text1').value;

    if(player1 =='' || player2 =='')
    {
        alert ("INVALID");
    }
    else{
        document.querySelector('.pl1').innerHTML = player1;
        document.querySelector('.pl2').innerHTML = player2;
        document.querySelector('.div1').style.display = "block";
        document.querySelector('.div2').style.display = "none";
    }
})

document.querySelector('.btn').addEventListener('click', function()
{

for(let i=0; i<arr.length; i++)
{
    div[i].innerHTML = '';
    div[i].style.backgroundColor = 'white';
}
arr= [0,1,0,1,0,1,1,0,1];
flag= true;
})

