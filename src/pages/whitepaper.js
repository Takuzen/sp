import NewsletterSubscription from '../components/NewsletterSubscription';

export default function Whitepaper() {
    return (
        <main className="z-10 flex min-h-screen flex-col items-center justify-between px-5 py-12 sm:p-24">
          <div className="w-full leading-loose tracking-widest">
            <b>Function</b>
            <br/>
            <p>The NEW SPACE HANDBOOK meant to be used with our application, Teegarden, together serves as one of the essential tools to enable people to express themselves beyond screen, in a spatial way. The reliance we have is the device, Apple Vision Pro. With the bundle of these three items, even a kid should know how to play, but never hesitate to ask us for help.</p>
            <br/>
            <b>Purpose</b>
            <br/>
            <p>In March 2024, most people need to do a picture-frame-trimming and flattening of their imagination to deliver it through the internet so people around the world can appreciate it. Toshiyuki Inoko, the founder of Teamlabs, said that human today see the world as the picture. We do not see the whole world, instead we only see the world we recognize. ...</p>
            <p>// mokuji</p>
            <p>Get Your Hands Dirty</p>
            <p>Tips and Tools to be Pro</p>
            <br/>
            <b>Get Your Hands Dirty</b>
            <br/>
            <p>Do not try to make something will amaze people at the first time. Maybe you are so talented and you could make it. Go throw a couple of images and build your first space right away, and repeat it to get better, day by day.</p>
            <br/>
            <p>...</p>
            <br/>
            <p>Applogize in advance if there is any wrong information, since we are just a group of amateurs who are excited by these latest potential technologies and want to help more ... </p>
            <br/>
            <p>Please correct us or...</p>
            <p>We would probably keep updating this handbook or publish a sequel to avoid the information being outdated. To get more realtime tips by our email newsletter, annoucement by X.</p>
            <p>If you are looking for our community, join our Slack workspace.</p>
          </div>
          <NewsletterSubscription />
          <footer className="flex flex-col justify-center my-10">
            <div className='self-center mt-4 sm:mt-10 z-10 mb-4 sm:mb-10'>
              <p className="text-sm sm:text-lg font-serif self-center text-black">
                  &copy; 2024 Teegarden
              </p>
            </div>
          </footer>
        </main>
    )
}