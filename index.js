
        const input = document.getElementById('input');
        function appendValue(value) {
            input.value += value;
        } 
        function calculateResult() {
            const calculateResult = document.getElementById('input');
            calculateResult.value = eval(document.getElementById('input').value);
        }
        function clearInput() {
            input.value = '';
        }
        const buttons = document.querySelectorAll('button');
        buttons.forEach((button) => {
            button.addEventListener('click', () => {
                const buttonValue = button.textContent;
                if (buttonValue === 'C') {
                    clearInput();
                } else if (buttonValue!= '='){
                    appendValue(buttonValue);
                }
            });
        });
       
