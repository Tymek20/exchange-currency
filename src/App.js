import Container from "./Container";
import Footer from "./Footer";
import Form from "./Form";
import DisplayClock from "./MyDate";



function App() {


  return (
    <Container>

      <DisplayClock />

      <Form
        onName="Kantor Walut"
        onResult="Wartość w PLN"
      />

      <Footer
        discription="Pola wymagane oznaczone *"
      />

    </Container>
  );
}

export default App;