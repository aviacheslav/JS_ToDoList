//const addBtn=document.querySelector("#newTask");
const addBtn=document.getElementById("newTask");
const container=document.querySelector("ul");
let tasks=document.querySelectorAll("li");
let countTasks=0;
if(tasks!=null)countTasks=tasks.length;
//
addBtn.addEventListener("click", ()=>{
	//debugger;
	const taskText=prompt("Task content:");
	let curLi=document.createElement("li");
	let p=document.createElement("p");
	let currentTaskN;
	p.textContent=taskText;
	//
	const btnDel=document.createElement("button");
	btnDel.textContent="delete";
	btnDel.setAttribute("class", "buttonDel");
	//
	curLi.append(p);
	curLi.append(btnDel);
	container.append(curLi);
	//
	//ce ne worked because I ne declared LET btnDel, niow works gut
	btnDel.addEventListener("click", ()=>{
		let p=btnDel.parentNode.querySelector("p");
		let txt=p.textContent;
		//
		tasks=document.querySelectorAll("li");
		countTasks=0;
		if(tasks!=null)countTasks=tasks.length;
		for(let j=1; j<=countTasks; j++){
			if(tasks[j-1]===btnDel.parentNode){
				currentTaskN=j;
			}
		}
		//
		alert("You are deleting following task: "+txt+"(N"+currentTaskN+" of "+countTasks+")");
		btnDel.parentNode.remove();
		//
		//tasks=document.querySelectorAll("li");
		//if(tasks!=null)countTasks=tasks.length;
		//if(countTasks==0){
		if(countTasks==0+1){
			primaryText.removeAttribute("class", "sectionInvisible");
		}
	});
	
	//
	/*
	//works, but warns not 1, but several times!
	let delBtns=document.querySelectorAll(".buttonDel");
	if(delBtns!=null){
		for(let delBtn of delBtns){
			delBtn.addEventListener("click", () =>{
				let p=delBtn.parentNode.querySelector("p");
				let txt=p.textContent;
				//
				tasks=document.querySelectorAll("li");
				countTasks=0;
				for(let j=1; j<=countTasks; j++){
					if(tasks[j-1]==delBtn.parentNode){
						currentTaskN=j;
					}
				}
				if(tasks!=null)countTasks=tasks.length;
				//
				alert("You are deleting following task: "+txt+"(N"+currentTaskN+")");
				delBtn.parentNode.remove();
				//
				if(countTasks==0){
					primaryText.removeAttribute("class", "sectionInvisible");
				}
			});
		}
	}
	*/
	//curLi.append(btnDel);
	//container.append(curLi);
	//
	let primaryText=document.getElementById("PrimaryText");
	primaryText.setAttribute("class", "sectionInvisible");
	//curLi.
});
/*
let delBtns=document.querySelectorAll(".buttonDel");
if(delBtns!=null){
	for(delBtn of delBtns){
		delBtn.addEventListener("click", () =>{
			let taskToDel=delBtn.parentNode;
		});
	}
}
*/