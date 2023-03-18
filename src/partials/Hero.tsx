import {
  GradientText,
  HeroAvatar,
  HeroSocial,
  Section,
} from 'astro-boilerplate-components';

const Hero = () => (
  <Section>
    <HeroAvatar
      title={
        <>
          Hi there, I'm <GradientText>Mahdi</GradientText> 👋
        </>
      }
      description={
        <>
          <p>
            I am a <em>software engineer</em> and <em>developer advocate</em>{' '}
            with 20+ years of experience. I am born in 1986 and write code since
            age 13. I used to be a <em>3d/graphics/game developer</em> for 15
            years and i have been doing <em>OpenGL</em> and <em>DirectX</em>.
          </p>
          <p>&nbsp;</p>
          <p>
            I have tons of experience with back-end development.
            Crypto/Crytography, gRPC, Kubernetes and NoSQLs have taken a great
            share of my stack.
          </p>
          <p>&nbsp;</p>
          <p>
            I've done projects with C/C++, .NET and Rust. Today, i mostly write
            C# code and am diving even deeper in Rust.
          </p>
          <p>&nbsp;</p>
          <p>
            As a hobbyist, I also develop and maintain serveral packages for{' '}
            <em>Flutter</em>. I contribute to <em>gRPC</em>,{' '}
            <em>Protocol Buffers</em>, <em>Kubernetes</em> and <em>.NET</em>.
            Please see my GitHub to find out more.
          </p>
          <p>&nbsp;</p>
          <p>I play guitar 🎸 as a beginner.</p>
          <p>&nbsp;</p>
        </>
      }
      avatar={
        <img
          className="h-80 w-64"
          src="/assets/images/avatar.svg"
          alt="Avatar image"
          loading="lazy"
        />
      }
      socialButtons={
        <>
          <a href="/">
            <HeroSocial
              src="/assets/images/twitter-icon.png"
              alt="Twitter icon"
            />
          </a>
          <a href="/">
            <HeroSocial
              src="/assets/images/facebook-icon.png"
              alt="Facebook icon"
            />
          </a>
          <a href="/">
            <HeroSocial
              src="/assets/images/linkedin-icon.png"
              alt="Linkedin icon"
            />
          </a>
          <a href="/">
            <HeroSocial
              src="/assets/images/youtube-icon.png"
              alt="Youtube icon"
            />
          </a>
        </>
      }
    />
  </Section>
);

export { Hero };
