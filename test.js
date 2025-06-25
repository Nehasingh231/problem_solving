


  const input = document.getElementById('myInput');
  const output = document.getElementById('output');

  input.addEventListener('input', function (e) {
    output.textContent = "You typed: " + e.target.value;
  });

