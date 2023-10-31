import NewsletterSubscription from '../components/NewsletterSubscription';

export default function Whitepaper() {
    return (
        <main className="z-10 flex min-h-screen flex-col items-center justify-between px-5 py-12 sm:p-24">
          <div className="w-full leading-loose tracking-widest">
            <div className='flex justify-center mb-10'>
              <p className='text-xl font-semibold'>Whitepaper</p>
            </div>
            <p>Introduction</p>
            <br/>
            <p>BookSP is a spatial computing application for Apple Vision Pro device. It allows you to immerse yourself in reading as if you were in a study surrounded by books, anytime, anywhere.</p>
            <br/>
            <p>Problem</p>
            <br/>
            <p>With the widespread adoption of e-books, most new publications are now available in Kindle format, readable on smartphones and e-book readers like Kindle. This development has allowed us to dive into our favorite books in non-routine environments like travel destinations and cafes without carrying a heavy backpack full of books. We are sincerely grateful to the countless pioneers who have worked hard to make this a reality.</p>
            <br/>
            <p>We stand on the shoulders of these giants to take the digital reading experience a step further.</p>
            <br/>
            <p>What is missing in the flat-screen reading experience is an overview. People often gain cues for action from visual information more than they realize. The existence of the term &quot;stealth advertising&quot; proves this point. Among other advantages, the high level of overview when books are arranged individually or collectively is one of the main reasons people still keep bookshelves at home despite the space they take up.</p>
            <br/>
            <p>Solution</p>
            <br/>
            <p>With the possibilities brought about by spatial computing through Apple&lsquo;s Vision Pro announcement, we believe the lack of an overview in digital books can also be greatly improved.</p>
            <br/>
            <p>You can pick a book that catches your eye from a wall full of books, pull it out by its spine, and hold it in your hand. While supporting the book with the palm of your hand, you can flip through the pages with your dominant hand. We are fully committed to developing this sense of immersion and tactile interaction.</p>
            <br/>
            <p>People who love books come from various walks of life. Some may not have enough space for all their books, while others may not have the luxury of a private study but still desire a quiet space and time to immerse themselves in reading. Others might be constantly on the move and wish for a physical environment where they are surrounded by the spines of their favorite books and can pick one up whenever they feel like it. Our application, in complement with Vision Pro and its devices, aims to fulfill the hearts of all book lovers around the world who are striving within their limited resources.</p>
            <br/>
            <p>Above is the North Star for our team.</p>
            <br/>
            <br/>
          </div>
          <NewsletterSubscription />
          <footer className="flex flex-col justify-center my-10">
            <div className='self-center mt-4 sm:mt-10 z-10 mb-4 sm:mb-10'>
              <p className="text-sm sm:text-lg font-serif self-center text-black">
                  &copy; 2023 Teegarden
              </p>
            </div>
          </footer>
        </main>
    )
}