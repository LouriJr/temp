function ProfileCard(props) {
  return (
    <div>
      <p>Nome: {props.nome}</p>
      <p>Idade: {props.idade} anos</p>
      <p>Profissão: {props.profissao}</p>
      <img src={props.foto} />
    </div>
  );
}

export default ProfileCard;
