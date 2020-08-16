var i=3
function addrow(){
	var pname=document.getElementById('pn').value;
	var page=document.getElementById('pa').value;
	var pcase=document.getElementById('case').value;
	var pcon =document.getElementById('con').value;
	var ppl=document.getElementById('pl').value;
	var table=document.getElementsByTagName('table')[0];
	var newRow=table.insertRow(table.rows.length);
	var cel1=newRow.insertCell(0);
	var cel2=newRow.insertCell(1);
	var cel3=newRow.insertCell(2);
	var cel4=newRow.insertCell(3);
	var cel5=newRow.insertCell(4);
	var cel6=newRow.insertCell(5);
    cel1.innerHTML=i;
    i++;
	cel2.innerHTML=pname;
	cel3.innerHTML=page;
	cel4.innerHTML=pcase;
	cel5.innerHTML=pcon;
	cel6.innerHTML=ppl;	

	var frm=document.getElementsByName('conform')[0];
	frm.reset();
}
