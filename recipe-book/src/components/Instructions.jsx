export default function Instruction({ item }) {
  const instructions =
    item.instructions.split(".,").length > 0
      ? item.instructions.split(".,")
      : item.instructions;
  console.log(item, instructions);

  return (
    <ol>
      {instructions.map((x, index) => {
        return <li key={index}>{x}</li>;
      })}
    </ol>
  );
}
