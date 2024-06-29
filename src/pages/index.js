import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import NewsletterSubscription from '../components/NewsletterSubscription';
import en from '../../public/locales/en-US.json';
import ja from '../../public/locales/ja-JP.json';
import zh from '../../public/locales/zh-CN.json';

export default function Home() {
  const videoRef = useRef(null);
  const { locale, locales, asPath } = useRouter();
  const localeDisplayNames = {
    "en-US": 'EN',
    "ja-JP": '日本語',
    "zh-CN": '中文'
  };
  const getTranslation = (locale, key) => {
    switch (locale) {
      case 'en-US':
        return en[key];
      case 'ja-JP':
        return ja[key];
      case 'zh-CN':
        return zh[key];
      default:
        return en[key];
    }
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.currentTime = 1;
    }
  }, []);

  return (
    <main className="max-h-max flex flex-col bg-white">
      <div id="header" className='max-w-full mx-4 sm:mx-7 my-3 sm:my-3 flex justify-between'>
        <div className='flex flex-row items-center gap-2 sm:gap-3 '>
          <Image
            src="/notesp-logo.png"
            alt="notesp-logo"
            width={40}
            height={40}
            className="block md:hidden"
            priority
          />
          <Image
            src="/notesp-logo.png"
            alt="notesp-logo"
            width={70}
            height={70}
            className="hidden md:block"
            priority
          />
          <p className="text-2xl sm:text-4xl font-black font-serif text-black pt-2">
            NoteSP
          </p>
        </div>
        <div className='flex flex-row items-center gap-4'>
          {locales.map((loc) => (
            <Link key={loc} href={asPath} locale={loc} legacyBehavior>
              <a className={`text-sm sm:text-md font-semibold ${locale === loc ? 'underline' : ''}`}>
                {localeDisplayNames[loc]}
              </a>
            </Link>
          ))}
        </div>
      </div>
      <div className='flex justify-center'>
        <video ref={videoRef} width="800" height="360" controls autoPlay muted>
          <source src="https://storage.googleapis.com/booksp-eae3c.appspot.com/facede/video/notesp-intro.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div>
        <div className='font-black text-2xl sm:text-5xl md:mx-5 lg:mx-0 self-center mt-10'>
          <p className='text-center'>{getTranslation(locale, "headline")}</p>
        </div>
        <NewsletterSubscription />
      </div>
      {/* Other content */}
      <div className="flex flex-col gap-4 sm:gap-10 pt-7">
        <text className='self-center'>And</text>
        <section className='block sm:hidden'>
          <div className='flex flex-col items-center gap-10 mt-4'>
            <div>
              <Link href="https://twitter.com/notespapp">
                <Image
                  src="/notesp-x-logo.png"
                  alt="NoteSP X Logo"
                  width={220}
                  height={140}
                  className='block rounded-md hover:shadow-md hover:opacity-70 transition duration-150 ease-in-out cursor-pointer'
                  priority
                />
              </Link>
            </div>
            <div>
              <Link href="https://join.slack.com/t/teegarden-support/shared_invite/zt-2e9huyxaq-Uq4Bkj09uiN91VJ2LNr2NQ">
                <Image
                  src="/notesp-slack-logo.png"
                  alt="NoteSP Slack Logo"
                  width={220}
                  height={140}
                  className='block rounded-md hover:shadow-md hover:opacity-70 transition duration-150 ease-in-out cursor-pointer'
                  priority
                />
              </Link>
            </div>
            <div>
              <Link href="https://github.com/Takuzen/teegarden">
                <Image
                  src="/notesp-github-logo.png"
                  alt="NoteSP GitHub Logo"
                  width={220}
                  height={140}
                  className='block rounded-md hover:shadow-md hover:opacity-70 transition duration-150 ease-in-out cursor-pointer'
                  priority
                />
              </Link>
            </div>
          </div>
        </section>
        <section className='hidden sm:block'>
          <div className='flex justify-center gap-10'>
            <div>
              <Link href="https://twitter.com/notespapp">
                <Image
                  src="/notesp-x-logo.png"
                  alt="NoteSP X Logo"
                  width={209}
                  height={140}
                  className='block rounded-md hover:shadow-md hover:opacity-70 transition duration-150 ease-in-out cursor-pointer'
                  priority
                />
              </Link>
            </div>
            <div>
              <Link href="https://join.slack.com/t/teegarden-support/shared_invite/zt-2e9huyxaq-Uq4Bkj09uiN91VJ2LNr2NQ">
                <Image
                  src="/notesp-slack-logo.png"
                  alt="NoteSP Slack Logo"
                  width={209}
                  height={140}
                  className='block rounded-md hover:shadow-md hover:opacity-70 transition duration-150 ease-in-out cursor-pointer'
                  priority
                />
              </Link>
            </div>
            <div>
              <Link href="https://github.com/Takuzen/teegarden">
                <Image
                  src="/notesp-github-logo.png"
                  alt="NoteSP GitHub Logo"
                  width={209}
                  height={140}
                  className='block rounded-md hover:shadow-md hover:opacity-70 transition duration-150 ease-in-out cursor-pointer'
                  priority
                />
              </Link>
            </div>
          </div>
        </section>
        <text className='self-center'>See you soon.</text>
      </div>
      <footer className="flex flex-col justify-center my-10">
        <div className='self-center mt-4 sm:mt-10 z-10 mb-4 sm:mb-10'>
          <p className="text-sm sm:text-lg font-serif self-center text-black">
            Copyright © 2024 SP, All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}