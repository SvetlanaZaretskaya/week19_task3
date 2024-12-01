const resultContainer = document.getElementById('results');
document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const input1 = document.getElementById('input1').value;
    const input2 = document.getElementById('input2').value;
    
    if (!input1 || !input2) return alert('Заполните все поля!');

    sendData(input1, input2);
});

async function sendData(value1, value2) {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json; charset=UTF-8'
            },
            body: JSON.stringify({
                title: value1,
                body: value2,
                userId: 1
            })
        });
        
        const data = await response.json();
        console.log(data); 

        data.forEach(element => {
            const header = document.createElement('p');
            header.style.fontWeight = 'bold';
            header.textContent = element.title;
            resultContainer.appendChild(header);

            const body = document.createElement('p');
            body.textContent = element.body;
            resultContainer.appendChild(body);
        })

        // addResultToPage(value1, value2);


        addResultToPage(value1, value2);
    } catch (error) {
        console.error('Ошибка:', error);
    }
}

// function addResultToPage(value1, value2) {
//     
//     const newItem = document.createElement('p');
//     newItem.className = 'result-item';
//     newItem.textContent = value1;
//     resultContainer.appendChild(newItem);

//     const newItem2 = document.createElement('p');
//     newItem2.className = 'result-item';
//     newItem2.textContent = value2;
//     resultContainer.appendChild(newItem);

// }

