function Component() {
  const [a, setA] = useState(1);

  function click1() {
    setA(a + 1);
    console.log('a1---', a);
    setA(a + 1);
    console.log('a2---', a);
    setA(a + 1);
    console.log('a3---', a);
    //  setState 是异步更新的
  }

  return (
    <>
      <button onClick={click1}>A</button>
    </>
  );
}