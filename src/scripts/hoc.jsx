// Pass reusable logic down as props to components throughout
// our app


// HOC: higher order components

function withStyles(Component) {
  return props => {
    const style = { padding: '0.2rem', margin: '1rem' }
    return <Component style={style} {...props} />
  }
}

const Button = () => <button>Haceme click</ button>
const Text = () => <p>Hello world!</p>

const StyledButton = withStyles(Button);
const StyledText = withStyles(Text);


   
