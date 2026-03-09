import ProfileCard from "./components/ProfileCard/ProfileCard";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.container}>
      <h1>Lista de Perfis</h1>
      <ProfileCard
        nome="Erick"
        idade="28"
        profissao="Professor"
        foto="https://istoedinheiro.com.br/wp-content/uploads/sites/17/2022/12/snapinstaapp-1080-320489457-195090603100868-7252177604779913634-n-e1671561984301.jpg"
      />
      <ProfileCard
        nome="Ana"
        idade="22"
        profissao="Designer"
        foto="https://istoedinheiro.com.br/wp-content/uploads/sites/17/2025/11/mega-sena-1112203505-0-768x432-1.jpeg"
      />
      <ProfileCard nome="Roberto" idade="24" profissao="Mecanico" foto="" />
    </div>
  );
}

export default App;
