{
  document.getElementById('btn').onclick = () => {
    const email = document.getElementById('email');
    const errMsgName = document.getElementById('err-msg-name');
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

    const emailVal = email.value;

    if (isValidEmail(pattern.test(emailVal), errMsg)) {
      const json = { "email": emailVal };
  
      fetch('http://0.0.0.0:5000/auth', {
        method: 'post',
        headers: { 'content-type': 'application/json', },
        body: JSON.stringify(json),
      }).then(res => {
        //console.log(res.json());
      });
    };
  };
}