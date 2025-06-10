let totalWater = 0;
const goal = 6000; // 6 liters in ml

// Load progress from localStorage
document.addEventListener('DOMContentLoaded', () => {
    const savedWater = localStorage.getItem('totalWater');
    if (savedWater) {
        totalWater = parseInt(savedWater);
        updateProgress();
    }
});

function addWater(amount) {
    totalWater += amount;
    if (totalWater > goal) {
        totalWater = goal;
        alert("Goal reached! You've consumed 6 liters today!");
    }
    updateProgress();
    saveProgress();
}

function updateProgress() {
    const percentage = (totalWater / goal) * 100;
    
    // Update water level
    const waterElement = document.getElementById('water');
    waterElement.style.height = `${percentage}%`;
    
    // Update progress bar
    const progressElement = document.getElementById('progress');
    progressElement.style.width = `${percentage}%`;
    
    // Update text
    const progressText = document.getElementById('progress-text');
    progressText.textContent = `${totalWater} ml / ${goal} ml`;
}

function resetProgress() {
    if (confirm("Are you sure you want to reset your progress?")) {
        totalWater = 0;
        updateProgress();
        saveProgress();
    }
}

function saveProgress() {
    localStorage.setItem('totalWater', totalWater);
}