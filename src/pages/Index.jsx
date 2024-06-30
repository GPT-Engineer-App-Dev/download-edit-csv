import CSVEditor from "../components/CSVEditor";

function Index() {
  return (
    <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
      <div>
        <h1 className="text-3xl text-center">CSV Upload, Edit, and Download Tool</h1>
        <p className="text-center">
          Upload a CSV file, edit the data, and download the updated file.
        </p>
      </div>
      <CSVEditor />
    </main>
  );
}

export default Index;