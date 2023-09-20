type CharacterProps = {
    name: string;
    image: string;
  };
  
  const Character= ({ name, image }: CharacterProps) => (
    <div className="border rounded overflow-hidden">
      <img src={image} alt={name} width="100" className = "w-full"/>
      <p className = "p-2 text-xl font-semibold text-center">{name}</p>
    </div>
  );
  
  export default Character;
  