// We can notify subscribers when an event occurs

// we have 3 parts
// Observers: they will get notified when an event occurs
// Subscribe() / Unsubscribe(): add or remove from the obs List
// notify(): the method to notify, dahhh

import { ToastContainer, toast } from 'react-toastify'
class Observable {
  constructor() {
    this.observers = []
  }
  
  subscribe(func) {
    this.observers.push(func)
  }

  unsubscribe(func) {
    this.observers = this.observers.filter( observer => observer != func )
  }

  notify(data) {
    this.observers.forEach(observer => observer(data))
  }
}

function logger(data) {
  console.log(`${Date.now()} ${data}`);
}

function toastify(data) {
  toast(data);
}

const observable = new Observable()
observable.subscribe(logger)
observable.subscribe(toastify)

function App() {
  function handleClick() {
    observable.notify("El usuario clickeo nashe");
  }

  function handleToggle() {
    observable.notify("El usuario toggleo el switch");
  }

  return (
    <div >
      <Button onClick={handleClick}> Haceme Click! </Button>
      <FormControlLabel control={<Switch onChange={handleToggle} />} />
      <ToastContainer />
    </div>
  )
}
