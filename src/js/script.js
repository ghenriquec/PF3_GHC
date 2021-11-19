const calculate = document.getElementById('calculate');

//_ugDyyEX7YUWddRYu2xnfgdOGEZsSDYnx-Xvah1LmtY
const calculateInvestiment = () => {
  const name = document.getElementById('name').value
  const valueInvest = document.getElementById('inputValue').value
  const months = document.getElementById('investimentTime').value
  const fees = document.getElementById('fees').value / 100

  var moneyConverter = new Intl.NumberFormat(undefined, {
    style: 'currency',
    currency: 'BRL',
  });

  if(name !== '' && valueInvest !== '' && months !== '' && fees !== ''){
    if(valueInvest > 0 && months > 0 && fees > 0){
      const totalValue = (valueInvest * ((((1 + fees) ** months) - 1) / fees)).toFixed(2)

      result.textContent = `Olá ${name}, se você aplicar ${moneyConverter.format(valueInvest)}, à taxa de juros de ${fees * 100}% ao mês, durante ${months} meses, acumulará uma poupança de ${moneyConverter.format(totalValue)}`;
    }else{
      alert('Por favor digite valores positivos')
      document.getElementById('name').value = ""
      document.getElementById('investimentTime').value = ""    
      document.getElementById('fees').value = ""   
      document.getElementById('inputValue').value = ""
      document.getElementById('result').innerHTML = ""
    }
  }else{
    alert('Por favor preencha todos os campos para que o investimento possa ser simulado.')
    document.getElementById('name').value = ""
    document.getElementById('investimentTime').value = ""    
    document.getElementById('fees').value = ""   
    document.getElementById('inputValue').value = ""
    document.getElementById('result').innerHTML = ""
  }  
}

const clearText = () => {
    document.getElementById('name').value = ""
    document.getElementById('investimentTime').value = ""    
    document.getElementById('fees').value = ""   
    document.getElementById('inputValue').value = ""
    document.getElementById('result').innerHTML = ""
}

const focusFunx = () => {
  let parent = this.parentNode.parentNode;
  parent.classList.add("focus");
};

calculate.addEventListener("click", calculateInvestiment)

