import PageContainer from "../components/PageContainer";
import PageHeader from "../components/PageHeader";

export default function Contact() {
  return (
    <PageContainer>
      <>
        <PageHeader title="Contact" />
        <form
          action="mailto:edwald.he@gmail.com"
          method="post"
          encType="text/plain"
          className="flex flex-col items-start mt-5"
        >
          <label htmlFor="name" className="mb-2 font-bold">
            Your Name:
          </label>
          <input
            name="name"
            type="text"
            className="h-10 w-full lg:w-56 border border-blue-200 rounded-lg px-2"
          />
          <label htmlFor="message" className="mt-10 mb-2 font-bold">
            Message:
          </label>
          <textarea
            name="message"
            rows={10}
            className="h-40 w-full border border-blue-200 rounded-lg p-2"
          />
          <input
            type="submit"
            value="Send"
            className="w-32 h-10 bg-blue-400 mt-5 rounded-lg"
          ></input>
        </form>
      </>
    </PageContainer>
  );
}
