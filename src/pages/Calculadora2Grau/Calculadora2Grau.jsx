import styles from "./Calculadora2Grau.module.css";

export default function Calculadora2Grau() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Equação de 2° Grau</h1>
      <div className={styles.inputContainer}>
        <input className={styles.input} placeholder="Digite o 1 número" />
        <input className={styles.input} placeholder="Digite o 2 número" />
        <input className={styles.input} placeholder="Digite o 3 número" />
        <button className={styles.button}>Calcular</button>
      </div>
      <div>
        <h2 className={styles.title}>As raízes são: </h2>
        <h3 className={styles.title}>O valor de delta é: </h3>
      </div>
    </div>
  );
}
