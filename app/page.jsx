import Feed from "@components/Feed";

const Home = () => (
  <section className='w-full flex-center flex-col'>
    <h1 className='head_text text-center'>
      Discover & Share
      <br className='max-md:hidden' />
      <span className='orange_gradient text-center'> AI-Powered Prompts</span>
    </h1>
    <p className='desc text-center'>
    CampaignGenie is an open-source AI-driven tool crafted to help you discover, create, and share powerful prompts designed for planning and launching successful campaigns in the modern world.


    </p>

    <Feed />
  </section>
);

export default Home;
