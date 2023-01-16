import Container from "./Container";
import Button from "./Button";
import Footer from "./Footer";
import Form from "./Form";
import Result from "./Result";

function App() {
  return (
    <Container>
      <Form />

      <Button
        discription="Przelicz!"
      />

      <Result 
      discription="Wartość EURO w PLN"
      result="N/a"
      />

      <Footer
        discription="Pola wymagane oznaczone *"
      />
    </Container>
  );
}

export default App;