type Props = {
  searchParams: Promise<{
    name?: string;
  }>;
};

const Custom = async (
  { searchParams }: Props,
) => {
  const resolvedSearchParams = await searchParams;
  const name = resolvedSearchParams.name ?? 'hoge'

  return (
    <div>
      <h1>APP</h1>
      <p>name: {name}</p>
    </div>
  )
}

export default Custom