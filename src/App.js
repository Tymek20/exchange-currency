import Container from "./Container";
import Footer from "./Footer";
import Form from "./Form";

function App() {
  
  return (
    <Container>

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