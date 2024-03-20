const container = document.querySelector(".container");

function generateBars(num = 20){
    for(let i=0;i<num;i+=1){
        const value = Math.floor(Math.random()*100) + 1;
        const bar = document.createElement("div");
        bar.classList.add("bar");
        bar.style.height = `${value * 3}px`;
        bar.style.transform = `translateX(${i * 30}px)`;
        const barLabel = document.createElement("label");
        barLabel.classList.add("bar_id");
        barLabel.innerHTML = value;
        bar.appendChild(barLabel);
        container.appendChild(bar);
    }
}

async function InsertionSort(delay = 600) { 
    let bars = document.querySelectorAll(".bar"); 
    
    // Provide lightgreen colour to 0th bar 
    bars[0].style.backgroundColor = " rgb(49, 226, 13)"; 
    for (var i = 1; i < bars.length; i += 1) { 
    
      // Assign i-1 to j 
      var j = i - 1; 
    
      // To store the integer value of ith bar to key  
      var key =  
      parseInt(bars[i].childNodes[0].innerHTML); 
    
      // To store the ith bar height to height 
      var height = bars[i].style.height; 
       
    
      //Provide darkblue color to the ith bar  
      bars[i].style.backgroundColor = "darkblue"; 
        
      // To pause the execution of code for 600 milliseconds 
      await new Promise((resolve) => 
      setTimeout(() => { 
        resolve(); 
      }, 600) 
    ); 
    
      // For placing selected element at its correct position  
      while (j >= 0 && parseInt(bars[j].childNodes[0].innerHTML) > key) { 
          
        // Provide darkblue color to the jth bar 
        bars[j].style.backgroundColor = "darkblue"; 
          
        // For placing jth element over (j+1)th element 
        bars[j + 1].style.height = bars[j].style.height; 
        bars[j + 1].childNodes[0].innerText =  
        bars[j].childNodes[0].innerText; 
    
        // Assign j-1 to j 
        j = j - 1; 
    
        // To pause the execution of code for 600 milliseconds 
        await new Promise((resolve) => 
          setTimeout(() => { 
            resolve(); 
          }, 600) 
        ); 
          
        // Provide lightgreen color to the sorted part 
        for(var k=i;k>=0;k--){ 
          bars[k].style.backgroundColor = " rgb(49, 226, 13)"; 
        } 
      } 
    
      // Placing the selected element to its correct position 
      bars[j + 1].style.height = height; 
      bars[j + 1].childNodes[0].innerHTML = key; 
         
      // To pause the execution of code for 600 milliseconds 
      await new Promise((resolve) => 
        setTimeout(() => { 
          resolve(); 
        }, 600) 
      ); 
        
      // Provide light green color to the ith bar 
      bars[i].style.backgroundColor = " rgb(49, 226, 13)"; 
    } 
      
    document.getElementById("reset").disabled = false;
    document.getElementById("reset").style.backgroundColor = "#6f459e";
    document.getElementById("sort").disabled = false;
    document.getElementById("sort").style.backgroundColor = "#6f459e";
    document.getElementById("sort2").disabled = false;
    document.getElementById("sort2").style.backgroundColor = "#6f459e";
    document.getElementById("sort3").disabled = false;
    document.getElementById("sort3").style.backgroundColor = "#6f459e";
  } 

async function swap(element1, element2) {
    var tempHeight = element1.style.height;
    var tempValue = element1.childNodes[0].textContent;
    element1.style.height = element2.style.height;
    element1.childNodes[0].textContent = element2.childNodes[0].textContent;
    element2.style.height = tempHeight;
    element2.childNodes[0].textContent = tempValue;
    await new Promise((resolve) => setTimeout(resolve, 300));
}

async function BubbleSort(delay = 300) {
    let bars = document.querySelectorAll(".bar");
    for (var i = 0; i < bars.length; i++) {
        for (var j = 0; j < bars.length - i - 1; j++) {
            bars[j].style.backgroundColor = 'red';
            bars[j + 1].style.backgroundColor = 'red';
            await new Promise((resolve) => setTimeout(resolve, delay));
            var value1 = parseInt(bars[j].style.height);
            var value2 = parseInt(bars[j + 1].style.height);
            if (value1 > value2) {
                await swap(bars[j], bars[j + 1]);
                bars = document.querySelectorAll(".bar");
            }
            bars[j].style.backgroundColor = 'darkblue';
            bars[j + 1].style.backgroundColor = 'darkblue';
        }
        bars[bars.length - i - 1].style.backgroundColor = 'rgb(49,226,13)';
    }
    document.getElementById("reset").disabled = false;
    document.getElementById("reset").style.backgroundColor = "#6f459e";
    document.getElementById("sort").disabled = false;
    document.getElementById("sort").style.backgroundColor = "#6f459e";
    document.getElementById("sort2").disabled = false;
    document.getElementById("sort2").style.backgroundColor = "#6f459e";
    document.getElementById("sort3").disabled = false;
    document.getElementById("sort3").style.backgroundColor = "#6f459e";
}

async function SelectionSort(delay = 300){
    let bars = document.querySelectorAll(".bar");
    var minIndex = 0;
    for(var i = 0;i<bars.length;i+=1){
        minIndex = i;
        bars[i].style.backgroundColor = "darkblue"; 
        for(var j=i+1;j<bars.length;j+=1){
            bars[j].style.backgroundColor = "red";

            await new Promise((resolve) => 
        setTimeout(() => { 
          resolve(); 
        }, 300) 
      ); 

            var value1 = parseInt(bars[j].childNodes[0].innerHTML);
            var value2 = parseInt(bars[minIndex].childNodes[0].innerHTML);
            if(value1 < value2){
                if(minIndex !== i){
                    bars[minIndex].style.backgroundColor = "rgb(24,190,255)";
                }
                minIndex = j;
            }else{
                bars[j].style.backgroundColor = "  rgb(24, 190, 255)"; 
            }
        }
        var temp1 = bars[minIndex].style.height;
        var temp2 = bars[minIndex].childNodes[0].innerText;
        bars[minIndex].style.height = bars[i].style.height;
        bars[i].style.height = temp1;
        bars[minIndex].childNodes[0].innerText = bars[i].childNodes[0].innerText;
        bars[i].childNodes[0].innerText = temp2;

        await new Promise((resolve) => 
        setTimeout(() => { 
          resolve(); 
        }, 300) 
      ); 

        bars[minIndex].style.backgroundColor = "rgb(24,190,255)";
        bars[i].style.backgroundColor = "rgb(49,226,13)";
    }

    document.getElementById("reset").disabled = false;
    document.getElementById("reset").style.backgroundColor = "#6f459e"
    document.getElementById("sort").disabled = false;
    document.getElementById("sort").style.backgroundColor = "#6f459e"
    document.getElementById("sort2").disabled = false;
    document.getElementById("sort2").style.backgroundColor = "#6f459e"
    document.getElementById("sort3").disabled = false;
    document.getElementById("sort3").style.backgroundColor = "#6f459e"
}

generateBars();

function generate(){
    window.location.reload();
}

function disable(){
    document.getElementById("reset").disabled = true;
    document.getElementById("reset").style.backgroundColor = "#d8b6ff"
    document.getElementById("sort").disabled = true;
    document.getElementById("sort").style.backgroundColor = "#d8b6ff"
    document.getElementById("sort2").disabled = true;
    document.getElementById("sort2").style.backgroundColor = "#d8b6ff"
    document.getElementById("sort3").disabled = true;
    document.getElementById("sort3").style.backgroundColor = "#d8b6ff"
}