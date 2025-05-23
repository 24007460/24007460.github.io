function ValidateForm() {
    const file_input = document.getElementById("resume");
    const allowed_extensions = /(\.pdf|\.doc|\.docx)$/i;

    if (!allowed_extensions.exec(file_input.value)) {
        // file_input.value = '';
        alert("Invalid file type!")
        return false;
    }

    return true;
}