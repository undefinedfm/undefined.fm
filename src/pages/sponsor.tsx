import * as React from 'react';
import { theme } from '@lib/theme';
import { css } from 'glamor';
import { rhythm } from '@lib/typography';
import { Seo } from '@components/Seo';
import { Footer } from '@components/Footer';
import { Nav } from '@components/Nav/Nav';

export interface SponsorProps {}

const Container = (props: any) => (
  <div
    {...css({
      maxWidth: 800,
      // [theme.media.medium]: { maxWidth: 968 },
      margin: '0 auto',
      padding: '0 1rem',
    })}
    {...props}
  />
);
const Sponsor: React.FC<SponsorProps> = props => {
  return (
    <div {...css({ color: '#fff' })}>
      <div
        {...css({
          top: 0,
          left: 0,
          right: 0,
          zIndex: 9999,
          height: 4,
          backgroundImage: `linear-gradient(left, #0ef 0%, #F249CF 100%)`,
          display: 'none',
          [theme.media.medium]: { display: 'block' },
        })}
      />
      <Seo
        title={'Sponsorships'}
        description={
          'Undefined Podcast Sponsorhips, Partnerships, and Activations'
        }
        slug={'/sponsorships'}
      />
      <Nav />

      <main
        {...css({
          marginTop: rhythm(2),
          marginLeft: 0,
          marginRight: 0,
        })}
      >
        <Container {...css({ paddingBottom: rhythm(2) })}>
          <header>
            <h1>Undefined Podcast Sponsorship</h1>
            <p {...css({ fontSize: '1.25rem' })}>
              If you’re hiring, launching a new product, managing an event, or
              doing anything else to help designers and developers level up,
              we’d love to help.
            </p>
          </header>
          <h2>What is The Undefined Podcast?</h2>
          <p>
            The only engineering podcast with a 2 drink minimum! Full stack
            developers Jared Palmer and Ken Wheeler have peer-to-peer
            conversations with world-class engineers about software development.
            This isn’t another beginner-focused software how-to show, but rather
            a podcast for the industry insiders by industry insiders. About Our
            Hosts... Both Jared and Ken are prolific in the open source
            enthusiasts and each has created some of the most popular frontend
            libraries and fullstack development tools in the world.
          </p>
          <p>Some combined stats between Ken &amp; Jared:</p>
          <ul>
            <li>95k+ GitHub stars</li>
            <li>30k+ Twitter Followers</li>
            <li>6.5k+ GitHub Followers</li>
          </ul>
        </Container>
        <div
          {...css({
            background: '#fff',
            color: '#000',
            padding: `${rhythm(2)} 0`,
          })}
        >
          <Container>
            <h2 {...css({ color: '#000' })}>
              What Our Audience is Saying About The Show
            </h2>
          </Container>
          <div
            {...css({
              padding: '2rem',
              display: 'flex',
              margin: '0 auto',
              maxWidth: 500,
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              '& blockquote': {
                margin: '1rem',
              },
              [theme.media.medium]: {
                maxWidth: 900,
                '& .twitter-tweet.twitter-tweet-rendered': {
                  width: '48% !important',
                },
              },
              [theme.media.large]: {
                maxWidth: 'initial',
                '& .twitter-tweet.twitter-tweet-rendered': {
                  width: '32.5% !important',
                },
              },
            })}
          >
            <blockquote className="twitter-tweet" data-conversation="none">
              <p lang="und" dir="ltr">
                <a href="https://twitter.com/hashtag/dank?src=hash&amp;ref_src=twsrc%5Etfw">
                  #dank
                </a>
              </p>
              &mdash; Spike Brehm (@spikebrehm){' '}
              <a href="https://twitter.com/spikebrehm/status/1102089421648588800?ref_src=twsrc%5Etfw">
                March 3, 2019
              </a>
            </blockquote>
            <blockquote className="twitter-tweet">
              <p lang="en" dir="ltr">
                I&#39;m extremely here for this content{' '}
                <a href="https://t.co/BfgXT9pELt">https://t.co/BfgXT9pELt</a>
              </p>
              &mdash; jason quense (@monasticpanic){' '}
              <a href="https://twitter.com/monasticpanic/status/1098585164312178688?ref_src=twsrc%5Etfw">
                February 21, 2019
              </a>
            </blockquote>{' '}
            <blockquote className="twitter-tweet">
              <p lang="en" dir="ltr">
                <a href="https://twitter.com/TheUndefinedIO?ref_src=twsrc%5Etfw">
                  @TheUndefinedIO
                </a>{' '}
                is great because it feels less like a “programming podcast” and
                more like a couple of buds shooting the shit, and they happen to
                be programmers and enjoy talking about programming related
                topics.
              </p>
              &mdash; Matt Hagner (@_hagnerd){' '}
              <a href="https://twitter.com/_hagnerd/status/1096548250725818368?ref_src=twsrc%5Etfw">
                February 15, 2019
              </a>
            </blockquote>{' '}
            <blockquote className="twitter-tweet">
              <p lang="en" dir="ltr">
                Quickly! Go listen to this episode of the{' '}
                <a href="https://twitter.com/TheUndefinedIO?ref_src=twsrc%5Etfw">
                  @TheUndefinedIO
                </a>{' '}
                with{' '}
                <a href="https://twitter.com/jevakallio?ref_src=twsrc%5Etfw">
                  @jevakallio
                </a>{' '}
                before they realize what they’ve done &amp; yank it off of the
                air 😂🔥
                <a href="https://t.co/GeW6sJ3GuZ">https://t.co/GeW6sJ3GuZ</a>
              </p>
              &mdash; Nader Dabit (@dabit3){' '}
              <a href="https://twitter.com/dabit3/status/1124337642496245760?ref_src=twsrc%5Etfw">
                May 3, 2019
              </a>
            </blockquote>{' '}
            <blockquote className="twitter-tweet">
              <p lang="en" dir="ltr">
                If you ever thought about a world where{' '}
                <a href="https://twitter.com/joerogan?ref_src=twsrc%5Etfw">
                  @joerogan
                </a>{' '}
                had a podcast about{' '}
                <a href="https://twitter.com/hashtag/javascript?src=hash&amp;ref_src=twsrc%5Etfw">
                  #javascript
                </a>{' '}
                =&gt;{' '}
                <a href="https://twitter.com/TheUndefinedIO?ref_src=twsrc%5Etfw">
                  @TheUndefinedIO
                </a>
                .{' '}
                <a href="https://twitter.com/ken_wheeler?ref_src=twsrc%5Etfw">
                  @ken_wheeler
                </a>{' '}
                and{' '}
                <a href="https://twitter.com/jaredpalmer?ref_src=twsrc%5Etfw">
                  @jaredpalmer
                </a>{' '}
                are HILARIOUS and informative. New fav{' '}
                <a href="https://twitter.com/hashtag/podcast?src=hash&amp;ref_src=twsrc%5Etfw">
                  #podcast
                </a>
                .
              </p>
              &mdash; Pasha Riger (@PashaRiger){' '}
              <a href="https://twitter.com/PashaRiger/status/1122314819246460929?ref_src=twsrc%5Etfw">
                April 28, 2019
              </a>
            </blockquote>{' '}
            <blockquote className="twitter-tweet">
              <p lang="en" dir="ltr">
                As a rather foul mouthed ex-musician myself the amount of
                f-bombs dropped per minute on this podcast is
                actually...refreshing.{' '}
                <a href="https://twitter.com/ken_wheeler?ref_src=twsrc%5Etfw">
                  @ken_wheeler
                </a>{' '}
                and{' '}
                <a href="https://twitter.com/jaredpalmer?ref_src=twsrc%5Etfw">
                  @jaredpalmer
                </a>{' '}
                are my spirit animals.{' '}
                <a href="https://t.co/aeYCykCTF2">https://t.co/aeYCykCTF2</a>
              </p>
              &mdash; rustipedia (@rossipedia){' '}
              <a href="https://twitter.com/rossipedia/status/1117068865656315905?ref_src=twsrc%5Etfw">
                April 13, 2019
              </a>
            </blockquote>{' '}
          </div>
        </div>
        <div {...css({ padding: `${rhythm(2)} 0` })}>
          <Container>
            <h2>Audience Size and Breakdown</h2>
            <p>
              Our episodes receive an average of 7000 downloads. While exact
              numbers are hard to get, here are a few bits of info about our
              audience that should give you an idea of who is listening:
            </p>
            <ul>
              <li>
                The geographic makeup of the audience consists of 45% USA, 8%
                United Kingdom, 5% Germany, 4% India, 3% Australia, 2% Sweden,
                2% Norway, 2% Poland, 2% Netherlands. The rest of the audience
                is fairly well distributed between the rest of Europe, Brazil,
                and India.
              </li>
              <li>
                Of those who listen in the browser, 80% use Chrome, 13% Safari,
                and 7% Firefox.
              </li>
              <li>
                Of those who listen on phones, it's roughly 80% iPhone users and
                20% Android users.
              </li>
              <li>
                According to Twitter Analytics, 54% of our audience has a
                household income greater than $75,000 USD, 31% greater than
                $150,000 USD. The top computed "lifestyle type" is Online Buyers
                and top computed “buying style” is Premium Brands.
              </li>
            </ul>
            <h2>Audience Interests</h2>
            <p>
              The Undefined.fm audience is primarily advanced software
              developers. In fact, we consciously do not cater to entry-level
              developers, as there are lots of other podcasts that focus on that
              audience. Instead, we approach each show as a peer-to-peer
              conversation with the world’s best engineers. Thus, half of the
              shows focus on advanced technical skills or methods, while the
              others focus on soft skills and/or topics tangentially related to
              development.
            </p>
            <p>
              The audience's technical interests include, but are not limited
              to:
            </p>
            <ul>
              <li>JavaScript frameworks such as React, Angular, and Vue</li>
              <li> CSS libraries, frameworks</li>
              <li>GraphQL</li>
              <li>JavaScript utility libraries</li>
              <li>Server-side / universal JavaScript</li>
              <li>Graphics and Data viz (d3, canvas)</li>
              <li>
                Alternative syntax/supersets TypeScript, Flow, Reason, Elm
              </li>
              <li>Full stack engineering</li>
              <li>Build tooling and developer experience</li>
              <li>Software design patterns and methodologies</li>
            </ul>
            <p>
              On the soft skills/culture side, the audience has an appetite for
              the following topics:
            </p>
            <ul>
              <li>Self-improvement & productivity</li>
              <li>Freelancing and running small businesses</li>
              <li>Engineering management and team building</li>
              <li>Tech culture</li>
              <li>Office life</li>
              <li>Remote work</li>
              <li>Marketing & passive income</li>
              <li>Work/life balance</li>
              <li>Fitness and nutrition</li>
              <li>
                Premium products — Jared and Ken feature top “Picks” each
                episode which is a product or service they’ve been enjoying
              </li>
            </ul>
            <h2>What You’ll Get &amp; Pricing</h2>
            <p>
              We have found that we get the best results for our advertisers
              when they sponsor at least three shows. Currently each sponsor
              spot is $1,000 USD per episode with a minimum of three episodes,
              though this price will increase as our audience does. Single show
              sponsorships are $1,200.
            </p>
            <p>As part of the sponsorship package, you'll get:</p>
            <ol>
              <li>
                A sponsorship section at the top of the episode show notes.
                These notes will be listed on both the Undefined.fm website as
                well as on each user's mobile device as they listen to the
                podcast. This is a great opportunity to list any coupon codes or
                unique links you'd like listeners to click on.
              </li>
              <li>
                {' '}
                A mention and single line at the top of the show. For example,
                Jared or Ken might say,{' '}
                <em>
                  This episode is sponsored by Clubhouse.io. It’s my new
                  favorite agile project management software; we switched from
                  Jira to Clubhouse around 3 months ago and haven’t looked back
                  and we’ll talk about why partway through the show.
                </em>
              </li>
              <li>
                A 1-2 min sponsor spot midway during the episode. While we can
                do a regular ad read, we have found that having Ken or Jared
                talk about the product or service and their experience with it
                gives it authenticity. A thank-you tweet from{' '}
                <a href="http://twitter.com/theundefinedio">@theundefinedio</a>{' '}
                with a link to your product or service from the show's Twitter
                account.
              </li>
            </ol>
            <h2>Contact Us</h2>
            <p>
              Please <a href="mailto:hello@undefined.fm">send us an email</a> if
              you are interested in working together and sponsoring the podcast.
            </p>
          </Container>
        </div>
      </main>
      <Footer showForm={false} />
    </div>
  );
};

Sponsor.displayName = 'Sponsorships';

export default Sponsor;
