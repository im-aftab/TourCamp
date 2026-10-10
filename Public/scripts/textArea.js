const textarea = document.getElementById('description');
// Auto-fit height on load
textarea.style.height = 'auto';
textarea.style.height = textarea.scrollHeight + 'px';

textarea.addEventListener('input', function () {
    this.style.height = 'auto';   // reset height
    this.style.height = this.scrollHeight + 'px'; // set new height
});