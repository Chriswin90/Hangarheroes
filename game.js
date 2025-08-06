
function completeQuest(n) {
    localStorage.setItem("quest" + n, "completed");
    alert("Quest " + n + " completed!");
}

window.onload = function() {
    let completed = 0;
    for (let i = 1; i <= 5; i++) {
        if (localStorage.getItem("quest" + i) === "completed") completed++;
    }
    if (completed === 5) {
        alert("🎉 All quests completed! Your badge unlock code is: SAFETYHERO");
    }
}
