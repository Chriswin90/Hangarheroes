
const items = document.querySelectorAll('.item');
const dropzones = document.querySelectorAll('.dropzone');
let correctCount = 0;

items.forEach(item => {
    item.addEventListener('dragstart', dragStart);
});

dropzones.forEach(zone => {
    zone.addEventListener('dragover', dragOver);
    zone.addEventListener('drop', drop);
});

function dragStart(e) {
    e.dataTransfer.setData('text/plain', e.target.dataset.category);
    e.dataTransfer.setData('id', e.target.innerHTML);
}

function dragOver(e) {
    e.preventDefault();
}

function drop(e) {
    e.preventDefault();
    const draggedCategory = e.dataTransfer.getData('text/plain');
    const itemHTML = e.dataTransfer.getData('id');
    if (e.target.dataset.category === draggedCategory) {
        e.target.classList.add('correct');
        e.target.innerHTML = itemHTML;
        correctCount++;
        if (correctCount === items.length) {
            document.getElementById('result').innerHTML = '<h2>🎉 You're fit to fly!</h2>';
        }
    } else {
        e.target.classList.add('incorrect');
        setTimeout(() => e.target.classList.remove('incorrect'), 1000);
    }
}
