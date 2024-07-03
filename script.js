document.getElementById('messageForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const birthdate = document.getElementById('birthdate').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const message = document.getElementById('message').value;
    
    const messageOutput = `
        <p>Nama: ${name}</p>
        <p>Tanggal Lahir: ${birthdate}</p>
        <p>Jenis Kelamin: ${gender}</p>
        <p>Pesan: ${message}</p>
    `;
    
    document.getElementById('messageOutput').innerHTML = messageOutput;
});