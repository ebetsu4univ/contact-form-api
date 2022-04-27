{
  document.getElementById('btn').onclick = () => {
    const email = document.getElementById('email');
    const errMsgName = document.getElementById('err-msg-name');
    const serverMsgName = document.getElementById('server-msg-name');

    const pattern = /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]+.[A-Za-z0-9]+$/;
    const errMsg = 'このメールアドレスは不適切です..';

    const isValidEmail = (isValid, errMsg) => {
      if (isValid) {
        errMsgName.textContent = '';
        email.classList.remove('input-invalid');
        return true;
      } else {
        errMsgName.classList.add('form-invalid');
        errMsgName.textContent = errMsg;

        email.classList.add('input-invalid');
      }
      return false;
    };

    const requestEmail = async (url, email) => {
      const json = { "email": email };
      const response = await fetch(url, {
        method: 'post',
        headers: { 'content-type': 'application/json', },
        body: JSON.stringify(json),
      });
      return response.json();
    };

    const emailVal = email.value;

    if (isValidEmail(pattern.test(emailVal), errMsg)) {
      requestEmail('http://0.0.0.0:5000/auth', emailVal)
        .then(data => {
          serverMsgName.textContent = data.msg;
          console.log(data);

          // if (response.status == 200) {
          // }
        });
    };
  };
}