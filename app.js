const value = getTextFealdValueId('your_Amount');
const congrast = document.getElementById('successModal');
const buttons = document.getElementById('btn_noakhali');
const close = document.getElementById('close-btn');
const floodNoakili = document.getElementById('flood_noakili').innerText;
const floodFeni = document.getElementById('flood_feni').innerText;
const floodQuata = document.getElementById('flood_Quota').innerText;

document.getElementById('btn_noakhali').addEventListener('click', function () {
  const inputValue = getInputFealdValueId('noakhali');
  const totalAmount = getTextFealdValueId('total_Aamount');
  const carantAmount = inputValue + totalAmount;
  const myValur = value - inputValue;
  if (value < inputValue) {
    alert('Valance is Low');
  } else if (inputValue > 0) {
    document.getElementById('your_Amount').innerText = myValur + ' BDT';
    document.getElementById('total_Aamount').innerText = carantAmount + ' BDT';
    // congret
    congrast.classList.remove('hidden');
    close.addEventListener('click', function () {
      congrast.classList.add('hidden');
    });
  } else {
    alert('Input is no valed');
  }
  // history
  const date = Date();
  const historyList = document.getElementById('history_itemd');
  const historySection = document.createElement('div');
  historySection.className = 'bg-white p-3 rounded-md ';
  historySection.innerHTML = `
<h2 class"text-lg border-sky-500"> ${inputValue} ${floodNoakili} </h2>
<p class"" class ="text-xs ">${date}</p>

`;
  historyList.append(historySection);
  document.getElementById('noakhali').value = '';
});
document.getElementById('btn-Feni').addEventListener('click', function () {
  const inputValue = getInputFealdValueId('input_feni');
  const totalAmount = getTextFealdValueId('total_Aamount_fani');
  console.log(totalAmount);
  const carantAmount = inputValue + totalAmount;
  const myValur = value - inputValue;
  if (value < inputValue) {
    alert('Valance is Low');
  } else if (inputValue > 0) {
    document.getElementById('your_Amount').innerText = myValur + ' BDT';
    document.getElementById('total_Aamount_fani').innerText =
      carantAmount + ' BDT';
    // congret
    congrast.classList.remove('hidden');
    close.addEventListener('click', function () {
      congrast.classList.add('hidden');
    });
  } else {
    alert('Input is no valed');
  }
  // history
  const date = Date();
  const historyList = document.getElementById('history_itemd');
  const historySection = document.createElement('div');
  historySection.className = 'bg-white p-3 rounded-md ';
  historySection.innerHTML = `
<h2 class"text-lg border-sky-500"> ${inputValue} ${floodFeni} </h2>
<p class"" class ="text-xs ">${date}</p>

`;
  historyList.append(historySection);
  document.getElementById('input_feni').value = '';
});
document.getElementById('btn_quota').addEventListener('click', function () {
  const inputValue = getInputFealdValueId('input_quota');
  const totalAmount = getTextFealdValueId('total_Aamount_quota');
  console.log(totalAmount);
  const carantAmount = inputValue + totalAmount;
  const myValur = value - inputValue;
  if (value < inputValue) {
    alert('Valance is Low');
  } else if (inputValue > 0) {
    document.getElementById('your_Amount').innerText = myValur + ' BDT';
    document.getElementById('total_Aamount_quota').innerText =
      carantAmount + ' BDT';
    // congret
    congrast.classList.remove('hidden');
    close.addEventListener('click', function () {
      congrast.classList.add('hidden');
    });
  } else {
    alert('Input is no valed');
  }
  // history
  const date = Date();
  const historyList = document.getElementById('history_itemd');
  const historySection = document.createElement('div');
  historySection.className = 'bg-white p-3 rounded-md ';
  historySection.innerHTML = `
<h2 class"text-lg border-sky-500"> ${inputValue} ${floodQuata} </h2>
<p class"" class ="text-xs ">${date}</p>

`;
  historyList.append(historySection);
  document.getElementById('input_quota').value = '';
});

// blog butto
document.getElementById('btn_blog').addEventListener('click', function () {
  document.getElementById('blog_content').classList.remove('hidden');
  document.getElementById('main_content').classList.add('hidden');
  const historSec = document.getElementById('history_itemd');
  historSec.classList.add('hidden');
});

//History
const btnHistory = document.getElementById('history');
const donationBtn = document.getElementById('donation');
const mainContent = document.getElementById('main_content');
const blog = document.getElementById('blog_content');
btnHistory.addEventListener('click', function () {
  donationBtn.classList.remove('bg-[#B4F461]');
  btnHistory.classList.add('bg-[#B4F461]');
  mainContent.classList.add('hidden');
  const historSec = document.getElementById('history_itemd');
  historSec.classList.remove('hidden');
  blog.classList.add('hidden');
});

donationBtn.addEventListener('click', function () {
  const don = document.getElementById('blog_content');
  don.classList.add('hidden');
  const historSec = document.getElementById('history_itemd');
  historSec.classList.add('hidden');
  mainContent.classList.remove('hidden');
  donationBtn.classList.add('bg-[#B4F461]');
  btnHistory.classList.remove('bg-[#B4F461]');
});
