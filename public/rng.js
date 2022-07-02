function solve() {
    let inputs = document.querySelectorAll('input');
    let list = document.getElementById('list');
    document.querySelector('button').addEventListener('click', rng);

    function rng() {
        let number = Number(inputs[0].value);
        let from = Number(inputs[1].value);
        let to = Number(inputs[2].value);
        let runs = Number(inputs[3].value);
        let chance = inputs[4];
        let result = inputs[5];

        while (list.hasChildNodes()) {
            list.removeChild(list.firstChild);
        }
        if (number < from || number > to || number == '') {
            li("Invalid Input");
            chance.value = '';
            result.value = '';
        } else {
            let count = 0;
            for (let i = 1; i <= runs; i++) {
                let rng = Math.floor(Math.random() * (to - from + 1) + from);
                if (rng == number) {
                    li(`Lucky Throw: ${i}`);
                    count++;
                }
            }
            if (count == 0) {
                li("Bad Luck");
            }
            chance.value = `${((from / to) * 100).toFixed(3)}%`;
            result.value = count;
        }
    }
}

function li(text) {
    const node = document.createElement('li');
    const textnode = document.createTextNode(text);
    node.appendChild(textnode);
    document.getElementById('list').appendChild(node);
}