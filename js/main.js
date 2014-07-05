function code() {
    document.getElementById('code').className = 'selected';
    document.getElementById('life').className = '';
    document.getElementById('work').className = '';
}
function life() {
    document.getElementById('code').className = '';
    document.getElementById('life').className = 'selected';
    document.getElementById('work').className = '';
}
function work() {
    document.getElementById('code').className = '';
    document.getElementById('life').className = '';
    document.getElementById('work').className = 'selected';
}