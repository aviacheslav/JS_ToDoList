//const addBtn=document.querySelector("#newTask");
const addBtn=document.getElementById("newTask");
const container=document.querySelector("ul");
let tasks=document.querySelector("li");
let countTasks=0;
if(tasks!=null)countTasks=tasks.length;
//let curButtonDel=document.createElement("button");
let primaryText=document.getElementById("PrimaryText");
//primaryText.setAttribute("class", "sectionInvisible");

//function generateBtnDel()

function createTaskComponent(taskText){
	//
	let curLi=document.createElement("li");
	curP=document.createElement("p");
	curP.textContent=taskText;
	//
	const btnDel=document.createElement("button");
	btnDel.textContent="delete";
	btnDel.setAttribute("class","buttonDel");
	const btnIns=document.createElement("button");
	btnIns.textContent="insert";
	const btnUp=document.createElement("button");
	btnUp.textContent="up";
	const btnDn=document.createElement("button");
	btnDn.textContent="down";
	//btnIns.setAttribute("class","buttonIns");
	//
	curLi.append(curP)
	curLi.append(btnDel);
	curLi.append(btnIns);
	curLi.append(btnUp);
	curLi.append(btnDn);
	//
	let tasks=document.querySelectorAll('li');
	
	let countTasks=0;
	if(tasks!=null){
		countTasks=tasks.length;
	}else alert("Nop tasks "+tasks);
	//
	btnDel.addEventListener("click", ()=>{
		//
		let p=btnDel.parentNode.querySelector("p");
		let txt=p.textContent;
		//
		let countTasks=0, curTaskN=0;
		tasks=document.querySelectorAll("li");
		if(tasks!=null){
			countTasks=tasks.length;
		}
		for(let i=1; i<=countTasks; i++){
			if(tasks[i-1]===btnIns.parentNode){
				curTaskN=i;
				break;
			}
		}
		alert("You are DELETING task: "+txt+" ("+curTaskN+")");
		//
		btnDel.parentNode.remove();
	});
	//
	btnIns.addEventListener("click", ()=>{
		//
		let p=btnDel.parentNode.querySelector("p");
		let txt=p.textContent;
		//
		let countTasks=0, curTaskN=0;
		tasks=document.querySelectorAll("li");
		if(tasks!=null){
			countTasks=tasks.length;
		}
		for(let i=1; i<=countTasks; i++){
			if(tasks[i-1]===btnIns.parentNode){
				curTaskN=i;
				break;
			}
		}
		alert("You are inserting your new task before existing: "+txt+" ("+curTaskN+")");
		//
		const taskText=prompt("Task content:");
		//
		//btnIns.parentNode.insertBefore(createTaskComponent(taskText), null);
		btnIns.parentNode.parentNode.insertBefore(createTaskComponent(taskText), btnIns.parentNode);
	});
	//
	btnUp.addEventListener("click", ()=>{
		//
		let p=btnUp.parentNode.querySelector("p");
		let txt=p.textContent;
		//
		let countTasks=0, curTaskN=0;
		tasks=document.querySelectorAll("li");
		if(tasks!=null){
			countTasks=tasks.length;
		}
		for(let i=1; i<=countTasks; i++){
			if(tasks[i-1]===btnUp.parentNode){
				curTaskN=i;
				break;
			}
		}
		if(curTaskN>1){
			btnUp.parentNode.parentNode.insertBefore(createTaskComponent(taskText), tasks[curTaskN-1-1]);
			btnUp.parentNode.remove();
		}
	});
	//
	btnDn.addEventListener("click", ()=>{
		//
		let p=btnUp.parentNode.querySelector("p");
		let txt=p.textContent;
		//
		let countTasks=0, curTaskN=0;
		tasks=document.querySelectorAll("li");
		if(tasks!=null){
			countTasks=tasks.length;
		}
		for(let i=1; i<=countTasks; i++){
			if(tasks[i-1]===btnUp.parentNode){
				curTaskN=i;
				break;
			}
		}
		if(curTaskN<countTasks){
			btnUp.parentNode.parentNode.insertAfter(createTaskComponent(taskText), tasks[curTaskN+1-1]);
			btnUp.parentNode.remove();
		}
	});
	return curLi;
}

addBtn.addEventListener("click", ()=>{
	const taskText=prompt("Task content:");
	container.append(createTaskComponent(taskText));
});
/*
	let curLi=document.createElement("li");
	curP=document.createElement("p");
	curP.textContent=taskText;
	//
	const btnDel=document.createElement("button");
	btnDel.textContent="delete";
	btnDel.setAttribute("class","buttonDel");
	//
	const btnGetTaskN=document.createElement("button");
	btnGetTaskN.textContent="GetTaskN";
	//
	curLi.append(curP);
	curLi.append(btnDel);
	curLi.append(btnGetTaskN);
	//
	container.append(curLi);
	tnDel.addEventListener("click", () =>{
		//let txt=btnDel.parentNode.textContent;//worked for simple li
		tasks=document.querySelectorAll("li");
		countTasks=0;
		if(tasks!=null)countTasks=tasks.length;
		//
		let curTask1=btnDel.parentNode;
		let curTaskN;
		//
		for(let j=1; j<=countTasks; j++){
			if(tasks[j-1]==curTask1){
				curTaskN=j;
			}
		}
		//
		let p=btnDel.parentNode.querySelector("p");
		let txt=p.textContent;
		alert("You are DELETING task: "+txt+" ("+curTaskN+")");
		btnDel.parentNode.remove();
		//
		if(countTasks==0){
			primaryText.removeAttribute("class", "sectionInvisible");
		}
		//
		tasks=document.querySelectorAll("li");
		if(tasks!=null)countTasks=tasks.length;
		if(countTasks==0){
			primaryText.removeAttribute("class", "sectionInvisible");
		}
	});
	btnGetTaskN.addEventListener("click", () =>{
		const tasks=document.querySelectorAll('li');
		const curTask=btnGetTaskN.parentNode;
		const  newLi=document.createElement("li");
		curP=document.createElement("p");
		curP.textContent=taskText;
		curLi.append(curP);
		
		for(let j=1; j<=countTasks; j++){
			if(tasks[j-1]==curTask1){
				curTaskN=j;
				break;
			}
		}
	});
	//
	let primaryText=document.getElementById("PrimaryText");
	primaryText.setAttribute("class", "sectionInvisible");
	//
	
	//let delBtns=document.querySelectorAll(".buttonDel");
	//if(delBtns!=null){
	//	for(let delBtn of delBtns){
	//		delBtn.addEventListener("click", () =>{
	//			let p=delBtn.parentNode.querySelector("p");
	//			let txt=p.textContent;
	//			alert("You are DELETING task: "+txt);
	//			delBtn.parentNode.remove();
	//			//
	//			tasks=document.querySelectorAll("li");
	//			if(tasks!=null)countTasks=tasks.length;
	//			if(countTasks==0){
	//				primaryText.removeAttribute("class", "sectionInvisible");
	//			}
	//		});
		}
	//	
	//}
	//
	
//});
*/





/*
let delBtns=document.querySelectorAll(".buttonDel");
if(delBtns!=null){
	//debugger;
	for(delBtn of delBtns){
		delBtn.addEventListener("click", () =>{
			delBtn.parentNode.remove();
		});
	}
}*/