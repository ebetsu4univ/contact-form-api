{
  document.getElementById('btn').onclick = () => {
    const email = document.getElementById('email').value;
    const json = { "email": email };
  
    fetch('http://0.0.0.0:5000/auth', {
      method: 'post',
      headers: { 'content-type': 'application/json', },
      body: JSON.stringify(json),
    }).then(res => {
      //console.log(res.json());
    });
  };
}