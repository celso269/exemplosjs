const swap = (arr, i, j) => {
    [arr[i], arr[j]] = [arr[j], arr[i]];
};

const shuffle = (arr, numTrocas) => {
    for (let i = 0; i < numTrocas; i++) {
        let idx1 = Math.floor(Math.random() * arr.length);
        let idx2 = Math.floor(Math.random() * arr.length);
        swap(arr, idx1, idx2);
    }
};

const bubble_sort = (arr) => {
    let len = arr.length;
    for (let i = 0; i < len - 1; i++) {
        for (let j = 0; j < len - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1);
            }
        }
    }
};

const selection_sort = (arr) => {
    let len = arr.length;
    for (let i = 0; i < len - 1; i++) {
        let minIdx = i;
        for (let j = i + 1; j < len; j++) {
            if (arr[j] < arr[minIdx]) {
                minIdx = j;
            }
        }
        swap(arr, i, minIdx);
    }
};

const particionamento = (arr, esq, dir) => {
    let pivot = arr[dir];
    let i = esq - 1;
    for (let j = esq; j < dir; j++) {
        if (arr[j] < pivot) {
            i++;
            swap(arr, i, j);
        }
    }
    swap(arr, i + 1, dir);
    return i + 1;
};

const quick_sort = (arr, esq, dir) => {
    if (esq < dir) {
        let pi = particionamento(arr, esq, dir);
        quick_sort(arr, esq, pi - 1);
        quick_sort(arr, pi + 1, dir);
    }
};

function add() {
    let input = document.getElementById("valor");
    let lista = document.getElementById("valores");

    if (input.value.trim() === "") return;

    let node = document.createElement("li");
    node.appendChild(document.createTextNode(input.value));
    lista.appendChild(node);

    input.value = "";
}

function ordenar() {
    let lista = document.getElementById("valores");
    let select = document.getElementById("algoritmo");

    let arr = Array.from(lista.children).map(item => parseInt(item.innerHTML));

    if (select.value === "bubble_sort") {
        bubble_sort(arr);
    } else if (select.value === "selection_sort") {
        selection_sort(arr);
    } else if (select.value === "quick_sort") {
        quick_sort(arr, 0, arr.length - 1);
    }

    lista.innerHTML = arr.map(num => `<li>${num}</li>`).join("");
}

function misturar() {
    let lista = document.getElementById("valores");

    let arr = Array.from(lista.children).map(item => parseInt(item.innerHTML));
    shuffle(arr, arr.length * 2);

    lista.innerHTML = arr.map(num => `<li>${num}</li>`).join("");
}
