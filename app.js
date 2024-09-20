
function inputValue(id){
    return  document.getElementById(id).value;
}

function blankInput(id){
    return document.getElementById(id).value = '';
}


const income = parseFloat(inputValue('income-input'));
const softwareCost = parseFloat(inputValue('softcost-input'));
const courseCost = parseFloat(inputValue('course-input'));
const internetCost = parseFloat(inputValue('internet-input'));

document.getElementById('calculate').addEventListener('click', ()=> {

    const income = parseFloat(inputValue('income-input'));
    const softwareCost = parseFloat(inputValue('softcost-input'));
    const courseCost = parseFloat(inputValue('course-input'));
    const internetCost = parseFloat(inputValue('internet-input'));

    const totalExpenses = softwareCost + courseCost + internetCost;
    const balance = income - totalExpenses;
     
     
    
    document.getElementById('expenses-summery').innerText = totalExpenses;
    document.getElementById('balance-summery').innerText = balance;


    // blankInput('income-input');
    // blankInput('softcost-input');
    // blankInput('course-input');
    // blankInput('internet-input');
});

document.getElementById('savings-calculate').addEventListener('click', ()=> {
     

    const savings = parseFloat(inputValue('savings-input'));
    const totalExpenses = softwareCost + courseCost + internetCost;
    const balance = income - totalExpenses;

    const savingsAmount = (savings * balance) / 100;
    const remainingBanalce = balance - savingsAmount;


    //console.log(savingsAmount);

    document.getElementById('savings-summery').innerText = savingsAmount;
    document.getElementById('remaining-balance-summery').innerText = remainingBanalce;
     

    document.getElementById('summery-box').classList.remove('hidden');
    // blankInput('savings-input');
    // blankInput('');
})




 


document.getElementById('history-button').addEventListener('click', ()=> {
    const historyBtn = document.getElementById('history-button');
    const assistanceBtn = document.getElementById('assistant-btn');

    historyBtn.classList.add('bg-gradient-to-r', 'from-indigo-700', 'to-violet-800', 'p-2', 'rounded-e-lg', 'text-white', 'font-semibold');
    assistanceBtn.classList.remove('bg-gradient-to-r', 'from-indigo-700', 'to-violet-800', 'p-2', 'rounded-e-lg', 'text-white', 'font-semibold');

    document.getElementById('assisment-container').classList.add('hidden');
    document.getElementById('summery-box').classList.remove('hidden');

    const history = document.getElementById('expense-history');
    history.classList.remove('hidden');


    const totalExpenses = softwareCost + courseCost + internetCost;
    const balance = income - totalExpenses;
    const div = document.createElement('div');
    div.classList.add('text-left', 'text-xl', 'font-semibold', 'p-4', 'my-4', 'border', 'border-indigo-400', 'rounded-lg');
    div.innerHTML = `
        <p class="text-sm">${new Date().toLocaleString()}</p>
        <p class="text-md">Income: ${income}</p>
        <p class="text-md">Expenses: ${totalExpenses}</p>
        <p class="text-md">Balance: ${balance}</p>
    `;
    history.appendChild(div);
    
});


document.getElementById('assistant-btn').addEventListener('click', ()=> {
    const historyBtn = document.getElementById('history-button');
    const assistanceBtn = document.getElementById('assistant-btn');

    historyBtn.classList.remove('bg-gradient-to-r', 'from-indigo-700', 'to-violet-800', 'p-2', 'rounded-s-lg', 'text-white', 'font-semibold');
    assistanceBtn.classList.add('bg-gradient-to-r', 'from-indigo-700', 'to-violet-800', 'p-2', 'rounded-s-lg', 'text-white', 'font-semibold');

    document.getElementById('assisment-container').classList.remove('hidden');
    document.getElementById('expense-history').classList.add('hidden');
});