interface Props {
  params: Promise<{ testId: string }>;
}

const TestPage = async ({ params }: Props) => {
  const { testId } = await params;

  return (
    <div>
      <h1>test page Id: {testId} </h1>
    </div>
  );
};

export default TestPage;
