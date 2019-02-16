import * as React from 'react';
import { graphql, Link } from 'gatsby';
import format from 'date-fns/format';

import useAudio from 'react-use/lib/useAudio';
import { theme } from '../lib/theme';
import { css } from 'glamor';
import { scale, rhythm } from '../lib/typography';

import { Head } from '@components/Head/Head';

interface EmbedProps {
  data: {
    episode: {
      id: string;
      title: string;
      description: string;
      date: string;
      html: string;
      embed: string;
      duration: string;
      artwork: string;
      audioUrl: string;
      fields: {
        slug: string;
      };
    };
  };
}

function useInterval(callback: () => void, delay: number) {
  const savedCallback = (React.useRef as any)();

  React.useEffect(() => {
    savedCallback.current = callback;
  });

  React.useEffect(() => {
    function tick() {
      savedCallback.current();
    }

    let id = setInterval(tick, delay);
    return () => clearInterval(id);
    // tslint:disable-next-line:align
  }, [delay]);
}

function Embed({ data }: EmbedProps) {
  const { episode } = data;
  const [audio, state, controls, ref] = useAudio({
    src: episode.audioUrl,
  });
  const [progress, setProgress] = React.useState(
    (state.time / state.duration) * 100
  );
  useInterval(() => {
    console.log((state.time / state.duration) * 100);
    setProgress((state.time / state.duration) * 100);
    // tslint:disable-next-line:align
  }, 300);
  const handleSeek = React.useCallback(event => {
    console.log(event.target.value);
    controls.seek((event.target.value / 100) * state.duration);
    // tslint:disable-next-line:align
  }, []);
  return (
    <>
      <Head
        title={episode.title}
        description={episode.description}
        slug={episode.fields.slug}
        image={episode.artwork}
      />
      <div>
        {audio}
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

        <h1 {...css({ color: theme.color.purple, marginTop: 0 })}>
          {episode.title}
        </h1>
        <p
          style={{
            ...scale(-1 / 5),
            display: 'block',
            marginBottom: rhythm(0.25),
            color: theme.color.gray,
            textTransform: 'uppercase',
            letterSpacing: '.1em',
          }}
        >
          <Link
            to="/"
            {...css({
              color: theme.color.gray,
              textDecoration: 'none',
              '&:hover': {
                color: theme.color.purple,
              },
            })}
          >
            The Undefined
          </Link>{' '}
          · {format(episode.date, 'MMM D, YYYY')}
        </p>
        <input
          type="range"
          value={progress}
          min="0"
          max="100"
          step="1"
          onChange={handleSeek}
        />
        <div {...css({ color: '#fff' })}>
          <pre>{JSON.stringify(state, null, 2)}</pre>
        </div>
        <button onClick={controls.pause}>Pause</button>
        <button onClick={controls.play}>Play</button>
        <br />
        <button onClick={controls.mute}>Mute</button>
        <button onClick={controls.unmute}>Un-mute</button>
        <br />
        <button onClick={() => controls.volume(0.1)}>Volume: 10%</button>
        <button onClick={() => controls.volume(0.5)}>Volume: 50%</button>
        <button onClick={() => controls.volume(1)}>Volume: 100%</button>
        <br />
        <button onClick={() => controls.seek(state.time - 5)}>-5 sec</button>
        <button onClick={() => controls.seek(state.time + 5)}>+5 sec</button>
      </div>
    </>
  );
}

export const embedQuery = graphql`
  query($slug: String!) {
    episode(fields: { slug: { eq: $slug } }) {
      id
      title
      description
      date
      html
      embed
      duration
      audioUrl
      fields {
        slug
      }
    }
  }
`;

export default Embed;
