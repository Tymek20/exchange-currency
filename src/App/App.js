import Container from "./Container";
import Footer from "./Container/Footer";
import Form from "./Container/Form";
import DisplayClock from "./Container/DisplayClock";

function App() {

  return (
    <Container>

      <DisplayClock />

      <Form
        onName="Kantor Walut"
        onResult="Wartość w PLN "
      />

      <Footer
        discription="Pola wymagane oznaczone *"
      />

    </Container>
  );
}

export default App;