var bill=0;
var final;
var share;
var opt = document.querySelector(".option");
var numinpu= document.getElementById("money");
var people = document.getElementById("people");
var button = document.querySelector("button");
var ans = document.querySelector("#tipan");
numinpu.addEventListener("change" , function(){
bill = Number(numinpu.value);
});
people,addEventListener("change" , function(){
share = Number(people.value);
});
button.addEventListener("click" , function(){
if(opt.selectedIndex==1)
{final = (bill * 20)/100;
final = final / share ;
ans.textContent = "$ "+ final;
}
else
{
	if(opt.selectedIndex==2)
	{final = (bill * 10)/100;
final = final / share ;
ans.textContent = "$ "+ final;
}
	else{
		if(opt.selectedIndex==3)
		{final = (bill * 5)/100;
final = final / share ;
ans.textContent = "$ "+ final;
}
}
}});