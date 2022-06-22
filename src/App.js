import './App.css';

/*
  O if do final não está sendo reconhecido porém a lógica é exatamente a mesma, não consegui achar
  uma solução por conta do tempo :(
*/

export default function App() {

  function ContadorMinhocaUsuario() {

    var goal_user = document.getElementById('pr').value
    var up_user = document.getElementById('up').value
    var down_user = document.getElementById('down').value
    var final_user = (up_user - down_user)
    var counter_user = (up_user - down_user)
    var ye_user = document.querySelector('.yellow-u')
    var gr_user = document.querySelector('.green-u')

    const i = setInterval(function () {
      console.log("Posição => %d", counter_user);
      counter_user += final_user;

      if (counter_user === (goal_user / 2)) {
        console.log("Chegou na metade => %d", counter_user)

        ye_user.style.display = 'block';
      } else if (counter_user === (goal_user + final_user)) {
          clearInterval(i);
          console.log("Fim!! => %d", (counter_user - final_user))

          window.location.reload()

          gr_user.style.display = 'block';
        }

    }, 1000);
  }

  return (
    <div className='block-input'>
      <h1>Agora é sua vez</h1>

      <p>Informe a profundidade do buraco:</p>
      <input type="number" id="pr" className='inp' required />

      <p>O quanto a minhoca avança:</p>
      <input type="number" id="up" className='inp' required />

      <p>O quanto a minhoca cai:</p>
      <input type="number" id="down" className='inp' required />

      <button className='btn' onClick={ContadorMinhocaUsuario}>Aperte</button>

      <div className='yellow-u'>Metade!</div>
      <div className='green-u'>Fim!</div>

      <footer>Developed by <a href='mailto:lucasgomidecv@gmail.com'>Lucas Gomide</a></footer>
    </div>
  );
}
