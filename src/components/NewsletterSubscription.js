import { useState } from 'react';
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { query, where, getDocs } from "firebase/firestore";

const db = getFirestore();

export default function NewsletterSubscription() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const isValidEmail = (email) => {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return re.test(email);
  };

  const handleSubscribe = async () => {
    if (email === "") {
      setIsSuccess(false);
      setMessage("Email address cannot be blank.");
      return;
    }

    if (!isValidEmail(email)) {
      setIsSuccess(false);
      setMessage("The email address you entered seems to be in incorrect format.");
      return;
    }

    const q = query(collection(db, "newsletter"), where("email", "==", email));
    const querySnapshot = await getDocs(q);
  
    if (!querySnapshot.empty) {
      setIsSuccess(false);
      setMessage("This email is already registered.");
      return;
    }

    try {
      await addDoc(collection(db, "newsletter"), {
        email: email,
        subscribedAt: new Date()
      });
      setIsSuccess(true);
      setMessage("Successfully subscribed!");
      console.log("Document written!");
    } catch (e) {
      setIsSuccess(false);
      setMessage("Something went wrong. Please try again.");
      console.error("Error adding document: ", e);
    }
  };

  return (
    <div>
      <section className='block sm:hidden'>
        <div className="flex flex-col items-center mt-8 gap-5">
          <input 
            id="email-field" 
            placeholder='Email' 
            className='self-center text-md px-3 py-2 rounded-lg font-mono border-2 border-red-500 focus:outline-none focus:border-none focus:caret-[#ffc500]' 
            size="19"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <p className="text-md sm:text-md font-semibold">
            <button onClick={handleSubscribe} className='px-3 sm:px-5 py-2.5 sm:py-3.5 rounded-lg text-white bg-[#E83015] hover:shadow-sm hover:opacity-70 transition duration-150 ease-in-out cursor-pointer'>
              Notify Me When Available
            </button>
          </p>
        </div>
      </section>

      <section className='hidden sm:block'>
        <div className="flex justify-center mt-8">
          <input 
            id="email-field" 
            placeholder='Email' 
            className='self-center text-md px-5 py-3 rounded-l-lg font-mono border-2 border-red-500 focus:outline-none focus:border-none focus:caret-[#ffc500]' 
            size="25"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <p className="text-md sm:text-md font-semibold">
            <button onClick={handleSubscribe} className='px-3 sm:px-5 py-2 sm:py-3.5 rounded-r-lg text-white bg-[#E83015] hover:shadow-sm hover:opacity-70 transition duration-150 ease-in-out cursor-pointer'>
              Notify Me When Available
            </button>
          </p>
        </div>
      </section>
      {message && <p className={`text-center mt-4 ${isSuccess ? 'text-blue-500 font-bold' : 'text-red-500 font-bold'}`}>{message}</p>}
    </div>

  );
}