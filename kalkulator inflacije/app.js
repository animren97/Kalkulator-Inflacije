function inflationCalculator(){
    let inflationRate = document.querySelector("#inflationRate")
    let money = document.querySelector("#money")
    let years = document.querySelector("#years").value;
    
    inflationRate = parseFloat(inflationRate.value);
    money = parseFloat(money.value)
    years = parseFloat(years)
    
    let worth = money + (money * (inflationRate/100));
    
    for ( let i = 0; i < years; i++){
        worth += worth*(inflationRate/100)
        
    }
    worth = worth.toFixed(2);
    
    let newElement = document.createElement("div");
    newElement.classList.add("new-element");
    newElement.innerHTML = `Novac u vrijednosti od ${money}€, uz stopu inflacije od ${inflationRate}, će nakon ${years} godina iznositi ${worth} €.`
   document.querySelector(".container").appendChild(newElement)
}
