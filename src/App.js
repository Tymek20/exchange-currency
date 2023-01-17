import Container from "./Container";
import Footer from "./Footer";
import Form from "./Form";

function App() {
  
  return (
    <Container>

      <Form
        onName="Kantor EUR/PLN"
        onResult="Wartość EURO w PLN"
      />

      <Footer
        discription="Pola wymagane oznaczone *"
      />

    </Container>
  );
}

export default App;