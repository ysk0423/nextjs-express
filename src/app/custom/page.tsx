type Props = {
  searchParams: {
    name?: string;
  };
};

const Custom = async (
  { searchParams }: Props,
) => {
  const name = searchParams.name ?? 'hoge'
  console.log()

  return (
    <div>
      <h1>APP</h1>
      <p>name: {name}</p>
    </div>
  )
}

export default Custom