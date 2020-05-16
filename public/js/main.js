const postUserMessage = () => {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    const formData = new FormData();
    formData.append('name', name);
    fetch('/message', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name: name,
           email:email,
           subject:subject,
           message:message

        })
    })
    .then(res => {
        return res.json();
    })
    .then(data => {
        const mess=document.getElementById('mess');
        mess.innerHTML= `
       ${data.user.name}
       ${data.user.email}
       ${data.user.subject}
       ${data.user.message}
       ${data.error}
        `
        console.log(data);
    })
    .catch(e => {
        console.log(e);
    })
}

