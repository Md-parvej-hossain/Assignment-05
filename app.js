const value = getTextFealdValueId('your_Amount');

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
  } else {
    alert('Input is no valed');
  }
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
  } else {
    alert('Input is no valed');
  }
  document.getElementById('noakhali').value = '';
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
  } else {
    alert('Input is no valed');
  }
  document.getElementById('noakhali').value = '';
});

// blog butto
document.getElementById('btn_blog').addEventListener('click', function () {
  document.getElementById('blog_content').classList.remove('hidden');
  document.getElementById('main_content').classList.add('hidden');
});
