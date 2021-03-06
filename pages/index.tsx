import { Page } from '../components/Page';
import { Paragraph } from '../components/layout/Paragraph';
import { Quote } from '../components/layout/Quote';

export default function Home() {
  return (
    <Page
      title="Home"
      heading="Sharing my thoughts on how to build stuff."
      headingProps={{
        size: '4xl',
      }}
      hideHeading={true}
    >
      <Quote>
        If you understand it, you can master it. When you master it, you can do
        anything with it.
      </Quote>

      <Paragraph>
        The world of software engineering, or simply, the world, is an
        opinionated place. Everyone has some kind of opinion on how something
        should be executed. Each and every day, we thrive to improve our crafts,
        either from reading books or articles on the web.
      </Paragraph>

      <Paragraph>
        You might have found this page out of pure luck, or maybe more
        accurately, bad luck. But fear not, this is the home of my thoughts and
        opinions only. Nothing shady will be forced upon you here, only my
        opinions on how things should be crafted. But that in itself might be
        shady 🤔.
      </Paragraph>

      <Paragraph>
        Now that you know where you are, you might wonder, who is this author of
        the plain looking site? Well, I am a software developer based in Oslo,
        Norway. My passion lies with frontend development where I create
        websites in addition to interactive bits and bobs found inside of them.
        I might try my hand on other disciplines from time to time, so you might
        find a variety of different topics discussed here.
      </Paragraph>
    </Page>
  );
}
