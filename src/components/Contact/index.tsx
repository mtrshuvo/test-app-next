import SectionHeader from "../Common/SectionHeader";
import ContactForm from "./ContactForm";
import NewsLatterBox from "./NewsLatterBox";

const Contact = () => {
  return (
    <section id="contact" className="overflow-hidden py-16 md:py-20 lg:py-28">
      <div className="container">
      <SectionHeader
            headerInfo={{
              title: "Contact",
              subtitle: "Let's Talk",
              description: `Do you have an interesting idea on your mind or want to integrate Artificial Intelligence with your business. Feel free to contact with us. We're more than happy to talk about your goals.`,
            }}
          />
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 ">
            <div
              className="mb-12 rounded-sm bg-white px-8 py-11 shadow-three dark:bg-gray-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
              data-wow-delay=".15s
              "
            >
              <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
                Need Help?
              </h2>
              <p className="mb-12 text-base font-medium text-body-color">
                Our support team will get back to you ASAP via email.
              </p>
              <ContactForm />
            </div>
          </div>
          <div className="w-full px-4 lg:w-5/12 xl:w-4/12">
            {/* <NewsLatterBox /> */}
          </div>
        </div>
        <NewsLatterBox />
      </div>
    </section>
  );
};

export default Contact;
